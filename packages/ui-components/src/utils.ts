// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

export function combineClassNames(...classNames: (string | undefined)[]) {
  return classNames.join(' ');
}

let JPIconNameList: Array<string> = [];
[].slice
  .call(document.styleSheets) //get a list of style sheets
  .forEach(function(styleSheet: CSSStyleSheet) {
    if (styleSheet.cssRules) {
      [].slice
        .call(styleSheet.cssRules)
        .forEach(function(cssRule: CSSStyleRule) {
          if (cssRule.selectorText == ':root') {
            Object.keys(cssRule.style).forEach(
              (value: string, index: number) => {
                if (
                  cssRule.style[index] &&
                  cssRule.style[index].startsWith('--jp-icon-') &&
                  !cssRule.style[index].startsWith('--jp-icon-color')
                ) {
                  const iconName: string = cssRule.style[index].replace(
                    '--jp-icon-',
                    ''
                  );
                  JPIconNameList.push(iconName.toUpperCase());
                }
              }
            );
          }
        });
    }
  });

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
