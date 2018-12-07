// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import * as React from 'react';
import {
  Button as BPButton,
  IButtonProps as IBPButtonProps,
  InputGroup as BPInputGroup,
  IInputGroupProps as IBPInputGroupProps,
  Icon as BPIcon,
  IconName as BPIconName
} from '@blueprintjs/core';
import { IconNames as BPIconNames } from '@blueprintjs/icons';
import {
  Collapse as BPCollapse,
  HTMLSelect as BPHTMLSelect,
  IHTMLSelectProps,
  ICollapseProps
} from '@blueprintjs/core';
import { Select as BPSelect, ISelectProps } from '@blueprintjs/select';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '../style/index.css';
import '../style/urls.css';
import { combineClassNames, JPIconName, constIcons } from './utils';
import { Color } from 'csstype';

export { Intent } from '@blueprintjs/core/lib/esm/common/intent';

/**
 * The interface for button component.
 */
interface IButtonProps extends IBPButtonProps {
  title?: string;
}

/**
 * The interface for input group component.
 */
interface IInputGroupProps extends IBPInputGroupProps {
  rightIconOptions?: IIconProps;
  backgroundColor?: Color;
}

/**
 * The interface for icon component.
 */
interface IIconProps {
  icon: JPIconName | BPIconName;
  color?: Color;
  size?: string;
  jpIcon?: boolean;
  className?: string;
}

/**
 * The functional component for button.
 */
export const Button = (props: IButtonProps) => (
  <BPButton
    {...props}
    className={combineClassNames(
      props.className,
      props.minimal && 'minimal',
      'jp-Button'
    )}
  />
);

/**
 * The functional component for input group.
 */
export const InputGroup = (props: IInputGroupProps) => {
  if (props.rightIconOptions) {
    const { rightIconOptions, backgroundColor, ...rest } = props;
    return (
      <BPInputGroup
        {...rest}
        className={combineClassNames(rest.className, 'jp-InputGroup')}
        rightElement={
          <div
            className="jp-InputGroupAction"
            style={
              backgroundColor && {
                backgroundColor: backgroundColor,
                height: '18px'
              }
            }
          >
            <Icon className="jp-Icon" {...rightIconOptions} />
          </div>
        }
      />
    );
  }
  return (
    <BPInputGroup
      {...props}
      className={combineClassNames(props.className, 'jp-InputGroup')}
    />
  );
};

/**
 * The functional component for icon.
 */
export const Icon = (props: IIconProps) => {
  const size = props.size ? props.size : '16px';
  const color = props.color ? props.color : 'var(--jp-icon-color)';

  if (
    Object.keys(BPIconNames).indexOf(props.icon.toUpperCase()) >= 0 &&
    !props.jpIcon
  ) {
    return (
      <BPIcon
        icon={props.icon as BPIconName}
        className={combineClassNames(props.className, 'jp-Icon')}
      />
    );
  } else if (constIcons.indexOf(props.icon.toUpperCase()) >= 0) {
    return (
      <div
        className={`bp3-icon jp-icon jp-icon-${props.icon} ${
          props.className ? props.className : ''
        }`}
        style={{
          backgroundImage: `var(--jp-icon-${props.icon})`,
          backgroundSize: size,
          width: size,
          height: size
        }}
      />
    );
  } else {
    return (
      <div
        className={`bp3-icon jp-icon jp-icon-${props.icon} ${
          props.className ? props.className : ''
        }`}
        style={{
          backgroundColor: color,
          WebkitMaskImage: `var(--jp-icon-${props.icon})`,
          WebkitMaskSize: size,
          WebkitMaskRepeat: 'no-repeat',
          width: size,
          height: size
        }}
      />
    );
  }
};

/**
 * The functional component for collapse.
 */
export const Collapse = (props: ICollapseProps) => <BPCollapse {...props} />;

/**
 * The functional component for html select.
 */
export const HTMLSelect = (props: IHTMLSelectProps) => (
  <BPHTMLSelect
    {...props}
    className={combineClassNames(props.className, 'jp-HTMLSelect')}
  />
);

/**
 * The functional component for select.
 */
export const Select = (props: ISelectProps<any>) => (
  <BPSelect
    {...props}
    className={combineClassNames(props.className, 'jp-Select')}
  />
);
