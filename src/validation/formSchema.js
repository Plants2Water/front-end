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
    .string(),
  password:  yup
    .string()
    .trim()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      '- Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
})
export default formSchema