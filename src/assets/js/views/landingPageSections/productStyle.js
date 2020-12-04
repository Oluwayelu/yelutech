import { secondaryColor, title } from "../../styles";

const productStyle = {
  section: {
    padding: "0px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  description: {
    color: secondaryColor
  }
};

export default productStyle;
