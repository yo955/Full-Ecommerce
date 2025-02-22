// import { UseMutationResult } from "@tanstack/react-query";
// import { productType } from "./Product";
// import { RegisterParams } from "./RegisterParams";

interface initialValuesProps {
  name: string;
  email: string;
  password: string;
}

export interface formDataProp {
  className: string;
  type: string;
  name: string;
  placeholder: string;
}


export type formDataArray = {
  fieldData: formDataProp[];
  initialValues: initialValuesProps;
  islogin:boolean;
  // authFunc: () =>  UseMutationResult<productType, Error, RegisterParams, unknown>;

};
