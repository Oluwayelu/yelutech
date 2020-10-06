import { title, container, secondaryColor } from "../../styles";

const blogStyle = {
  container: {
    zIndex: "12",
    color: secondaryColor,
    ...container
  },
  section: {
    width: '100%',
    padding: "5px",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
};

export default blogStyle;
