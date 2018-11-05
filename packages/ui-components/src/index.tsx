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

export const Button = (props: IButtonProps) => (
  <BPButton className={ButtonStyle(props)} {...props} />
);

export const InputGroup = (
  props: IInputGroupProps & { rightIcon: IIconProps['icon'] }
) => {
  if (props.rightIcon) {
    return (
      <BPInputGroup
        className={InputGroupStyle(props)}
        rightElement={
          <div className={InputGroupActionStyle({ position: 'right' })}>
            <Icon className={IconStyle()} icon={props.rightIcon} />
          </div>
        }
        {...props}
      />
    );
  }
  return <BPInputGroup className={InputGroupStyle(props)} {...props} />;
};

export const Icon = (props: IIconProps) => (
  <BPIcon className={IconStyle(props)} {...props} />
);

export const Collapse = (props: ICollapseProps) => <BPCollapse {...props} />;

export const HTMLSelect = (props: IHTMLSelectProps) => (
  <BPHTMLSelect className={HTMLSelectStyle(props)} {...props} />
);

export const Select = (props: ISelectProps<any>) => (
  <BPSelect className={SelectStyle(props)} {...props} />
);

export { Intent } from '@blueprintjs/core';
