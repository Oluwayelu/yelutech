import { cardTitle, title, container } from "../../styles";
import imagesStyle from "../../imagesStyles";

const teamStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  section: {
    width: '100%',
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    color: "#fff",
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
    color: "#ddd"
  },
  smallTitle: {
    color: "#aaa"
  },
  description: {
    color: "#ccc"
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
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
};

export default teamStyle;
