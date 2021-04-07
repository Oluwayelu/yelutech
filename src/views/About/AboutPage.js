import React from 'react'
import classNames from 'classnames'

import { makeStyles } from "@material-ui/core/styles";
import styles from '../../assets/js/views/aboutPageStyle'
import Navbar from '../../components/Header/Navbar/Navbar';
import NavLeftLinks from '../../components/Header/Navbar/NavLeftLink';
import Parallax from '../../components/Parallax/Parallax'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import NavRightLinks from '../../components/Header/Navbar/NavRightLink';
import Footer from '../../components/Footer/Footer';
import AboutSection from './Sections/AboutSection';
import svgBackground1 from '../../assets/svg/wave1.svg'
import logo from '../../assets/img/logo/cover.png'
const useStyles = makeStyles(styles)
const AboutPage = (props) => {
  const classes = useStyles()
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
          height: 200,
          color: "dark"
        }}
      />
      <Parallax filter small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>About Us</h1>
              <h4>
                A brief description about who we are as a Company
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}
        style={{
          backgroundImage: 'url(' + svgBackground1 + ')',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top"
        }}
      >
        <AboutSection />
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
