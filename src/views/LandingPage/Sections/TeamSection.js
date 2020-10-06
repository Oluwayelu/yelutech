import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/js/views/landingPageSections/teamStyle";

import team1 from "../../../assets/img/faces/Favour.jpg";
import team2 from "../../../assets/img/faces/Ifeoluwa.jpg";
import team3 from "../../../assets/img/faces/precious.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section} style={{
      backgroundImage: "url(" + require('../../../assets/img/bg9.jpg') + ")",
      backgroundPosition: "center center",
      backgroundSize: "cover"
    }}>
      <h2 className={classes.title}>Meet our Executives</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Favour Edwards
                <br />
                <small className={classes.smallTitle}>General Manager</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Favour Edwards has a Phd in Mathematics. She also graduated as the best student at the London Business school. Today, she is the General Manager of YeLu Tech.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <FaTwitter className={classes.socials} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <FaInstagram className={classes.socials} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <FaFacebook className={classes.socials} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Oluwayelu Ifeoluwa
                <br />
                <small className={classes.smallTitle}>CEO & Founder of YeLu Tech</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Oluwayelu Ifeoluwa is the CEO and Founder of YeLu Tech. Without him, there will be no YeLu Tech Today.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <FaTwitter className={classes.socials} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                >
                  <FaInstagram className={classes.socials} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                >
                  <FaFacebook className={classes.socials} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                >
                  <FaLinkedin className={classes.socials} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                >
                  <FaGithub className={classes.socials} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Precious Omolara
                <br />
                <small className={classes.smallTitle}>Chief Technology Officer(CTO)</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Precious Omolara is a very bright student from the University of California. She has a Bsc. in Computer Science where she was the best in her class.
                  Today she is the Chief Technology Officer of YeLu Tech
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <FaTwitter className={classes.socials} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <FaInstagram className={classes.socials} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
