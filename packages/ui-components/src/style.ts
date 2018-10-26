import { IButtonProps, IIconProps, IInputGroupProps } from '@blueprintjs/core';

import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle/lib';

const globalStyles: NestedCSSProperties = {
  outline: 'none',
  '-webkit-appearance': 'none',
  borderRadius: 'var(--jp-border-radius)'
};

export function ButtonStyle(props?: IButtonProps): string {
  const color = props.minimal ? { color: 'unset !important' } : {};
  return style({
    ...globalStyles,
    ...color,
    borderRadius: 'var(--jp-border-radius)',
    padding: '0px 12px',
    fontSize: 'var(--jp-ui-font-size1)',
    textTransform: 'uppercase'
    // lineHeight: '32px',
    // height: '32px',
    // letterSpacing: '0.8px'
  });
}

export function InputGroupStyle(props?: IInputGroupProps): string {
  return style({
    borderRadius: 0,
    $nest: {
      '&>input': {
        boxSizing: 'border-box'
      }
    }
  });
}

export function IconStyle(props?: IIconProps): string {
  return style({
    color: 'var(--jp-layout-color4)'
  });
}

export function InputGroupActionStyle(props: {
  position: 'left' | 'right';
}): string {
  const padding =
    props.position === 'left' ? { paddingLeft: 8 } : { paddingRight: 8 };
  return style({
    ...padding,
    lineHeight: '30px',
    fontSize: '20px'
  });
}
