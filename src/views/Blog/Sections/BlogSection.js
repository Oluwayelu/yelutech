import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/js/views/blogPageSection/blogStyle.js";

import BlogDescriptionSection from './BlogDescriptionSection'
import blogData from '../../../variables/blog'
const useStyles = makeStyles(styles);

export default function BlogSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} >
      <GridContainer justify="center">
        <GridItem xs={8} sm={8} md={8}>
          <h2 className={classes.title}>BLOG</h2>
          <h4 className={classes.description}>
            What is NEW in the world of Technology?
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          {blogData.map((data, key) => {
            return (
              <BlogDescriptionSection key={key} id={data.id} images={data.images} title={data.title} description={data.description} />
            )
          })}
        </GridContainer>
      </div>
    </div>
  );
}
