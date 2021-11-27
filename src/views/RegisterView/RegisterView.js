import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { authSelectors, register, actions } from "redux/auth";
import s from "views/RegisterView/RegisterView.module.css";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(3, "Name should be of minimum 3 characters length")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

export default function RegisterView() {
  const dispatch = useDispatch();
  const isError = useSelector(authSelectors.isRegisterError);

  useEffect(() => {
    dispatch(actions.errorReset());
  }, [dispatch]);

  const handleSubmit = ({ name, email, password }) => {
    dispatch(register({ name, email, password }));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (data) => handleSubmit(data),
  });

  return (
    <div className={s.form}>
      <h2 className={s.title}>Registration form</h2>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        {isError && <p className={s.error}>Please use another email!</p>}
        <TextField
          fullWidth
          className={s.field}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <div className={s.button}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
