import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/js/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{
      backgroundImage: "url(" + require('../../../assets/img/bg.jpg') + ")",
      backgroundPosition: "center center",
      backgroundSize: "cover"
    }}>
      <GridContainer justify="center">
        <GridItem cs={8} sm={8} md={8}>
          <h2 className={classes.title}>Contact us Today</h2>
          <h4 className={classes.description}>
            Lorem ipsum dfggd hv dhf hbhf fkhbkf kbfd ffkhf kh kfh fhbbf fb fh
            {"'"}t h f k fk n  f  ffhff k f f f f   fjbfjbjfb  kjk lg g h hknk;yg
            bng;kb gk;bgkb g ;bg.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={7} sm={7} md={7}>
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
              <GridItem xs={5}>
                <h4 className={classes.description}>
                  You can also contact us by
                </h4>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
