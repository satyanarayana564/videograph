import styles from '../styles/model.module.css'

export default function Deletewebhook() {
    return (
        <div className={`${styles.model} ${styles.remove_user_modal}`} >
            <div className={styles.model_main}>
            <div className={styles.model_nav}>   
            <h3 className={styles.model_title}>Delete Webhook</h3>
            <a href="" className={styles.model_close} role="button"><img src="close.png"/> </a>
            </div>
          
            <div className={styles.model_removeuser}>
            <h4 className={styles.model_removeusername}>Are you sure you want to delete this Webhook?</h4>
            <p className={styles.model_data}>Once deleted,this webhook will no longer be available and the action cannot be undone.</p>
            </div>
            <div className={styles.model_btn}>
            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`}>Cancel</button>
            <button type="button" className={`${styles.model_save_btn} btn btn-primary`}>Yes, delete</button>
            </div>
            </div>
        </div>
        )
        }