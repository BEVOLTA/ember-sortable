/**
  Gets a numeric border-spacing values for a given element.

  @method getBorderSpacing
  @param {Element} element
  @return {Object}
  @private
*/
export function getBorderSpacing(el: Element) {
  const css = getComputedStyle(el).borderSpacing; // '0px 0px'
  const [horizontal, vertical] = css.split(' ');

  return {
    horizontal: parseFloat(horizontal ?? ''),
    vertical: parseFloat(vertical ?? ''),
  };
}
