import { dangerColor, secondaryColor, title } from "../../styles";

const createProjectStyle = {
  section: {
    padding: "0",
  },
  title: {
    ...title,
    margin: '-10px 0',
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: secondaryColor,
    textAlign: "center"
  },
  errors: {
    color: dangerColor
  }
};

export default createProjectStyle;
