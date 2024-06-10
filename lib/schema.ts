import * as Yup from "yup";

export const userValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const userSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const profileValues = {
  customerId: '',
  password: '',
}

export const profileSchema = Yup.object().shape({
  customerId: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
})