import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import styles from '../../../assets/js/views/landingPageSections/blogSection'

import GridItem from '../../../components/Grid/GridItem'
import GridContainer from '../../../components/Grid/GridContainer'
import BlogDescriptionSection from '../../Blog/Sections/BlogDescriptionSection';

import blogData from '../../../variables/blog'
import { Hidden } from '@material-ui/core';


var i = 1
const useStyles = makeStyles(styles)
const LandingPage = (props) => {
  const classes = useStyles()
  return (
    <div >
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Get Latest Information</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <Hidden implementation="js" smDown >
            <div className={classes.container}>
              <GridContainer>
                {
                  blogData.map((data, key) => {
                    i += 1
                    if (i < 5) {
                      return (
                        <BlogDescriptionSection key={key} id={data.id} images={data.images} title={data.title} description={data.description} />
                      )
                    } else {
                      return;
                    }
                  })}
              </GridContainer>
            </div>
          </Hidden>
        </GridContainer>
      </div>
    </div>

  )
}

export default LandingPage