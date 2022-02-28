import styles from '../styles/Login.module.css';
import { useForm } from "react-hook-form";
import Api from './api/api';

export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = login_details => {
    Api.Sign_up_data(login_details)
  }
  return (
    <div className={styles.wrapper_signup}>
      <main className={styles.main_signup}>
        <h1 className={styles.logo_title}>
          Videograph
        </h1>

        <div className={styles.signup_area}>
          <h3 className={styles.signup_title}>
            create your Videograph account
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Enter your email address"
              name="login"
              className={`${styles.signup_input} form_control`}
              {...register("email", { required: true })}
            />
            {errors.email && <p className={'validations'}>This field is required</p>}

            <a href={'Create_account'}><button type='submit' className={`${styles.signup_btn} btn btn-primary`}>Sign Up</button></a>


          </form>
          <h4 className={styles.already_account}>Already have an account?</h4>
          <a type='button' className={styles.signin_link}>Sign in</a>
        </div>
      </main>
    </div>
  )
}