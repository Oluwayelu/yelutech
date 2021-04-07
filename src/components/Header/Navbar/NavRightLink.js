/*eslint-disable*/
import React from "react";
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

const NavRightLinks = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
        >
          <Button
            href="https://mobile.twitter.com/yelutechnologi1"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
        >
          <Button
            href="https://m.facebook.com/YeLu-Technologies-107386934647949/?refid=11&__xts__%5B0%5D=11.%7B%22event%22%3A%22visit_page_tab%22%2C%22user_id%22%3A100017550064049%2C%22page_id%22%3A107386934647949%7D&_rdr"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaFacebook className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
        >
          <Button
            href="https://www.instagram.com/yelutech/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaInstagram className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default NavRightLinks
