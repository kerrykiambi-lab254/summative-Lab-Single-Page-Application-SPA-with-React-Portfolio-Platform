




import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Personal Project Showcase App', () => {
  test('renders the application header', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { name: /Creative/i });
    expect(headerElement).toBeInTheDocument();
  });

  test('renders initial projects', () => {
    render(<App />);
    expect(screen.getByText('Solaris E-Commerce')).toBeInTheDocument();
    expect(screen.getByText('Nebula Analytics')).toBeInTheDocument();
  });

  test('filters projects based on search term', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search projects/i);
    
    fireEvent.change(searchInput, { target: { value: 'Solaris' } });
    
    expect(screen.getByText('Solaris E-Commerce')).toBeInTheDocument();
    expect(screen.queryByText('Nebula Analytics')).not.toBeInTheDocument();
  });

  test('adds a new project when form is submitted', () => {
    render(<App />);
    const titleInput = screen.getByLabelText(/Project Title/i);
    const descInput = screen.getByLabelText(/Description/i);
    const addButton = screen.getByRole('button', { name: /Add Project/i });

    fireEvent.change(titleInput, { target: { value: 'New Test Project' } });
    fireEvent.change(descInput, { target: { value: 'Test description content' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test description content')).toBeInTheDocument();
  });

  test('deletes a project when delete button is clicked', () => {
    render(<App />);
    const initialProjects = screen.getAllByRole('article');
    const deleteButtons = screen.getAllByLabelText(/Delete project/i);
    
    fireEvent.click(deleteButtons[0]);
    
    const remainingProjects = screen.getAllByRole('article');
    expect(remainingProjects.length).toBe(initialProjects.length - 1);
  });
});


