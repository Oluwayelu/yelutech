import React, { useEffect } from "react";
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import { getBlogs } from '../../../_actions/actions'
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/js/views/blogPageSection/blogStyle.js";

import BlogDescriptionSection from './BlogDescriptionSection'
const useStyles = makeStyles(styles);
const BlogSection = ({
  blogs,
  getBlogs
}) => {
  const classes = useStyles();
  useEffect(() => {
    getBlogs()
  }, [getBlogs])
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
          {blogs.map((data, key) => {
            return (
              <BlogDescriptionSection key={key} id={data._id} images={data.image} title={data.title} description={data.body} />
            )
          })}
        </GridContainer>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  blogs: state.data.blogs
})

export default connect(mapStateToProps, { getBlogs })(BlogSection)