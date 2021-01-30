import React, { useState } from 'react'
import classNames from 'classnames'
// @material-ui/icons
import { Assessment, AlternateEmail, Computer, MobileFriendly } from '@material-ui/icons'

import { makeStyles } from "@material-ui/core/styles";
import styles from '../../assets/js/views/landingPageStyle'
import image from "../../assets/img/examples/olu-eletu.jpg"

import Navbar from '../../components/Header/Navbar/Navbar';
import NavLeftLinks from '../../components/Header/Navbar/NavLeftLink';
import Parallax from '../../components/Parallax/Parallax'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Button from '../../components/CustomButtons/Button'
import NavRightLinks from '../../components/Header/Navbar/NavRightLink';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import CreateProject from '../../components/Project/CreateProject';
import logo from '../../assets/img/logo/cover.png'
import svgBackground1 from '../../assets/svg/wave1.svg'
import svgBackground2 from '../../assets/svg/wave2.svg'
//Sections of Landing page
import ProductSection from './Sections/ProductSection';
import WorkSection from './Sections/WorkSection';
import TestimoniesSection from './Sections/TestimoniesSection';
import AboutSection from './Sections/AboutSection';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(styles)
const LandingPage = (props) => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <Navbar
        color="transparent"
        routes={[]}
        brand={<img className={classes.logo} src={logo} alt="logo" />}
        leftLinks={<NavLeftLinks />}
        rightLinks={<NavRightLinks />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "dark"
        }}
      />
      <Parallax filter>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Welcome to the Home of Technology. Here we are changing the world through the use of Technology.
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpenModal(true)}
              >
                Start new Project
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Modal
        content={(
          <CreateProject setOpen={setOpenModal} />
        )}
        open={openModal}
        setOpen={setOpenModal}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>

        <div style={{ backgroundImage: 'url(' + svgBackground2 + ')', backgroundRepeat: "no-repeat", backgroundPosition: 'bottom' }}>
          <ProductSection />
        </div>
        <div className={classes.secondary}>
          <div className={classes.container}>
            <AboutSection />
          </div>
        </div>
        <div style={{ backgroundImage: 'url(' + svgBackground1 + ')', backgroundRepeat: "no-repeat" }}>
          <GridContainer>
            <Hidden smDown>
              <GridItem md={6}>
                <img src={image} alt="test" style={{ width: "80%", height: "80%", marginTop: "50px", marginLeft: "120px" }} />
              </GridItem>
            </Hidden>

            <GridItem md={6}>
              <TestimoniesSection />
            </GridItem>
          </GridContainer>
        </div>
        <WorkSection />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage