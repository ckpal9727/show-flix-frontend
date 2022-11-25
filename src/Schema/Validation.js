import * as Yup from 'yup'




export const validationSchema = Yup.object({
    name:Yup.string().min(2,"It must be in 2 charecer").max(20).required("Please Enter you fname"),
    lname:Yup.string().min(2,"It must be in 2 charecer").max(20).required("Please Enter you lname"),
    email:Yup.string().email("enter vailid email").required("please Enter email"),
    mobile:Yup.string().min(10,"Require size 10 number").max(10).required("Please Enter you mobile numbre"),
    password:Yup.string().min(2).max(20).required("Please Enter you password"),
    // confirmPassword:Yup.string().required().oneOf([Yup.ref('password'),null],"Password must be same")
})


