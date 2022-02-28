import styles from '../../styles/model.module.css'
import { useForm } from 'react-hook-form';
import Api from '../../pages/api/api';

export default function Newmember_invite({ closeModel }) {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = admin_invite_code => {
    Api.Newmember_invite_data(admin_invite_code)
  }
  
  return (
    <div className={`${styles.model} ${styles.Newmember}`}>
      <div className={styles.model_main}>
        <div className={styles.model_nav}>
          <h3 className={styles.model_title}>Invite New Member</h3>
          <a className={styles.model_close} role="button" onClick={() => closeModel(false)} ><img src="Images/close.png" alt='icon' /> </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <label className={styles.model_label}>Email Address</label>
          <input
            type="email"
            className={`${styles.model_input} form_control`}
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className={`${styles.validations} validations`}>This field is required</p>}

          <div>
            <label className={styles.model_label}>Role</label>
            <select
              name="roleId"
              className={styles.model_selection}
              {...register("roleId", { required: true })}
            >
              <option value={1} >1</option>
              <option value={2}>admin</option>
              <option value={3}>Developer </option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className={styles.model_btn}>
            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`} >Send Invitation</button>
          </div>
        </form>
      </div>
    </div>
  )
}