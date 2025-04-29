interface initialValuesProps {
  name?: string;
  email: string;
  password: string;
}

export interface formDataProp {
  className: string;
  type: string;
  name: string;
  placeholder: string;
  label?: string;
}


export type formDataArray = {
  fieldData: formDataProp[];
  initialValues: initialValuesProps;
  isLogin:boolean;
};
