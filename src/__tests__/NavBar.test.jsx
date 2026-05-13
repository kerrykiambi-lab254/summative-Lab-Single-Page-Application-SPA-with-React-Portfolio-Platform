import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';

describe('NavBar', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
