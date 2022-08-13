import styles from "./Login.module.css";
import * as authService from "../../services/authService";
import { useNotifyContext } from "../../contexts/NotifyContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useValidateHandler } from "../../hooks/useAuthValidator";
import { useNavigate } from "react-router-dom";


const Login = () => {



  const { login } = useAuthContext();
  const { errorNotification, notification } = useNotifyContext();

  const initialState = { email: "", password: "", rePassword: "Filled" };
  const [error, setError, isFormValid] = useValidateHandler(initialState);

  const navigate = useNavigate();





  const onLogin = (e) => {
    e.preventDefault();
  
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");

    let password = formData.get("password");

    authService
      .login(email, password)
      .then((authData) => {
        login(authData);
        console.log(authData);
        navigate("/");
      })
      .catch((err) => {
        notification(err);
        console.log(errorNotification);
      });
  };

  return (
    <section className={styles.logincontainer}>
      <div className={styles.container}>
        <img src="./assets/3.jpg" alt="Loading..." />

        <form onSubmit={onLogin} className={styles.containertext}>
          <h2>Login</h2>
          <p className={styles.paragraph}>Welcome, see the new masterpieces!</p>

          <label htmlFor="uses">Uses:</label>
          <input
            type="text"
            id="uses"
            placeholder="ivan_00"
            name="email"
            onBlur={setError}
            className={
              error.email !== "Filled" && error.email
                ? styles.inputerror
                : styles.input
            }
          />
          {error.email !== "Filled" && error.email ? (
            <p className={styles.errorParagraph} id="errors">{error.email}</p>
          ) : (
            ""
          )}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="*****"
            name="password"
            onBlur={setError}
            className={
              error.password !== "Filled" && error.password
                ? styles.inputerror
                : styles.input
            }
          />
          {error.password !== "Filled" && error.password ? (
            <p className={styles.errorParagraph}>{error.password}</p>
          ) : (
            ""
          )}

          <button disabled={!isFormValid} className={styles.button}>
            Login
          </button>
          <div>
            <p className={styles.paragraph}>
              Don't have an account? <a href="/register">Sign up</a>.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Login;
