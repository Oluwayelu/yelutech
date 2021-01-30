import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Assessment, AlternateEmail, Computer, MobileFriendly } from '@material-ui/icons'

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Card from "../../../components/Card/Card";

import styles from "../../../assets/js/views/landingPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const showCard = () => {
    const pageHeight = window.pageYOffset
    if (pageHeight > 250) {
      setTimeout(function () {
        setCardAnimation("");
      }, 100);
    }
  }
  window.addEventListener("scroll", showCard)
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Services</h2>
          <h5 className={classes.description}>
            Here are some of the Service we provide to our Clients
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={6} sm={6} md={3}>
            <Card plain className={classes[cardAnimaton]}>
              <InfoArea
                title="Website Development"
                icon={Computer}
                iconColor="rose"
                vertical
              />
            </Card>
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <Card plain className={classes[cardAnimaton]}>
              <InfoArea
                title="Mobile Development(iOS & Android)"
                icon={MobileFriendly}
                iconColor="rose"
                vertical
              />
            </Card>
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <Card plain className={classes[cardAnimaton]}>
              <InfoArea
                title="SEO"
                icon={Assessment}
                iconColor="rose"
                vertical
              />
            </Card>
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <Card plain className={classes[cardAnimaton]}>
              <InfoArea
                title="Email Marketing"
                icon={AlternateEmail}
                iconColor="rose"
                vertical
              />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
