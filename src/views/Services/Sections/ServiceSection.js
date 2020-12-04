import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { ChatBubble, Assessment, BarChart, Business, AlternateEmail, People, Computer, MobileFriendly } from '@material-ui/icons'

// core components
import Button from '../../../components/CustomButtons/Button'
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Modal from "../../../components/Modal/Modal"
import CreateProject from '../../../components/Project/CreateProject'

import styles from "../../../assets/js/views/servicePageSections/serviceStyle";

const useStyles = makeStyles(styles);

export default function ServiceSection() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Services</h2>
          <h4 className={classes.description}>
            Here at YeLu Tech, we provide a lot of useful services for the growth of your Company or your personal needs.
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="Website Development"
              description="We create world class responsive Web pages on all platforms available"
              icon={Computer}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="Mobile Development(iOS & Android)"
              description="Let us help you build useful Mobile apps both on iOS and Android platforms with beutiful UI"
              icon={MobileFriendly}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="SEO"
              description="Most times your applications do not get recognised by search engines. We have got you covered"
              icon={Assessment}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="Email Marketing"
              description="We also help with Email Marketing"
              icon={AlternateEmail}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="Social Media Management"
              description="We also help you grow and manage your Social Media platforms "
              icon={ChatBubble}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="Brand Design & Strategy"
              description="You don't know how to develop your Brand, we can help with that so that you can reach the market on time"
              icon={Business}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="Audience Analytics"
              description="Having difficulties analysing your clients and other related subjects, We help with that too"
              icon={BarChart}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <InfoArea
              title="Team Training"
              description="Are you are StartUp Company, we can help you create world class Team members for the quick Growth of your Company"
              icon={People}
              iconColor="rose"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <Modal
        content={(
          <CreateProject />
        )}
        open={openModal}
        setOpen={setOpenModal}
      />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.description}>
            So why don't you want to be part of those that enjoy from all these Services. Send us a message to get started on your applications.
          </h2>
          <Button
            color="primary"
            size="lg"
            rel="noopener noreferrer"
            onClick={() => setOpenModal(true)}
          >
            Get Started
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
