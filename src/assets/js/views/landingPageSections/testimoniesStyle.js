import { cardTitle, title, container, primaryColor, whiteColor, secondaryColor } from "../../styles";
import imagesStyle from "../../imagesStyles";

const testimoniesStyle = {
  container: {
    zIndex: "12",
    color: primaryColor,
    ...container
  },
  section: {
    width: '100%',
    padding: "5px",
    textAlign: "center"
  },
  title: {
    ...title,
    color: whiteColor,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: {
    ...cardTitle,
    color: primaryColor
  },
  smallTitle: {
    color: secondaryColor
  },
  description: {
    color: primaryColor
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: primaryColor
  },
  margin5: {
    margin: "5px"
  }
};

export default testimoniesStyle;
