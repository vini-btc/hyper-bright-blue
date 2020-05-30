const backgroundColor = "#00006f";
const foregroundColor = "#ffffff";
const borderColor = "#004f8e";
const cursorColor = "#004CB8";
const colors = {
  black: "#000001",
  red: "#ff10da",
  green: "#d2f1a9",
  yellow: "#f2fa8c",
  blue: "#bbdaff",
  magenta: "#ebbbff",
  cyan: "#100ffff",
  white: "#bfbfbf",
  lightBlack: "#2f1f1f",
  lightRed: "#ffc3c6",
  lightGreen: "#e4f6ca",
  lightYellow: "#f2fa8c",
  lightBlue: "#bbdaff",
  lightMagenta: "#ebbbff",
  lightCyan: "#adffff",
  lightWhite: "#d7d6d6",
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ""}
    `,
    css: `
			${config.css || ""}
			.tbs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}
			.tab_active:before {
				border-color: ${borderColor};
			}
		`,
  });
};
