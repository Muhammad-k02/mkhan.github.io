import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
