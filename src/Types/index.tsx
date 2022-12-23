export interface FormDatatype {
  Email: string;
  Firstname: string;
  Lastname: string;
  password: string;
}

export interface formInputData {
  fieldName: string;
  fieldType: string;
  formvalue: string;
  label: string;
  error: string;
  img?: string;
}

export interface imgGrpData {
  img?: string;
}
