import { Formik, Form } from 'formik';
import InputField from '../../components/InputField';
import { forgotSchema, } from '../../utils/formSchema';
import { FaEnvelope } from 'react-icons/fa';
import image from "../../assets/images/image.png";
import Text from '../../components/Text';
import { IconColors } from '../../utils/styles';
import CommonHeader from '../components/auth/CommonHeader';
import { Link, useNavigate } from 'react-router-dom';
import { APP_NAME } from '../../utils/BASE_URL';


const AdditionalBody = () => (
    <div className='mt-5'>
        <div className='flex items-center gap-1'>
            <Text className="text-sm">Already have an account?</Text>
            <Link to="/auth/sign-in" className="text-sm text-blue-500 underline">Sign-in</Link>
        </div>
        <Text className="text-xs mt-2">By clicking on “create account” you will accept our terms and conditions and privacy policy.</Text>
    </div>
);
const TitleText = () => {
    return <Text className="text-4xl font-semibold mb-5 ">Welcome Back to <span className='title-font font-medium'>{APP_NAME}</span></Text>
}



const ForgotPassword = () => {
    const navigate = useNavigate()
    return (
        <>
            <CommonHeader
                image={image}
                primaryHeading={<TitleText />}
                secondaryHeading="Forgot Password"
                paragraph="Please provide your email to send a code to reset your password"
                // type="sign-up"
                additionBody={<AdditionalBody />}
            >
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={forgotSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        navigate("/auth/verify-code")
                        // setTimeout(() => {
                        //     console.log(values);
                        //     setSubmitting(false);
                        // }, 400);
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
                            <button type="submit" disabled={isSubmitting} className="mt-3 btn border-2 border-[#7A23FF] bg-[#7A23FF] w-full py-2 text-white rounded-[7px] hover:bg-white hover:text-[#7A23FF] transition-all">
                                Get Code
                            </button>
                        </Form>
                    )}
                </Formik>
            </CommonHeader>
        </>
    );
};

export default ForgotPassword;
