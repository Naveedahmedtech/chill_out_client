import { Formik, Form, Field } from 'formik';
import VerificationInput from 'react-verification-input';
import { verifyCodeSchema } from '../../utils/formSchema';
import CommonHeader from '../components/auth/CommonHeader';
import image from "../../assets/images/image.png";
import { useNavigate } from 'react-router-dom';
import Text from '../../components/Text';
import { APP_NAME } from '../../utils/BASE_URL';

const VerifyCode = () => {
    const navigate = useNavigate();
    const initialValues = {
        code: ''  // Ensure to handle 6 characters even if the verification input length is set to 5
    };

    const handleSubmit = (values: any, { setSubmitting }: any) => {
        // alert('Verification Code: ' + values.code);
        navigate("/auth/reset-password")
        setSubmitting(false);
    };  

    const TitleText = () => {
        return <Text className="text-4xl font-semibold mb-5 "><span className='title-font font-medium'>{APP_NAME}</span></Text>
    }

    return (
        <CommonHeader
            image={image}
            primaryHeading={<TitleText />}
            secondaryHeading="Verify Code"
            paragraph="Please verify code to reset your password"
        >
            <Formik
                initialValues={initialValues}
                validationSchema={verifyCodeSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, errors, touched, isSubmitting }) => (
                    <Form>
                        <Field name="code">
                            {({ field, form }: any) => (
                                <VerificationInput
                                    {...field}
                                    length={6}
                                    validChars="0-9"
                                    placeholder="_"
                                    classNames={{
                                        container: "container",
                                        character: "text-primary", // Toggle 'character-dark' based on theme
                                        characterInactive: "text-primary",
                                        characterSelected: "text-primary",
                                        characterFilled: "text-primary"
                                    }}
                                    onChange={(value) => {
                                        setFieldValue('code', value);
                                        if (value.length === 6) {
                                            form.submitForm();
                                        }
                                    }}
                                />
                            )}
                        </Field>
                        {errors.code && touched.code && <div className="text-red-500 text-xs">{errors.code}</div>}
                        <button type="submit" disabled={isSubmitting} className="mt-3 btn border-2 border-[#7A23FF] bg-[#7A23FF] w-full py-2 text-white rounded-[7px] hover:bg-white hover:text-[#7A23FF] transition-all">
                            Verify Code
                        </button>
                    </Form>
                )}
            </Formik>
        </CommonHeader>
    );
}

export default VerifyCode;
