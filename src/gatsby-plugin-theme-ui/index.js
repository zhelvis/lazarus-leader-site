export default {
  useCustomProperties: false,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Roboto Condensed", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#242424",
    background: "#fff",
    primary: "#4d5ae3",
    secondary: "#30d5c8",
    muted: "#f6f6f6",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    td: {
      display: "table-cell",
      py: 2,
      minWidth: ["200px", "250px"],
      borderBottom: "1px solid #dedede",
      verticalAlign: "top",
      textAlign: "left",
      "&:first-of-type": {
        whiteSpace: "nowrap",
        pr: 2,
      },
    },
    img: {
      maxWidth: "100%",
    },
  },
  link: {
    nav: {
      display: "inline-block" /* For IE11/ MS Edge bug */,
      color: "inherit",
      fontWeight: 700,
      p: 2,
      mr: 3,
      textDecoration: "none",
      '&[aria-current="page"]': {
        pointerEvents: "none",
        color: "primary",
      },
    },
    body: {
      color: "primary",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    contrast: {
      color: "background",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    disabled: {
      color: "muted",
      textDecoration: "none",
      pointerEvents: "none",
    }
  },
  container: {
    maxWidth: "1024px",
    pt: [3, 4],
    px: "7vw",
  },
  item: {
    border: "1px solid #dedede",
    p: 2,
    mb: 2,
  },
}
