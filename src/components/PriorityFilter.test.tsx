import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PriorityFilter from './PriorityFilter';

describe('PriorityFilter Component', () => {
  it('renders the dropdown with options', () => {
    render(<PriorityFilter onFilterChange={jest.fn()} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText(/low/i)).toBeInTheDocument();
    expect(screen.getByText(/medium/i)).toBeInTheDocument();
    expect(screen.getByText(/high/i)).toBeInTheDocument();
  });

  it('calls onFilterChange when a new option is selected', () => {
    const filterChangeMock = jest.fn();
    render(<PriorityFilter onFilterChange={filterChangeMock} />);

    const dropdown = screen.getByRole('combobox');
    fireEvent.change(dropdown, { target: { value: 'High' } });

    expect(filterChangeMock).toHaveBeenCalledWith('High');
  });
});
