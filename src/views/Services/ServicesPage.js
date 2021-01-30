import React from 'react'
import classNames from 'classnames'

import { makeStyles } from "@material-ui/core/styles";
import styles from '../../assets/js/views/servicesPageStyle'
import Navbar from '../../components/Header/Navbar/Navbar';
import NavLeftLinks from '../../components/Header/Navbar/NavLeftLink';
import Parallax from '../../components/Parallax/Parallax'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import NavRightLinks from '../../components/Header/Navbar/NavRightLink';
import Footer from '../../components/Footer/Footer';
import ServiceSection from './Sections/ServiceSection';

import logo from '../../assets/img/logo/cover.png'
import svgBackground1 from '../../assets/svg/wave1.svg'
const useStyles = makeStyles(styles)
const ServicesPage = (props) => {
  const classes = useStyles()
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
          height: 200,
          color: "dark"
        }}
      />
      <Parallax filter small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Services we Provide</h1>
              <h4>
                We have a lot to Offer you and your Company
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
        <div className={classes.container}>
          <ServiceSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ServicesPage