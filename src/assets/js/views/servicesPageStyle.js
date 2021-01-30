import {
  container,
  title,
  whiteColor,
  secondaryColor
} from "../styles";

const servicesPageStyle = {
  container: {
    zIndex: "12",
    color: secondaryColor,
    ...container
  },
  svg1: {
    backgroundImage: 'url(' + '"' + require('../../svg/wave1.svg') + '"' + ')',
    backgroundRepeat: "no-repeat"
  },
  svg2: {
    backgroundImage: 'url(' + '../../svg/wave2.svg' + ')',
    backgroundRepeat: "no-repeat"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: whiteColor,
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 20px -200px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  logo: {
    width: "150px",
  }
};

export default servicesPageStyle;
