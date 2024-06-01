import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import InputField from '../../components/InputField';
import { registerSchema } from '../../utils/formSchema';
import { FaEnvelope, FaEye, FaLock } from 'react-icons/fa';
import image from "../../assets/images/auth/image.png";
import Text from '../../components/Text';
import { IconColors } from '../../utils/styles';
import CommonHeader from '../components/auth/CommonHeader';
import { Link, useNavigate } from 'react-router-dom';
import { APP_NAME } from '../../utils/BASE_URL';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useRegisterMutation } from '../../redux/features/authApi';
import { useFetchCsrfTokenQuery } from '../../redux/features/universalApi';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';

interface RegisterValues {
  email: string;
  password: string;
  confirm_password: string;
}

interface CsrfTokenResponse {
  status: string;
  statusCode: number;
  message: string;
  result: {
    csrfToken: string;
  };
}
const AdditionalBody: React.FC = () => (
  <div className='mt-5'>
    <div className='flex items-center gap-1'>
      <Text className="text-sm">Already have an account?</Text>
      <Link to="/auth/sign-in" className="text-sm text-blue-500 underline">Sign-in</Link>
    </div>
    <Text className="text-xs mt-2">By clicking on “create account” you will accept our terms and conditions and privacy policy.</Text>
  </div>
);

const TitleText: React.FC = () => (
  <Text className="text-4xl font-semibold mb-5 ">Welcome to <span className='title-font font-medium'>{APP_NAME}</span></Text>
);

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [registerUser, { error: RegisterError }] = useRegisterMutation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { data, error, isLoading, refetch: refetchToken } = useFetchCsrfTokenQuery();
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading) {
      if (!data || error) {
        toast.error(`Something wrong, please try to refresh the page!`);
      }
      if (data && (data as any).result.csrfToken) {
        setCsrfToken((data as any).result.csrfToken);
      }
    }
  }, [data, error]);

  const handleSubmit = useCallback(async (values: RegisterValues, { setSubmitting }: FormikHelpers<RegisterValues>) => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      setSubmitting(false);
      return;
    }

    const recaptchaToken = await executeRecaptcha('register');

    const userData = { ...values, recaptcha: recaptchaToken };
    try {
      await registerUser(userData).unwrap();
      console.log("RegisterError", RegisterError);
      if (RegisterError) {
        if (RegisterError?.message?.message?.length > 0) {
          toast.error(RegisterError?.message?.message?.[0]);
        } else {
          toast.error(RegisterError?.message?.message);
        }
      }
      navigate("/auth/sign-in");
    } catch (error:any) {
      if (error?.data?.message) {
        // Check if the message is an array
        if (Array.isArray(error.data.message?.message)) {
          // Display each message in the array
          toast.error(error.data.message?.message[0])
          console.log(error.data.message);
        } else if (typeof error.data.message === 'string') {
          // Display the string message
          toast.error(error.data.message);
        }
      } else if (error?.message) {
        // Fallback for generic error messages
        toast.error(error.message);
      } else {
        // General fallback error message
        toast.error("An unexpected error occurred.");
      }
      console.error(error.data.message);
    } finally {
      refetchToken()
    }


    setSubmitting(false);
  }, [executeRecaptcha, registerUser, navigate]);

  return (
    <>
      <CommonHeader
        image={image}
        primaryHeading={<TitleText />}
        secondaryHeading="Register"
        paragraph="Register account to connect with people and see or publish photos and reels."
        type="sign-up"
        additionBody={<AdditionalBody />}
      >
        <Formik
          initialValues={{ email: '', password: '', confirm_password: '' }}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
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
              <InputField
                label="Confirm Password"
                name="confirm_password"
                type="password"
                leftIcon={<FaLock color={IconColors.color} />}
                rightIcon={<FaEye color={IconColors.color} />}
              />
              <button
                type="submit"
                disabled={isSubmitting || !csrfToken || !data}
                className={`mt-3 btn border-2 border-[#7A23FF] bg-[#7A23FF] w-full py-2 text-white rounded-[7px] transition-all ${!isSubmitting && "hover:bg-white hover:text-[#7A23FF]"}`}
              >
                {isSubmitting ? <BeatLoader color="#ffffff" size={10} /> : "Register Account"}
              </button>
            </Form>
          )}
        </Formik>
      </CommonHeader>
    </>
  );
};

export default Register;
