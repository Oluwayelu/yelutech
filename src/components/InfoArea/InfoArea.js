import React from "react";
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Card from "../Card/Card";
import CardIcon from "../Card/CardIcon";
import CardBody from "../Card/CardBody";
import CardAvatar from "../Card/CardAvatar";
import CardHeader from "../Card/CardHeader";
import CardFooter from "../Card/CardFooter";

import styles from "../../assets/js/components/infoStyle";

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      <Card plain>
        <CardHeader color={iconColor} stats icon>
          <CardIcon>
            <div className={iconWrapper} >
              <props.icon className={iconClasses} />
            </div>
          </CardIcon>
          <h4 className={classes.title}>{title}</h4>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.descriptionWrapper}>
            <p className={classes.description}>{description}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool
};
