import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import styles from '../../../assets/js/views/landingPageSections/blogStyle'

import GridItem from '../../../components/Grid/GridItem'
import GridContainer from '../../../components/Grid/GridContainer'
import BlogDescriptionSection from '../../Blog/Sections/BlogDescriptionSection';

//import blogData from '../../../variables/blog'
import { Hidden } from '@material-ui/core';

import { getBlogs } from '../../../_actions/actions'
var i = 1
const useStyles = makeStyles(styles)
const BlogSection = ({
  blogs,
  getBlogs
}) => {
  const classes = useStyles()
  useEffect(() => {
    getBlogs()
  }, [getBlogs])
  return (
    <div className={classes.section}>
      <Hidden implementation="js" smDown>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Get Latest Information</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <div className={classes.container}>
              <GridContainer>
                {
                  blogs.map((data, key) => {
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
          </GridContainer>
        </div>
      </Hidden>
    </div>
  )
}

const mapStateToProps = state => ({
  blogs: state.data.blogs
})

export default connect(mapStateToProps, { getBlogs })(BlogSection)