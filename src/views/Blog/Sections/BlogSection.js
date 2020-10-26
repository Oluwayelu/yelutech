import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/js/views/blogPageSection/blogStyle.js";

import BlogDescriptionSection from './BlogDescriptionSection'
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
  }, [blogData])
  console.log(blogData)
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
            blogData.map((blog, key) => {
              return <BlogDescriptionSection key={key} id={blog.id} title={blog.title} body={blog.body} />
            })
          }
        </GridContainer>
      </div>
    </div>
  );
}

export default BlogSection