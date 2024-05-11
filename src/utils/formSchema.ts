import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
});
