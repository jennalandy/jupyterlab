import { IButtonProps, IIconProps, IInputGroupProps } from '@blueprintjs/core';

import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle/lib';

const globalStyles: NestedCSSProperties = {
  outline: 'none',
  '-webkit-appearance': 'none',
  borderRadius: 'var(--jp-border-radius)'
};

export function ButtonStyle(props: IButtonProps) {
  return style({
    borderRadius: 'var(--jp-border-radius)',
    padding: '0px 12px',
    fontSize: 'var(--jp-ui-font-size1)',
    textTransform: 'uppercase',
    // lineHeight: '32px',
    // height: '32px',
    // letterSpacing: '0.8px',
    ...globalStyles
  });
}

export function InputGroupStyle(props: IInputGroupProps) {
  return style({});
}

export function IconStyle(props: IIconProps) {
  return style({
    color: 'var(--jp-layout-color4)'
  });
}
