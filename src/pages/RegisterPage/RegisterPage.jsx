import {Field, Form, Formik} from "formik";

const RegisterPage = () => {
    const initialValues ={
        name:'',
        email: '',
        password: ''
    }
    const handleSubmit = (values, actions)=>{
        console.log(values)
        actions.resetForm()
    }
    return <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='flex'>
            <label className='block text-sm/6 font-medium text-gray-900'>
                Name
                <Field className= 'block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300' name='name' type='text'/>
            </label>
            <label className='block text-sm/6 font-medium text-gray-900'>
                Email
                <Field className= 'block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300' name='email' type='email'/>
            </label>
            <label className='block text-sm/6 font-medium text-gray-900'>
                Password
                <Field className= 'block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300' name='password' type='password'/>
            </label>
            <button type='submit'>Register</button>

        </Form>
    </Formik>;
};

export default RegisterPage;