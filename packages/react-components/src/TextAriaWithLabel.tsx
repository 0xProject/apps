// Copyright 2017-2020 @polkadot/react-components authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import Labelled from './LabelledNew';
import TextAreaWithDropdown from '@polkadot/react-components/TextAriaWithDropdown';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  className?: string;
  help?: React.ReactNode;
  isAction?: boolean;
  isError?: boolean;
  isReadOnly?: boolean;
  label?: React.ReactNode;
  onChange?: (arg: string) => void;
  seed?: string;
}

// // Find decimal separator used in current locale
// const getDecimalSeparator = (): string => 1.1
//   .toLocaleString()
//   .replace(/\d/g, '');

// note: KeyboardEvent.keyCode and KeyboardEvent.which are deprecated
const KEYS = {
  A: 'a',
  ALT: 'Alt',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  BACKSPACE: 'Backspace',
  C: 'c',
  CMD: 'Meta',
  CTRL: 'Control',
  // DECIMAL: getDecimalSeparator(),
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  V: 'v',
  X: 'x',
  ZERO: '0'
};

const KEYS_PRE: any[] = [KEYS.ALT, KEYS.CMD, KEYS.CTRL];

// reference: degrade key to keyCode for cross-browser compatibility https://www.w3schools.com/jsref/event_key_keycode.asp
const isCopy = (key: string, isPreKeyDown: boolean): boolean =>
  isPreKeyDown && key === KEYS.C;

const isCut = (key: string, isPreKeyDown: boolean): boolean =>
  isPreKeyDown && key === KEYS.X;

const isPaste = (key: string, isPreKeyDown: boolean): boolean =>
  isPreKeyDown && key === KEYS.V;

const isSelectAll = (key: string, isPreKeyDown: boolean): boolean =>
  isPreKeyDown && key === KEYS.A;

function TextAriaWithLabel ({ children, className, help, isReadOnly, label, onChange, seed }: Props): React.ReactElement<Props> {
  return (
    <Labelled
      className={className}
      help={help}
      isOuter
      label={label}
    >
      <div className='TextAreaWithDropdown'>
        <TextAreaWithDropdown
          id='printJS-seed'
          isReadOnly={isReadOnly}
          onChange={onChange}
          value={seed}
        >
          {children}
        </TextAreaWithDropdown>
      </div>
    </Labelled>
  );
}

export default styled(React.memo(TextAriaWithLabel))`
  .TextAreaWithDropdown {
    display: flex;
  }
  `;

export {
  isCopy,
  isCut,
  isPaste,
  isSelectAll,
  KEYS,
  KEYS_PRE
};
