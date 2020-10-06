import React, { useEffect } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux';

import { makeStyles } from "@material-ui/core/styles";
import styles from '../../assets/js/views/blogPageStyle'
import Navbar from '../../components/Header/Navbar/Navbar';
import NavLeftLinks from '../../components/Header/Navbar/NavLeftLink';
import Parallax from '../../components/Parallax/Parallax'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import NavRightLinks from '../../components/Header/Navbar/NavRightLink';
import Footer from '../../components/Footer/Footer';
import BlogSection from './Sections/BlogSection';

import { getBlogData } from '../../_actions/actions'
const useStyles = makeStyles(styles)
const BlogPage = ({
  match,
  blogData,
  getBlogData
}) => {
  const classes = useStyles()
  useEffect(() => {
    getBlogData(match.params.id)
  }, [])
  console.log(blogData)
  return (
    <div>
      <Navbar
        color="transparent"
        routes={[]}
        brand="YeLu Tech"
        leftLinks={<NavLeftLinks />}
        rightLinks={<NavRightLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "dark"
        }}
      />
      <Parallax filter image>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Welcome to Our Blog</h1>
              <h4>
                Get Quality Information about the Latest Technological Improvements in the World
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <BlogSection />
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  blogData: state.data.blogData
})
export default connect(mapStateToProps, { getBlogData })(BlogPage)