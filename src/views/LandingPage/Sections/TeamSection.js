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

import team1 from "../../../assets/img/faces/avatar.jpg";
import team2 from "../../../assets/img/faces/christian.jpg";
import team3 from "../../../assets/img/faces/kendall.jpg";

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
      backgroundImage: "url(" + require('../../../assets/img/bg4.jpg') + ")",
      backgroundPosition: "center center",
      backgroundSize: "cover"
    }}>
      <h2 className={classes.title}>Meet our Executives</h2>
      <div>
        <GridContainer>
          <GridItem xs={4} sm={4} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Gigi Hadid
                <br />
                <small className={classes.smallTitle}>General Manager</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Lorem Ipsum shbhd dh h fhfhudv shbdskh k sdhh sdh hk dhshdhk dhs
                  dhhdhk jbdbkh dd d db d hd d dhkdk d kh d ds
                  some <a href="#pablo">links</a>
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
          <GridItem xs={4} sm={4} md={4}>
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
                  Lorem Ipsum shbhd dh h fhfhudv shbdskh k sdhh sdh hk dhshdhk dhs
                  dhhdhk jbdbkh dd d db d hd d dhkdk d kh d ds
                  some <a href="#pablo">links</a>
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
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <FaLinkedin className={classes.socials} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <FaGithub className={classes.socials} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={4} sm={4} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kendall Jenner
                <br />
                <small className={classes.smallTitle}>Chief Technology Officer(CTO)</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Lorem Ipsum shbhd dh h fhfhudv shbdskh k sdhh sdh hk dhshdhk dhs
                  dhhdhk jbdbkh dd d db d hd d dhkdk d kh d ds
                  some <a href="#pablo">links</a>
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
