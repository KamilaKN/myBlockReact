import styles from "./registr.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authServices } from "../../services/auth";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

const RegisterPage = () => {
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required("Обязательное поле")
            .email("Введите коректный email"),
        username: yup.string().required("Обязательное поле"),
        password: yup.string().required("Обязательное поле"),
    });

    const { registration } = authServices();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const { data } = await registration(values);
                console.log(data._doc);
                toast("Пользователь зарегистрирован");
            } catch (err) {
                toast("Ошибка");
            }
        },
    });

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>регистрация</h1>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <TextField
                    error={formik.errors.email}
                    helperText={formik.errors.email ? formik.errors.email : ""}
                    onBlur={formik.handleBlur}
                    label="Ваш email"
                    variant="filled"
                    type="email"
                    name="email"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <TextField
                    error={formik.errors.username}
                    helperText={
                        formik.errors.username ? formik.errors.username : ""
                    }
                    onBlur={formik.handleBlur}
                    label="Ваш имя"
                    variant="filled"
                    type="text"
                    name="username"
                    fullWidth
                    required
                    style={{ marginBottom: "20px" }}
                    value={formik.values.username}
                    onChange={formik.handleChange}
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
                    Зарегистрироваться
                </Button>
            </form>
            <ToastContainer />
        </section>
    );
};

export default RegisterPage;
