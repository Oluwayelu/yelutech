import { grayColor, title } from "../../styles";

const blogDescriptionStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    margin: "0",
    padding: "0",
    textDecoration: "none",
    textAlign: "left"
  },
  description: {
    color: grayColor,
    textAlign: "left"
  },
  textCenter: {
    textAlign: "center"
  },
  image: {
    width: '100%',
    height: "300px",
    borderRadius: "6px"
  }
};

export default blogDescriptionStyle;
