import styles from "../RegisterPage/registr.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authServicesLogin } from "../../services/auth";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

const LoginPage = () => {
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required("Обязательное поле")
            .email("Введите корректный email"),
        password: yup.string().required("Обязательное поле"),
    });

    const { login } = authServicesLogin();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const { data } = await login(values);
                console.log(data);
                toast.success("Вы успешно авторизовались");
            } catch (err) {
                toast(err.response.data);
            }
        },
    });

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Логин</h1>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <TextField
                    label="Ваш email"
                    variant="filled"
                    type="email"
                    name="email"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={Boolean(formik.errors.email)}
                    helperText={formik.errors.email ? formik.errors.email : ""}
                    onBlur={formik.handleBlur}
                />
                <TextField
                    label="Ваш пароль"
                    variant="filled"
                    type="password"
                    name="password"
                    fullWidth
                    required
                    error={formik.errors.password}
                    helperText={
                        formik.errors.password ? formik.errors.password : ""
                    }
                    onBlur={formik.handleBlur}
                    style={{ marginBottom: "40px" }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    style={{ backgroundColor: "#BF94E8", fontSize: "24px" }}
                >
                    Войти
                </Button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    );
};

export default LoginPage;
