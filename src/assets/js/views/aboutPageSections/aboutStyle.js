import { grayColor, primaryColor, title } from "../../styles";

const aboutStyle = {
  section: {
    padding: "40px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "50px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: primaryColor,
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};

export default aboutStyle;
