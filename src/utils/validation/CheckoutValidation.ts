import * as Yup from "yup";

export const CheckoutValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  state: Yup.string().required("Governorate is required"),
  street: Yup.string().required("Street is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  phone: Yup.string().required("Phone number is required").matches(/^[0-9]+$/, "Phone number must be a number"),
  zipCode: Yup.string().required("Zip code is required").matches(/^[0-9]+$/, "Zip code must be a number"),
});