import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, MenuItem } from '@material-ui/core'
// @material-ui/icons
import { Email, People } from '@material-ui/icons'

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
          <h2 className={classes.title}>Create a new Project</h2>
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
