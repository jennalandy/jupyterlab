// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import * as React from 'react';
import {
  Button as BPButton,
  Icon as BPIcon,
  Collapse as BPCollapse,
  InputGroup as BPInputGroup,
  HTMLSelect as BPHTMLSelect,
  IButtonProps,
  IIconProps,
  ICollapseProps,
  IInputGroupProps,
  IHTMLSelectProps
  // Classes as BPCoreClasses
} from '@blueprintjs/core';
import {
  Select as BPSelect,
  ISelectProps
  // Classes as BPSelectClasses
} from '@blueprintjs/select';
import {
  ButtonStyle,
  IconStyle,
  InputGroupStyle,
  InputGroupActionStyle,
  HTMLSelectStyle,
  SelectStyle
} from './style';
// import '../style/index.css';
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

export const InputGroup = (
  props: IInputGroupProps & { rightIcon: IIconProps['icon'] }
) => {
  if (props.rightIcon) {
    return (
      <BPInputGroup
        className={joinClassNames(InputGroupStyle(props), props.className)}
        rightElement={
          <div className={InputGroupActionStyle({ position: 'right' })}>
            <Icon className={IconStyle()} icon={props.rightIcon} />
          </div>
        }
        {...props}
      />
    );
  }
  return (
    <BPInputGroup
      className={joinClassNames(InputGroupStyle(props), props.className)}
      {...props}
    />
  );
};

export const Icon = (props: IIconProps) => (
  <BPIcon
    className={joinClassNames(IconStyle(props), props.className)}
    {...props}
  />
);

export const Collapse = (props: ICollapseProps) => <BPCollapse {...props} />;

export const HTMLSelect = (props: IHTMLSelectProps) => (
  <BPHTMLSelect
    className={joinClassNames(HTMLSelectStyle(props), props.className)}
    {...props}
  />
);

export const Select = (props: ISelectProps<any>) => (
  <BPSelect
    className={joinClassNames(SelectStyle(props), props.className)}
    {...props}
  />
);

export { Intent } from '@blueprintjs/core';
