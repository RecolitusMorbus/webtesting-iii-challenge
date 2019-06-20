import React from 'react';
import Controls from './Controls';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('Lock button.', () => {
  it('Should not function while gate is open.', () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(
      <Controls
        toggleLocked={toggleLocked}
        closed={false}
        locked={false}
      />
    );
    const button = getByText(/lock gate/i);
    fireEvent.click(button);
    expect(toggleLocked).toBeCalledTimes(0);
  });
  it('Changes text to \'Unlocked\' when gate is unlocked.', () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(
      <Controls
        toggleLocked={toggleLocked}
        closed={true}
        locked={false}
      />
    );
    const button = getByText(/lock gate/i);
    fireEvent.click(button);
    expect(toggleLocked).toBeCalledTimes(1);
  });
  it('Should not open or close while gate is locked.', () => {
    const toggleClosed = jest.fn();
    const { getByText } = render(
      <Controls
        toggleClosed={toggleClosed}
        closed={true}
        locked={true}
      />
    );
    const button = getByText(/open gate/i);
    fireEvent.click(button);
    expect(toggleClosed).toBeCalledTimes(0);
  });
});