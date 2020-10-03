import React from "react";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Carousel from "react-slick"

// core components
import Button from "../../../components/CustomButtons/Button"
import GridItem from "../../../components/Grid/GridItem.js";

//import styles from "../../../assets/js/views/landingPageSections/workStyle.js";

import Card from "../../../components/Card/Card"
import CardBody from "../../../components/Card/CardBody"
import CardHeader from "../../../components/Card/CardHeader"
import CardFooter from "../../../components/Card/CardFooter"
import CardAvatar from "../../../components/Card/CardAvatar.js";

//const useStyles = makeStyles(styles);

export default function BlogDescriptionSection(props) {
  //const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const { id, title, images, description } = props
  console.log(props)
  return (
    <GridItem xs={12} md={4}>
      <Card plain>
        <CardHeader>
          <Carousel {...settings}>
            {images.map((image, key) => {
              return (
                <CardAvatar plain>
                  <img src={image} style={{
                    width: '80%',
                    height: "300px",
                    borderRadius: "6px"
                  }} alt="imgdata" />
                </CardAvatar>
              )
            })}
          </Carousel>
          <h3>{title}</h3>
        </CardHeader>
        <CardBody>
          <p>
            {description}
          </p>
        </CardBody>
        <CardFooter>
          <Button
            href={`/blog?id=${id}`}
            color="primary"
          >
            Read more...
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
