import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Assessment, AlternateEmail, Computer, MobileFriendly } from '@material-ui/icons'

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/js/views/landingPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            Here are some of the Service we provide to our Clients
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="Website Development"
              icon={Computer}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="Mobile Development(iOS & Android)"
              icon={MobileFriendly}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="SEO"
              icon={Assessment}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="Email Marketing"
              icon={AlternateEmail}
              iconColor="rose"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
