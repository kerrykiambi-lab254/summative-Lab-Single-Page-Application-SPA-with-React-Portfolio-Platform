import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useLocalStorage from '../hooks/useLocalStorage.js';

function LocalStorageTest() {
  const [value, setValue] = useLocalStorage('test-key', 'default');
  return (
    <div>
      <span data-testid="value">{value}</span>
      <button onClick={() => setValue('updated')}>Update</button>
    </div>
  );
}

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('reads and writes localStorage values', async () => {
    render(<LocalStorageTest />);

    expect(screen.getByTestId('value')).toHaveTextContent('default');

    await userEvent.click(screen.getByText('Update'));

    expect(window.localStorage.getItem('test-key')).toBe(JSON.stringify('updated'));
    expect(screen.getByTestId('value')).toHaveTextContent('updated');
  });
});
