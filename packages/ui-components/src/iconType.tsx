//https://stackoverflow.com/questions/45763121/list-css-custom-properties-css-variables
//get list of jupyterlab icon names
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
                    cssRule.style[index].startsWith('--jp-icon-')
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
