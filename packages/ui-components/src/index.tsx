// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import * as React from 'react';
import {
  Button as BPButton,
  IButtonProps as IBPButtonProps
} from '@blueprintjs/core/lib/esm/components/button/buttons';
import {
  Icon as BPIcon,
  IIconProps
} from '@blueprintjs/core/lib/esm/components/icon/icon';
import {
  Collapse as BPCollapse,
  ICollapseProps
} from '@blueprintjs/core/lib/esm/components/collapse/collapse';
import {
  InputGroup as BPInputGroup,
  IInputGroupProps as IBPInputGroupProps
} from '@blueprintjs/core/lib/esm/components/forms/inputGroup';
import {
  HTMLSelect as BPHTMLSelect,
  IHTMLSelectProps
} from '@blueprintjs/core/lib/esm/components/html-select/htmlSelect';
import {
  Select as BPSelect,
  ISelectProps
} from '@blueprintjs/select/lib/esm/components/select/select';
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

export { Intent } from '@blueprintjs/core/lib/esm/common/intent';

interface IButtonProps extends IBPButtonProps {
  title?: string;
}

interface IInputGroupProps extends IBPInputGroupProps {
  rightIcon?: IIconProps['icon'];
}

export const Button = (props: IButtonProps) => (
  <BPButton className={ButtonStyle(props)} {...props} />
);

export const InputGroup = (props: IInputGroupProps) => {
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
