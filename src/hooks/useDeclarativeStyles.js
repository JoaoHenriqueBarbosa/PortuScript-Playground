import { pickBy } from "lodash";

const ACCEPTED_TOKENS = ["alignContent", "alignItems", "alignSelf", "animation", "animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction", "backfaceVisibility", "background", "backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPosition", "backgroundRepeat", "backgroundSize", "border", "borderBottom", "borderBottomColor", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomStyle", "borderBottomWidth", "borderCollapse", "borderColor", "borderImage", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeft", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRadius", "borderRight", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderSpacing", "borderStyle", "borderTop", "borderTopColor", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStyle", "borderTopWidth", "borderWidth", "bottom", "boxShadow", "boxSizing", "captionSide", "clear", "clip", "color", "columnCount", "columnFill", "columnGap", "columnRule", "columnRuleColor", "columnRuleStyle", "columnRuleWidth", "columnSpan", "columnWidth", "columns", "content", "counterIncrement", "counterReset", "cursor", "direction", "display", "emptyCells", "flex", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "float", "font", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "height", "justifyContent", "left", "letterSpacing", "lineHeight", "listStyle", "listStyleImage", "listStylePosition", "listStyleType", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "maxHeight", "maxWidth", "minHeight", "minWidth", "opacity", "order", "outline", "outlineColor", "outlineOffset", "outlineStyle", "outlineWidth", "overflow", "overflowX", "overflowY", "padding", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "pageBreakAfter", "pageBreakBefore", "pageBreakInside", "perspective", "perspectiveOrigin", "position", "quotes", "resize", "right", "tabSize", "tableLayout", "textAlign", "textAlignLast", "textDecoration", "textDecorationColor", "textDecorationLine", "textDecorationStyle", "textIndent", "textJustify", "textOverflow", "textShadow", "textTransform", "top", "transform", "transformOrigin", "transformStyle", "transition", "transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction", "verticalAlign", "visibility", "whiteSpace", "width", "wordBreak", "wordSpacing", "wordWrap", "zIndex"];
const PIXEL_MULTIPLIER = 8;

const parsePixel = (val) => {
  if (typeof val === "number") {
    return `${val * PIXEL_MULTIPLIER}px`;
  }
  return val;
};

const useDeclarativeStyles = ({
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  ...rest
}) => {
  const styles = pickBy({ ...rest }, (_, key) => ACCEPTED_TOKENS.includes(key));

  if (mt) styles.marginTop = parsePixel(mt);
  if (mb) styles.marginBottom = parsePixel(mb);
  if (ml) styles.marginLeft = parsePixel(ml);
  if (mr) styles.marginRight = parsePixel(mr);
  if (mx) {
    styles.marginLeft = parsePixel(mx);
    styles.marginRight = parsePixel(mx);
  }
  if (my) {
    styles.marginTop = parsePixel(my);
    styles.marginBottom = parsePixel(my);
  }
  if (pt) styles.paddingTop = parsePixel(pt);
  if (pb) styles.paddingBottom = parsePixel(pb);
  if (pl) styles.paddingLeft = parsePixel(pl);
  if (pr) styles.paddingRight = parsePixel(pr);
  if (px) {
    styles.paddingLeft = parsePixel(px);
    styles.paddingRight = parsePixel(px);
  }
  if (py) {
    styles.paddingTop = parsePixel(py);
    styles.paddingBottom = parsePixel(py);
  }

  return [styles, pickBy({ ...rest }, (_, key) => !ACCEPTED_TOKENS.includes(key))];
};

export default useDeclarativeStyles;
