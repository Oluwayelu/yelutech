import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/js/views/aboutPageSections/aboutStyle";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} >
      <GridContainer justify="center">
        <GridItem xs={8} sm={8} md={8}>
          <h2 className={classes.title}>About Us</h2>
          <h4 className={classes.description}>
            What is YeLu Technologies.?
          </h4>
          <p className={classes.description}>
            <b>YeLu Technologies</b> is a Virtual Company whose main focus is to Change the world through the use of Technology.
            The Company was founded on the <i>1st of April 2019</i> by <b>Oluwayelu Ifeoluwa David</b>. It was officially Launched on the <i>2nd of
            April 2020</i> and since then it has grown in ways we can't even Imagine.
          </p>
          <p className={classes.description}>
            If you want to be part of us you can <a href="/apply">Click Me</a> to Join our Team.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
