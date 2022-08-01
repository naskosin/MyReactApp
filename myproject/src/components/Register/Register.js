import styles from "./Register.module.css";
import * as authService from "../../services/authService";
import { isNotAuth } from "../../guards/isNotAuth";
import { useValidateHandler } from "../../hooks/useAuthValidator";



import { useAuthContext} from "../../contexts/AuthContext";


import { useNotifyContext } from "../../contexts/NotifyContext";

const Register = () => {
  const initialState  = { email: "", password: "", rePassword: "", form: true };
 const { login } = useAuthContext();
 const { errorNotification, notification } = useNotifyContext();
const [error, setError, isFormValid] = useValidateHandler(initialState);
  
  const onRegister = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");
    let rePassword = formData.get("rePassword");
    if (password === rePassword) {
authService
        .register(email, password)
        .then((regData) => {
     login(regData);
        })
        .catch((err) => {
          notification(err);
        });
    } else {
      notification("Error rePassword")
     
    }

 };
  return (
    <section id="register-container" className={styles.registercontainer}>
      <div className={styles.registercontainerinfo}>
        <img
          src="MyReactApp/assets/Ryuki-Spearhead-80S.jpeg"
          alt=""
        />

        <form
            onSubmit={onRegister}
          method="POST"
          className={styles.containertext}
        >
          <h2>Register</h2>
          <p className={styles.paragraph}>Register to get ideas and view the latest masterpieces.</p>

          <label for="username">Username:</label>
          <input type="text" id="username" placeholder="ivan_00" name="email" onBlur={setError} 
          className={error.email !== "Filled" && error.email ? styles.inputerror : styles.input}/>
          {error.email !== "Filled" && error.email ? <p className={styles.errorParagraph}>{error.email}</p> : ""}
          
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="*****"
            name="password"
            onBlur={setError}
            className={error.password !== "Filled" && error.password ? styles.inputerror : styles.input}
          />
 {error.password !== "Filled" && error.password ? <p className={styles.errorParagraph} >{error.password}</p> : ""}

          <label for="re-password">Repeat password:</label>
          <input
            type="password"
            id="rePassword"
            placeholder="*****"
            name="rePassword"
            onBlur={setError}
            className={error.rePassword !== "Filled" && error.email.rePassword ? styles.inputerror : styles.input}
          />
 {error.rePassword !== "Filled" && error.email.rePassword ? <p className={styles.errorParagraph} >{error.rePassword}</p> : ""}

          <button disabled={!isFormValid} className= {styles.button} >Register</button>
          <div className={styles.cardnoaccount}>
            <p className={styles.paragraph}>
              Already have an account?<a href="/login">Sign in</a> 
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default isNotAuth(Register) ;
