const tokens = require("./tokens/js/tokens");

const flattenValue = (obj) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (!obj[key].value) {
      result[key] = flattenValue(obj[key]);
    } else {
      result[key] = obj[key].value;
    }
  });

  return result;
};

module.exports = {
  prefix: "huxn-",
  theme: {
    colors: flattenValue(tokens.colors),
    borderRadius: flattenValue(tokens.radius),
    spacing: flattenValue(tokens.spacing),
    boxShadow: flattenValue(tokens.shadows),
    fontFamily: {
      sans: ['"inter"'],
    },
  },
  plugins: [],
};
