import { container, primaryColor, dangerColor, whiteColor, blackColor, secondaryColor } from "../styles";

const footerStyle = {
  block: {
    color: 'inherit',
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left !important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right !important"
  },
  footer: {
    padding: "240px 0 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    color: primaryColor,
    backgroundColor: blackColor
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  text: {
    color: secondaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: whiteColor
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
    color: dangerColor
  },
  socialIcon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
    color: secondaryColor
  }
};
export default footerStyle;
