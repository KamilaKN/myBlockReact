import styles from "./registr.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authServices } from "../../services/auth";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
    const { registration } = authServices();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: "",
        },
        onSubmit: async (values) => {
            try {
                const { data } = await registration(values);
                console.log(data._doc);
                toast("Пользователь зарегистрирован")
            } catch (err) {
                toast("Ошибка");

            }
        },
    });

    // const { registration } = authServices();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    // const newUser = {
    //     email,
    //     username,
    //     password,
    // };
    // try {
    //     const { data } = await registration(newUser);
    //     console.log(data._doc);
    // } catch (err) {
    //     console.log(err.response.data)
    // }
    // };

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>регистрация</h1>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <TextField
                    label="Ваш email"
                    variant="filled"
                    type="email"
                    name="email"
                    fullWidth
                    required
                    style={{ marginBottom: "20px" }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <TextField
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
