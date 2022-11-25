import * as Yup from 'yup'

export const loginSchema=Yup.object({
    email:Yup.string().email("Enter valid email").required("Please Enter the email"),
    password:Yup.string().min(6).required("Please Enter you password"),
})