import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { SessionPlayer } from './components/SessionPlayer';

describe('SessionPlayer', () => {
  it('should render the preparation screen first', () => {
    render(<SessionPlayer sessionIndex={1} onClose={vi.fn()} />);
    expect(screen.getByText('Séance 1 : Fondations')).toBeInTheDocument();
    expect(screen.getByText('Je suis prêt(e)')).toBeInTheDocument();
  });

  it('should transition to exercise when ready is clicked', async () => {
    render(<SessionPlayer sessionIndex={1} onClose={vi.fn()} />);
    await act(async () => {
      fireEvent.click(screen.getByText('Je suis prêt(e)'));
    });
    expect(screen.getByText('1a. Déglutition (Liquide)')).toBeInTheDocument();
  });
});
