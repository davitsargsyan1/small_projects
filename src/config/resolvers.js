import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const firstNameValidation = yup
  .string()
  .required("First name is required")
  .min(2, "Too short, min. 2 letters")
  .max(25, "Too long, max. 25 letters")
  .matches(/^[a-zA-Z ,.'-]+$/, "First name must contain only letters");

const lastNameValidation = yup
  .string()
  .required("Last name is required")
  .min(2, "Too short, min. 2 letters")
  .max(25, "Too short, min. 2 letters")
  .matches(/^[a-zA-Z ,.'-]+$/, "Last name must contain only letters");

const emailValidation = yup
  .string()
  .required("Email is required")
  .min(4, "Too short, min. 4 letters")
  .max(50, "Too long, max. 50 letters")
  .email("Please enter valid email");

const companyValidation = yup
  .string()
  .required("This field is required")
  .min(2, "Too short, min. 2 letters")
  .max(50, "Too long, max. 50 letters")
  .matches(
    /^[a-zA-Z0-9 ,.'-]+$/,
    "This field can contain only letters and numbers"
  );

const positionValidation = yup.string().required("This field is required");

const firstStep = yupResolver(
  yup.object().shape({
    firstName: firstNameValidation,
    lastName: lastNameValidation,
    email: emailValidation,
  })
);

const thirdStep = yupResolver(
  yup.object().shape({
    company: companyValidation,
    position: positionValidation,
  })
);

const resolvers = {
  firstStep,
  thirdStep,
};

export default resolvers;
