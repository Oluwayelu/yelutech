import { secondaryColor, primaryColor, title } from "../../styles";

const contactStyle = {
  section: {
    padding: "20px 0",
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: secondaryColor,
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  icon: {
    color: primaryColor
  }
};

export default contactStyle;
