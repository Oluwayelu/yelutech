import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Call, Email, LocationOn } from '@material-ui/icons'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/js/views/contactPageSections/contactStyle";

const useStyles = makeStyles(styles);

export default function ContactSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={8} sm={8} md={8}>
          <h2 className={classes.title}>Contact us Today</h2>
          <h4 className={classes.description}>
            Let's get started on your project
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <GridItem xs={12}>
                  <CustomInput
                    labelText="Your Name"
                    inputProps={{
                      placeholder: "Surname  Firstname  Middlename"
                    }}
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <CustomInput
                    labelText="Your Email"
                    inputProps={{
                      placeholder: "example@gmail.com"
                    }}
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <CustomInput
                    labelText="Your Message"
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      placeholder: "Enter your message here",
                      multiline: true,
                      rows: 4
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Button color="primary">Send Message</Button>
                </GridItem>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <h3 className={classes.description}>
                  You can also contact us by
                </h3>
                <GridItem >
                  <div>
                    <Button justIcon simple>
                      <Email className={classes.icon} />
                    </Button>
                    team@yelutech.com
                  </div>
                </GridItem>
                <GridItem >
                  <div>
                    <Button justIcon simple>
                      <Call className={classes.icon} />
                    </Button>
                    +234-0905-315-6229
                  </div>
                </GridItem>
                <GridItem >
                  <div>
                    <Button justIcon simple>
                      <LocationOn className={classes.icon} />
                    </Button>
                    Unilag, Akoka, Lagos State, Nigeria.
                  </div>
                </GridItem>
                <h4 className={classes.description}>Follow us on </h4>
                <GridItem >
                  <Button justIcon simple>
                    <FaTwitter className={classes.icon} />
                  </Button>
                  <Button justIcon simple>
                    <FaInstagram className={classes.icon} />
                  </Button>
                  <Button justIcon simple>
                    <FaFacebook className={classes.icon} />
                  </Button>
                </GridItem>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
