// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import * as React from 'react';
import {
  Button as BPButton,
  IButtonProps as IBPButtonProps
} from '@blueprintjs/core/lib/esm/components/button/buttons';
import {
  Icon as BPIcon,
  IconName as BPIconName
} from '@blueprintjs/core/lib/esm/components/icon/icon';
import { IconNames as BPIconNames } from '@blueprintjs/icons';
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
import '../style/index.css';
import { Color } from 'csstype';

export { Intent } from '@blueprintjs/core/lib/esm/common/intent';

interface IButtonProps extends IBPButtonProps {
  title?: string;
}

interface IInputGroupProps extends IBPInputGroupProps {
  rightIcon?: string;
  jpIcon?: boolean;
}

export const Button = (props: IButtonProps) => {
  return <BPButton className={ButtonStyle(props)} {...props} />;
};

export const InputGroup = (props: IInputGroupProps) => {
  if (props.rightIcon) {
    return (
      <BPInputGroup
        className={InputGroupStyle(props)}
        rightElement={
          typeof props.rightIcon == 'string' ? (
            <div className={InputGroupActionStyle({ position: 'right' })}>
              <Icon
                className={IconStyle()}
                icon={props.rightIcon}
                jpIcon={props.jpIcon}
              />
            </div>
          ) : (
            props.rightIcon
          )
        }
        {...props}
      />
    );
  }
  return <BPInputGroup className={InputGroupStyle(props)} {...props} />;
};

// export const Icon = (props: IIconProps) => {
//   return(<BPIcon className={IconStyle(props)} {...props} />)
// };

export const Icon = (props: {
  icon: string;
  color?: Color;
  jpIcon?: boolean; //uses jupyterlab icon even if there's a blueprint one with the same name
  className?: string;
}) => {
  //constIcons are two-tone and remain the same color no matter the placement
  const constIcons: string[] = [
    'TERMINAL',
    'CONSOLE',
    'IMAGE',
    'IMAGE-SELECTED',
    'LAUNCHER',
    'QUESTION-MARK',
    'SETTINGS',
    'TEXT-EDITOR',
    'BOOK',
    'BOOK-SELECTED'
  ];
  if (
    Object.keys(BPIconNames).indexOf(props.icon.toUpperCase()) >= 0 &&
    !props.jpIcon
  ) {
    return <BPIcon icon={props.icon as BPIconName} />;
  } else if (constIcons.indexOf(props.icon.toUpperCase()) >= 0) {
    return (
      <span
        className={`bp3-icon jp-icon jp-icon-${props.icon} ${
          props.className ? props.className : ''
        }`}
        style={{
          backgroundImage: `var(--jp-icon-${props.icon})`,
          backgroundSize: '16px',
          width: '16px',
          height: '16px'
        }}
      />
    );
  } else {
    const color: string = props.color
      ? props.color.toString()
      : 'var(--jp-icon-color)';
    return (
      <span
        className={`bp3-icon jp-icon jp-icon-${props.icon} ${
          props.className ? props.className : ''
        }`}
        style={{
          backgroundColor: color,
          WebkitMaskImage: `var(--jp-icon-${props.icon})`,
          WebkitMaskSize: '16px',
          WebkitMaskRepeat: 'no-repeat',
          width: '16px',
          height: '16px'
        }}
      />
    );
  }
};

export const Collapse = (props: ICollapseProps) => <BPCollapse {...props} />;

export const HTMLSelect = (props: IHTMLSelectProps) => (
  <BPHTMLSelect className={HTMLSelectStyle(props)} {...props} />
);

export const Select = (props: ISelectProps<any>) => (
  <BPSelect className={SelectStyle(props)} {...props} />
);
