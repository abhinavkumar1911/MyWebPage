import * as Yup from 'yup';

export const Formschema = Yup.object().shape({
  FName: Yup.string().required('First Name is required'),
  LName: Yup.string().required('Last Name is required'),
  Email: Yup.string().email('Invalid email').required('Email is required'),
  PNo: Yup.string().matches(/^\d{10}$/, 'Phone must be 10 digits').required('Phone Number is required'),
  RNo: Yup.string().required('Roll Number is required'),
  ShortDesc: Yup.string().min(10, 'Minimum 10 characters').required('Description is required')
});
