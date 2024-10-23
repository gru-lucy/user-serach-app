import { describe, it, expect } from 'vitest';  
import { render, screen } from '@testing-library/react';  
import { MemoryRouter } from 'react-router-dom';

import App from './App';  
import { renderWithProviders } from './utils/test-utils';

describe('App routing tests', () => {  
  it('renders Dashboard component on root path', () => {  
    renderWithProviders(  
      <MemoryRouter initialEntries={['/']}>  
        <App />  
      </MemoryRouter>  
    );  
    expect(screen.getByText('Welcome to the Dashboard!')).toBeDefined();  
  });  

  it('renders Users component on /users path', () => {  
    renderWithProviders(  
      <MemoryRouter initialEntries={['/users']}>  
        <App />  
      </MemoryRouter>  
    );  
    expect(screen.getByText('Users List')).toBeDefined();  
  });  

  it('renders UserProfile component for /users/:userId', () => {  

    renderWithProviders(  
      <MemoryRouter initialEntries={['/users/1']} >  
        <App />  
      </MemoryRouter>  
    );  
    expect(screen.getByText('Loading...')).toBeDefined();
  });  

  it('renders NotFound component on non-existing path', () => {  
    render(  
      <MemoryRouter initialEntries={['/non-existing']}>  
        <App />  
      </MemoryRouter>  
    );  
    expect(screen.getByText('Not Found')).toBeDefined();
  });  
});