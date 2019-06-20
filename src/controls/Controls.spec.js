import React from 'react';
import ReactDom from 'react-dom';
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
});