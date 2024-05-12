import { Formik, Form } from 'formik';
import InputField from '../../components/InputField';
import { loginSchema } from '../../utils/formSchema';
import { FaEnvelope, FaEye, FaLock } from 'react-icons/fa';
import image from "../../assets/images/image.png";
import Text from '../../components/Text';
import { IconColors } from '../../utils/styles';
import CommonHeader from '../components/auth/CommonHeader';
import { Link } from 'react-router-dom';


const AdditionalBody = () => (
  <div className='mt-5'>
    <div className='flex items-center gap-1'>
      <Text className="text-sm">Don't have an account?</Text>
      <Link to="/auth/register" className="text-sm text-blue-500 underline">Register</Link>
    </div>
  </div>
)


const Login = () => {
  return (
    <>
      <CommonHeader
        image={image}
        primaryHeading="Welcome to Back"
        secondaryHeading="Sign In"
        paragraph="Sign in to get back to your account."
        type="sign-in"
        additionBody={<AdditionalBody />}
      >
        <Formik
          initialValues={{ email: '', password: ''  }}
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
                leftIcon={<FaEnvelope color={IconColors.color} />}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                leftIcon={<FaLock color={IconColors.color} />}
                rightIcon={<FaEye color={IconColors.color} />}
              />
              <button type="submit" disabled={isSubmitting} className="mt-3 btn border-2 border-[#7A23FF] bg-[#7A23FF] w-full py-2 text-white rounded-[7px] hover:bg-white hover:text-[#7A23FF] transition-all">
                Sign in
              </button>
            </Form>
          )}
        </Formik>
        <Link to="/auth/forgot-password" className='text-end text-blue-500 underline'>Forgot password?</Link>
      </CommonHeader>
    </>
  );
};

export default Login;
