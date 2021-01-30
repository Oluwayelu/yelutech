/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Button from "../CustomButtons/Button";
import styles from "../../assets/js/components/footerStyle";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

import logo from '../../assets/img/logo/cover.png'

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <GridContainer className={classes.list}>
            <GridItem xs={12} sm={12} md={12} >
              <h3 className={classes.text}>Quick Links</h3>
            </GridItem>
            <GridItem xs={6} sm={6} md={2} >
              <a
                href="/"
                className={classes.block}
              >
                YeLu Tech
              </a>
            </GridItem>
            <GridItem xs={6} sm={6} md={2} >
              <a
                href="/about"
                className={classes.block}
              >
                About Us
              </a>
            </GridItem>
            <GridItem xs={6} sm={6} md={2} >
              <a
                href="/contact"
                className={classes.block}
              >
                Contact Us
              </a>
            </GridItem>
            <GridItem xs={6} sm={6} md={2} >
              <a
                href="/blog"
                className={classes.block}
              >
                Blog
              </a>
            </GridItem>
            <GridItem xs={6} sm={6} md={2} >
              <a
                href="/license"
                className={classes.block}
              >
                Licenses
              </a>
            </GridItem>
            <GridItem xs={6} sm={6} md={2} >
              <a
                href="/terms&condition"
                className={classes.block}
                target="_blank"
              >
                Terms And Condition
              </a>
            </GridItem>
            <GridItem >
              <Button justIcon simple>
                <FaTwitter className={classes.socialIcon} />
              </Button>
              <Button justIcon simple>
                <FaInstagram className={classes.socialIcon} />
              </Button>
              <Button justIcon simple>
                <FaFacebook className={classes.socialIcon} />
              </Button>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , All rights reserved | made with {" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="/"
            className={aClasses}
          >
            <img src={logo} className={classes.logo} />
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
