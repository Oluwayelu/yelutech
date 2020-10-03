import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, MenuItem } from '@material-ui/core'
// @material-ui/icons
import { Email, People, Phone } from '@material-ui/icons'

// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import CustomInput from "../CustomInput/CustomInput.js";
import Button from "../CustomButtons/Button.js";
import CustomSelect from '../CustomSelect/CustomSelect'

import styles from "../../assets/js/views/landingPageSections/workStyle.js";


const useStyles = makeStyles(styles);

export default function CreateProject() {
  const classes = useStyles();
  const [selected, setSelected] = useState("")

  return (
    <div  >
      <GridContainer justify="center">
        <GridItem xs={8} sm={8} md={8}>
          <h2 className={classes.title}>Let's discuss about your project</h2>
          <h5 className={classes.description}>
            Give a brief information about your project,
            and we will contact you shortly
          </h5>
          <form>
            <GridContainer>
              <GridItem xs={12} md={6}>
                <CustomInput
                  labelText="Enter your Name"
                  inputProps={{
                    type: "text",
                    placeholder: "Surname  Firstname  Middlename",
                    endAdornment: (
                      <InputAdornment position="end">
                        <People className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <CustomInput
                  labelText="Enter your Email"
                  inputProps={{
                    type: "email",
                    placeholder: "example@gmail.com",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <CustomInput
                  labelText="Enter your Phone number"
                  inputProps={{
                    type: "text",
                    placeholder: "+234 0901 234 5678",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Phone className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                  id="phone"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12}>
                <CustomSelect
                  labelText="Services Needed"
                  inputProps={{
                    required: true,
                    name: "service",
                    value: selected,
                    defaultValue: "web",
                    onChange: e => setSelected(e.target.value),
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                >
                  <MenuItem value="">SEO</MenuItem>
                  <MenuItem value="web">Website</MenuItem>
                  <MenuItem value="mobile">Mobile</MenuItem>
                </CustomSelect>
              </GridItem>
              <GridItem xs={12}>
                <CustomInput
                  labelText="Proposed date for delivery"
                  inputProps={{
                    type: "date",
                    placeholder: "Date"
                  }}
                  id="date"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12}>
                <CustomInput
                  labelText="Description of Project"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    placeholder: "Enter your message here",
                    multiline: true,
                    rows: 4
                  }}
                />
              </GridItem>
              <GridItem xs={12}>
                <Button color="primary">Create Project</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
