import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';

const TestComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>} />
        <Route path="/quests" component={() => <div>Quests</div>} />
        <Route path="/items" component={() => <div>Items</div>} />
        <Route path="/about" component={() => <div>About</div>} />
        <Route path="/contact" component={() => <div>Contact</div>} />
      </Switch>
    </BrowserRouter>
  );
};

test('renders header with navigation links', () => {
  render(<TestComponent />);
  const navLinks = screen.getAllByRole('link');
  navLinks.forEach((link) => {
    expect(link).toBeInTheDocument();
  });
});

test('navigation link clicks and active class', () => {
  render(<TestComponent />);
  const navLinks = screen.getAllByRole('link');

  navLinks.forEach((link, index) => {
    userEvent.click(link);
    expect(link).toHaveClass('active');
    navLinks
      .filter((_, idx) => idx !== index)
      .forEach((otherLink) => {
        expect(otherLink).not.toHaveClass('active');
      });
  });
});

test('header is always visible on the page', () => {
  const { container } = render(<TestComponent />);
  const header = container.querySelector('header');
  expect(header).toBeInTheDocument();
  expect(header).toBeVisible();
});
