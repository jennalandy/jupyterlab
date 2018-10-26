// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import * as React from 'react';
import {
  Button as BPButton,
  Icon as BPIcon,
  InputGroup as BPInputGroup,
  IButtonProps,
  IIconProps,
  IInputGroupProps
} from '@blueprintjs/core';
import { Select as BPSelect, ISelectProps } from '@blueprintjs/select';
import '../style/index.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../style/blueprint.css';

function joinClassNames(...classNames: (string | undefined)[]): string {
  return classNames.join(' ').trim();
}

export const Button = (props: IButtonProps) => (
  <BPButton
    className={joinClassNames(ButtonStyle(props), props.className)}
    {...props}
  />
);

export const InputGroup = (props: IInputGroupProps) => (
  <BPInputGroup
    className={joinClassNames(InputGroupStyle(props), props.className)}
    {...props}
  />
);

export const Icon = (props: IIconProps) => (
  <BPIcon
    className={joinClassNames(IconStyle(props), props.className)}
    {...props}
  />
);

export const Select = ({ className, ...props }: ISelectProps<any>) => (
  <BPSelect className={`jp-Select ${className}`} {...props} />
);
