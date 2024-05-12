import { Formik, Form } from 'formik';
import InputField from '../../components/InputField';
import { resetPasswordSchema } from '../../utils/formSchema';
import { FaEye, FaLock } from 'react-icons/fa';
import image from "../../assets/images/image.png";
import { IconColors } from '../../utils/styles';
import CommonHeader from '../components/auth/CommonHeader';
import { useNavigate } from 'react-router-dom';



const ResetPassword = () => {
    const navigate = useNavigate()
    return (
        <>
            <CommonHeader
                image={image}
                primaryHeading="Chillout"
                secondaryHeading="Reset Password"
                paragraph="Create a new strong password"
                type="sign-up"
            >
                <Formik
                    initialValues={{ password: '', confirm_password: '' }}
                    validationSchema={resetPasswordSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        navigate("/auth/sign-in")
                        // setTimeout(() => {
                        //     console.log(values);
                        //     setSubmitting(false);
                        // }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
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
                            <button type="submit" disabled={isSubmitting} className="mt-3 btn border-2 border-[#7A23FF] bg-[#7A23FF] w-full py-2 text-white rounded-[7px] hover:bg-white hover:text-[#7A23FF] transition-all">
                                Reset Password
                            </button>
                        </Form>
                    )}
                </Formik>
            </CommonHeader>
        </>
    );
};

export default ResetPassword;
