import { useFormik } from "formik";  
import * as Yup from "yup";


const signupSchema = Yup.object().shape({  
    Email: Yup.string().email('Invalid Email').required('Required field'),  
    FullName: Yup.string().min(5, 'Must be more than 5 characters').required('Required field'),  
    DateOfBirth: Yup.date().required('Required field').nullable().max(new Date(), 'Date of birth cannot be in the future'),  
    Phone: Yup.string().length(11, 'Phone number must be exactly 11 digits').required('Required field'),  
    Address: Yup.string().required('Required field'),  
    Password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required field'),  
});  


function Formcomponent() {  
    const formik = useFormik({  
        initialValues: {  
            FullName: '',  
            Email: '',  
            DateOfBirth: '',  
            Phone: '',  
            Address: '',  
            Password: '',  
        },  
        validationSchema: signupSchema,  
        onSubmit: (values) => {  
            console.log("Form submitted successfully:", values);  
            formik.resetForm();  
        },  
    });  

    return (  
        <div className="w-full h-screen bg-gray-500 flex items-center justify-center">  
            <div className="bg-white w-[45%] rounded-2xl shadow-lg p-[20px] flex flex-col">  
                <h2 className="text-center text-2xl mb-5">Signup</h2>  
                <form className="flex flex-col" onSubmit={formik.handleSubmit}>  
             
                    <input type="text" name="FullName" onChange={formik.handleChange} value={formik.values.FullName} placeholder="Enter Fullname"  
                        className="w-full h-[45px] border-[1px] border-gray-500 rounded-xl bg-gray-100 px-4 mb-5" />  
                    
                    {formik.touched.FullName && formik.errors.FullName && (  
                        <div className="text-red-500 mb-3">{formik.errors.FullName}</div>  
                    )}  

                    
                    <input type="email" name="Email" onChange={formik.handleChange} value={formik.values.Email} placeholder="Enter email"  
                        className="w-full h-[45px] border-[1px] border-gray-500 rounded-xl bg-gray-100 px-4 mb-5" />  
                    
                    {formik.touched.Email && formik.errors.Email && (  
                        <div className="text-red-500 mb-3">{formik.errors.Email}</div>  
                    )}  

  
                    <input type="date" name="DateOfBirth" onChange={formik.handleChange} value={formik.values.DateOfBirth}  
                        className="w-full h-[45px] border-[1px] border-gray-500 rounded-xl bg-gray-100 mb-5" />  
                    
                    {formik.touched.DateOfBirth && formik.errors.DateOfBirth && (  
                        <div className="text-red-500 mb-3">{formik.errors.DateOfBirth}</div>  
                    )}  

                   
                    <input type="text" name="Phone" onChange={formik.handleChange} value={formik.values.Phone} placeholder="Enter phone number"  
                        className="w-full h-[45px] border-[1px] border-gray-500 rounded-xl bg-gray-100 px-4 mb-5" />  
                    
                    {formik.touched.Phone && formik.errors.Phone && (  
                        <div className="text-red-500 mb-3">{formik.errors.Phone}</div>  
                    )}  
                    
                    
                    <input type="text" name="Address" onChange={formik.handleChange} value={formik.values.Address} placeholder="Enter address"  
                        className="w-full h-[45px] border-[1px] border-gray-500 rounded-xl bg-gray-100 px-4 mb-5" />  
                    
                    {formik.touched.Address && formik.errors.Address && (  
                        <div className="text-red-500 mb-3">{formik.errors.Address}</div>  
                    )}  

                      
                    <input type="password" name="Password" onChange={formik.handleChange} value={formik.values.Password} placeholder="Enter password"  
                        className="w-full h-[45px] border-[1px] border-gray-500 rounded-xl bg-gray-100 px-4 mb-5" />  
                    
                    {formik.touched.Password && formik.errors.Password && (  
                        <div className="text-red-500 mb-3">{formik.errors.Password}</div>  
                    )}  

                    
                    <input type="submit" className="w-full h-[50px] rounded-2xl bg-blue-600 text-white cursor-pointer"  title='submit' />  
                </form>  
            </div>  
        </div>  
    );  
}  

export default Formcomponent