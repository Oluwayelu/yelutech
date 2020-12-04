import React, { useState } from "react";
// @material-ui/core components
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button";
import Modal from '../../../components/Modal/Modal';
import CreateProject from '../../../components/Project/CreateProject';

import styles from "../../../assets/js/views/landingPageSections/aboutStyle";
import image from "../../../assets/img/bg10.jpg"
const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>About Us</h2>
          <h4 className={classes.description} style={{ textAlign: "left" }}>
            Welcome to YeLu Technologies, We Offer a great services to put a smile on our Clients face.
          </h4>
          <h4 className={classes.description} style={{ textAlign: "left" }}>
            We Offer a great services on Web Design, Web/Mobile Development, SEO management,
            Social Media management, Email Marketing, Brand design and Strategy, Team training
            and Other services to make your business idea come to live.
          </h4>
          <h4 className={classes.description} style={{ textAlign: "left" }}>
            What are you waiting for, Create a project with us to get you started.
          </h4>
          <Modal
            content={(
              <CreateProject setOpen={setOpenModal} />
            )}
            open={openModal}
            setOpen={setOpenModal}
          />
          <Button
            color="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpenModal(true)}
          >
            Create Project
          </Button>
        </GridItem>
        <Hidden smDown>
          <GridItem xs={6} sm={6} md={6}>
            <img src={image} style={{ width: "100%", height: "100%" }} alt="about us" />
          </GridItem>
        </Hidden>

      </GridContainer>

    </div>
  );
}
