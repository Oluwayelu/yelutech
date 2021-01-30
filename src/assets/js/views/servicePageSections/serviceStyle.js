import { title, secondaryColor } from "../../styles";

const serviceStyle = {
  section: {
    padding: "40px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "100px",
    marginTop: "50px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: secondaryColor
  }
};

export default serviceStyle;
