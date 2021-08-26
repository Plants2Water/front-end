import * as yup from 'yup';
const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(3, 'UserName mus be 3 characters long')
    .max(25,"Too Long Username"),
  first_name: yup
    .string()
    .trim()
    .required('First name is required')
    .min(3, 'UserName mus be 3 characters long')
    .max(25,"Too Long"),
  last_name: yup
    .string()
    .trim()
    .required('Last name is required')
    .min(3, 'UserName mus be 3 characters long')
    .max(25,"Too Long Username"),
  email: yup
    .string()
    .trim()
    .email('Must be a valid email address')
    .required('Email is required'),
  telephone: yup
    .string()
    .trim(),
  password:  yup
    .string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(25, 'Too long password'),
})
export default formSchema