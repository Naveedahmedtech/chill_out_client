import { Formik, Form } from 'formik';
import InputField from '../../components/InputField';
import { loginSchema } from '../../utils/formSchema';
import { FaEnvelope, FaEye, FaLock } from 'react-icons/fa';
import CardLayout from '../components/auth/CardLayout';
import image from "../../assets/images/image.png";

const LoginForm = () => {
  return (
    <>
      <CardLayout>
        <div className='rounded-[28px] shadow-slate-500 bg-white shadow-lg flex flex-col md:flex-row mx-auto my-8 max-w-4xl overflow-hidden'>
          <div className='md:w-1/2 lg:w-2/5 hidden sm:block'>
            <img src={image} alt="Descriptive Alt Text" className='w-full h-full object-cover rounded-l-[28px]' />
          </div>
          <div className="p-5 w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center">
            <div className="mb-4">
              <h1 className="text-4xl font-bold text-primary mb-5">Welcome to Chillout</h1>
              <h3 className="text-lg font-semibold text-primary">Sign up</h3>
              <p className="text-sm my-2 text-primary">Create an account to connect with people and see or publish photos and reels.</p>
            </div>
            <Formik
              initialValues={{ email: '', password: '', confirmPassword: '' }}
              validationSchema={loginSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    leftIcon={<FaEnvelope />}
                  />
                  <InputField
                    label="Password"
                    name="password"
                    type="password"
                    leftIcon={<FaLock />}
                    rightIcon={<FaEye />}
                  />
                  <InputField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    leftIcon={<FaLock />}
                    rightIcon={<FaEye />}
                  />
                  <button type="submit" disabled={isSubmitting} className="mt-3 btn border-2 border-[#7A23FF] bg-[#7A23FF] w-full py-2 text-white rounded-[7px] hover:bg-white hover:text-[#7A23FF] transition-all">
                    Create Account
                  </button>
                </Form>
              )}
            </Formik>
            <div className="mt-2">
              <p className="text-sm">Already have an account?</p> <span className="text-blue-500 cursor-pointer">Sign-in</span>
              <p className="text-xs mt-2">By clicking on “create account” you will accept our terms and conditions and privacy policy.</p>
            </div>
          </div>
        </div>
      </CardLayout>
    </>
  );
};

export default LoginForm;
