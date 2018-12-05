// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

export function combineClassNames(...classNames: (string | undefined)[]) {
  return classNames.join(' ');
}

let JPIconNameList: Array<string> = [];
[].slice
  .call(document.styleSheets)
  .reduce(function(prev: CSSRule, styleSheet: CSSStyleSheet) {
    if (styleSheet.cssRules) {
      return (
        prev +
        [].slice
          .call(styleSheet.cssRules)
          .reduce(function(prev: CSSRule, cssRule: CSSStyleRule) {
            if (cssRule.selectorText == ':root') {
              Object.keys(cssRule.style).forEach(
                (value: string, index: number) => {
                  if (
                    cssRule.style[index] &&
                    cssRule.style[index].startsWith('--jp-icon-') &&
                    !cssRule.style[index].startsWith('--jp-icon-color')
                  ) {
                    const n: number = cssRule.style[index].split('-').length;
                    const iconName: string = cssRule.style[index]
                      .split('-')
                      .slice(4, n)
                      .join('-');
                    JPIconNameList.push(iconName.toUpperCase());
                  }
                }
              );
            }
          }, '')
      );
    }
  }, '');
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}
const JPIconNameEnum = strEnum(JPIconNameList);

export type JPIconName = keyof typeof JPIconNameEnum;

export const constIcons: string[] = [
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
