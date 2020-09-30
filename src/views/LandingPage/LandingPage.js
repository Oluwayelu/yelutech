import React from 'react'
import classNames from 'classnames'

import { makeStyles } from "@material-ui/core/styles";
import styles from '../../assets/js/views/landingPageStyle'
import Navbar from '../../components/Header/Navbar/Navbar';
import NavLeftLinks from '../../components/Header/Navbar/NavLeftLink';
import Parallax from '../../components/Parallax/Parallax'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Button from '../../components/CustomButtons/Button'
import NavRightLinks from '../../components/Header/Navbar/NavRightLink';
import Footer from '../../components/Footer/Footer';
import ProductSection from './Sections/ProductSection';
import TeamSection from './Sections/TeamSection';
import WorkSection from './Sections/WorkSection';
const useStyles = makeStyles(styles)
const LandingPage = (props) => {
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
          color: "primary"
        }}
      />
      <Parallax filter image={require("../../assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <img className={classes.logo} src={require('../../assets/img/logo-1.png')} alt="logo" /><br />
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Lorem ipsum dfggd hv dhf hbhf fkhbkf kbfd ffkhf kh kfh fhbbf fb fh
                {"'"}t h f k fk n  f ffhff k f f f f   fjbfjbjfb  kjk lg g h hknk;yg
                bng;kb gk;bgkb g ;bg.
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href="#JoinUs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Us Today
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
        <TeamSection />
        <WorkSection />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage