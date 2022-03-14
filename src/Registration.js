import React from "react";
import { Formik } from "formik";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

const Registration = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: "15px" }}>
              <TextField
                label="name"
                type="name"
                value={values.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              {touched.name && errors.name && (
                <span style={{ color: "red" }}>{errors.name}</span>
              )}
            </div>

            <div style={{ marginTop: "15px" }}>
              <TextField
                label="email"
                value={values.email}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              {touched.email && errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div>
              <TextField
                label="password"
                type="password"
                value={values.password}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div>
                {touched.password && errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
