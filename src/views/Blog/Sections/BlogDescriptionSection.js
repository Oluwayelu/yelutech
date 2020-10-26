import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Button from "../../../components/CustomButtons/Button"
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/js/views/blogPageSection/blogDescriptionStyle";

import Card from "../../../components/Card/Card"
import CardBody from "../../../components/Card/CardBody"
import CardHeader from "../../../components/Card/CardHeader"
import CardFooter from "../../../components/Card/CardFooter"
import CardAvatar from "../../../components/Card/CardAvatar.js";

const useStyles = makeStyles(styles);

export default function BlogDescriptionSection(props) {
  const classes = useStyles();
  const { id, title, images, body } = props

  return (
    <GridItem xs={12} md={4}>
      <Card plain>
        <CardHeader>
          <CardAvatar plain>
            <img key={id} src={`https://firebasestorage.googleapis.com/v0/b/yelutech.appspot.com/o/Blog%2F440px-React-icon.svg.png?alt=media&token=dfffe2d8-eca7-46f0-a002-5b4298b3ead7`} className={classes.image} alt="imgdata" />
          </CardAvatar>
          <h3 className={classes.title}>{title}</h3>
        </CardHeader>
        <CardBody>
          <p className={classes.description}>
            {body}
          </p>
        </CardBody>
        <CardFooter>
          <Button
            href={`/blog/${id}`}
            color="primary"
          >
            Read more...
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
