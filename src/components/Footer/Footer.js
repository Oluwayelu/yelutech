/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../assets/js/components/footerStyle";

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
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
              >
                YeLu Tech
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/blog"
                className={classes.block}
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/license"
                className={classes.block}
              >
                Licenses
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/terms&condition"
                className={classes.block}
                target="_blank"
              >
                Terms And Condition
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/about"
                className={classes.block}
              >
                About Us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/contact"
                className={classes.block}
              >
                Contact Us
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="/"
            className={aClasses}
          >
            YeLu Tech
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
