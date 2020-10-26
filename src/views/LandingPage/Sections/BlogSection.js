import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/js/views/blogPageSection/blogStyle.js";

import BlogDescriptionSection from '../../Blog/Sections/BlogDescriptionSection'
import { firestore } from "../../../services/firebase";
const useStyles = makeStyles(styles);
const BlogSection = () => {
  const classes = useStyles();
  const [blogData, setBlogData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore.collection('blogs').get()
      setBlogData(data.docs.map(blog => ({ ...blog.data(), id: blog.id })))
    }
    fetchData()
  }, [blogData, setBlogData])
  var i
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
          {
            blogData.map((data, key) => {
              i += 1
              if (i < 5) {
                return (
                  <BlogDescriptionSection key={key} id={data._id} images={data.image} title={data.title} description={data.body} />
                )
              } else {
                return;
              }
            })}
        </GridContainer>
      </div>
    </div>
  );
}

export default BlogSection
