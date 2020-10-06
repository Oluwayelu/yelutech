import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Carousel from 'react-slick'

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";

import styles from "../../../assets/js/views/landingPageSections/testimoniesStyle";

import client1 from "../../../assets/img/faces/kendall.jpg";
import client2 from "../../../assets/img/faces/marc.jpg";
import client3 from "../../../assets/img/faces/christian.jpg";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardAvatar from "../../../components/Card/CardAvatar.js";

const useStyles = makeStyles(styles);

export default function TestimoniesSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section} >
      <h2 className={classes.title}>Some Testimonies of our Clients</h2>
      <div>
        <GridContainer>
          <div className={classes.container}>
            <Card carousel plain>
              <Carousel {...settings}>
                <GridItem xs={12} sm={6} md={6}>
                  <Card plain>
                    <CardHeader>
                      <CardAvatar>
                        <img src={client1} alt="..." className={imageClasses} />
                      </CardAvatar>
                      <h4 className={classes.cardTitle}>
                        Kendall Woods<br />
                        <small className={classes.smallTitle}>CEO of Kendy Pharmacy</small>
                      </h4>
                    </CardHeader>
                    <CardBody>
                      <p className={classes.description}>
                        "YeLu Tech gives delivers world class web and Mobile platforms. Since I Joined them, it has been a wonderful experience"
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <Card plain>
                    <CardHeader >
                      <CardAvatar >
                        <img src={client2} alt="..." className={imageClasses} />
                      </CardAvatar>
                      <h4 className={classes.cardTitle}>
                        Marc Alfred
                      <br />
                        <small className={classes.smallTitle}>CTO of Bigi Enterprice</small>
                      </h4>
                    </CardHeader>
                    <CardBody>
                      <p className={classes.description}>
                        "We have a very beautiful and reliable team, thanks to YeLu Tech for the training and setting up of developers community."
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <Card plain>
                    <CardHeader>
                      <CardAvatar>
                        <img src={client3} alt="..." className={imageClasses} />
                      </CardAvatar>
                      <h4 className={classes.cardTitle}>
                        Christian Halley<br />
                        <small className={classes.smallTitle}>PRO of Convein Inc.</small>
                      </h4>
                    </CardHeader>
                    <CardBody>
                      <p className={classes.description}>
                        "Thanks to YeLu Tech our Company is grown very much due to the impact of thier Brand development startegy. They are definately the best"
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
              </Carousel>
            </Card>
          </div>
        </GridContainer>
      </div>
    </div>
  );
}
