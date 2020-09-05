/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import styles from "../../../assets/js/components/headerLinkStyle";
import Button from "../../CustomButtons/Button";

const useStyles = makeStyles(styles);

const NavLeftLinks = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.yelutech.com/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.yelutech.com/services"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Services
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.yelutech.com/blog"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.yelutech.com/about"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.yelutech.com/contacts"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Contact
        </Button>
      </ListItem>
    </List>
  );
}

export default NavLeftLinks