import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';

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

import styles from "../../assets/js/components/Project/createProject";

import serviceData from '../../variables/service'
import { firestore } from '../../services/firebase'

const useStyles = makeStyles(styles);

export default function CreateProject(props) {
  const classes = useStyles();

  return (
    <div className={classes.section} >
      <GridContainer justify="center">
        <GridItem xs={8} sm={8} md={8}>
          <h2 className={classes.title}>Let's discuss about your project</h2>
          <h4 className={classes.description}>
            Give a brief information about your project,
            and we will contact you shortly
          </h4>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              service: '',
              date: '',
              message: ''
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required('Your name is required'),
              email: Yup.string()
                .required('Email is required')
                .email('Email is not valid'),
              service: Yup.string()
                .required('A service must be selected'),
              message: Yup.string()
                .required('Message is required')
                .max(300, 'Message is too long, at most 300 characters')
                .min(5, 'Message is too short, at least 5 charcters')
            })}
            onSubmit={(
              values,
              { setStatus }
            ) => {
              setStatus()
              firestore.collection('projects').doc().set({
                ...values,
                date: firebase.firestore.Timestamp.now()
              })
              props.setOpen(false)
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              errors,
            }) => (
                <form
                  onSubmit={handleSubmit}
                >
                  <GridContainer>
                    <GridItem xs={12} md={6}>
                      <CustomInput
                        labelText="Enter your Name"
                        inputProps={{
                          type: "text",
                          value: values.name,
                          onChange: handleChange,
                          error: touched.name && Boolean(errors.name),
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
                      {errors.name && (<span className={classes.errors}>{errors.name}</span>)}
                    </GridItem>
                    <GridItem xs={12} md={6}>
                      <CustomInput
                        labelText="Enter your Email"
                        inputProps={{
                          type: "email",
                          value: values.email,
                          onChange: handleChange,
                          error: touched.email && Boolean(errors.email),
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
                      {errors.email && (<span className={classes.errors}>{errors.email}</span>)}
                    </GridItem>
                    <GridItem xs={12} md={6}>
                      <CustomInput
                        labelText="Enter your Phone number"
                        inputProps={{
                          type: "text",
                          value: values.phone,
                          onChange: handleChange,
                          error: touched.phone && Boolean(errors.phone),
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
                      {errors.phone && (<span className={classes.errors}>{errors.phone}</span>)}
                    </GridItem>
                    <GridItem xs={12} md={6}>
                      <CustomInput
                        labelText="Proposed date for delivery"
                        inputProps={{
                          type: "date",
                          value: values.date,
                          onChange: handleChange,
                          error: touched.date && Boolean(errors.date),
                          placeholder: "Date"
                        }}
                        id="date"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      {errors.date && (<span className={classes.errors}>{errors.date}</span>)}
                    </GridItem>
                    <GridItem xs={12}>
                      <CustomSelect
                        labelText="Services Needed"
                        inputProps={{
                          required: true,
                          name: "service",
                          value: values.service,
                          onChange: handleChange,
                          error: touched.service && Boolean(errors.service),
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                        id="service"
                      >
                        {serviceData.map(data => (
                          <MenuItem key={data.value} value={data.value}>{data.text}</MenuItem>
                        ))}
                      </CustomSelect>
                      {errors.service && (<span className={classes.errors}>{errors.service}</span>)}
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
                          rows: 4,
                          values: values.message,
                          onChange: handleChange,
                          error: touched.message && Boolean(errors.message),
                        }}
                      />
                      {errors.message && (<span className={classes.errors}>{errors.message}</span>)}
                    </GridItem>
                    <GridItem xs={12}>
                      <Button type="submit" color="primary" onSubmit={handleSubmit}>Create Project</Button>
                    </GridItem>
                  </GridContainer>
                </form>
              )

            }
          </Formik>

        </GridItem>
      </GridContainer>
    </div>
  );
}
