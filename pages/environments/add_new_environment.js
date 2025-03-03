import styles from '../../styles/model.module.css';
import { useForm } from 'react-hook-form';
import Api from '../../components/api/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'


export default function Add_new_environment({ closeenv }) {

    const [env, setenv] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = new_env_data => {
        document.body.style.overflow='scroll';
        const uuid = localStorage.getItem("uuid");
        new_env_data.orgUUID = uuid;
        Api.Post_env(new_env_data)
            .then(res => {
                if (res.data.status = "Success") {
                    closeenv(false)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        Api.Env_data()
            .then(res => {
                setenv(res.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const closePopUp=()=>{
        document.body.style.overflow='scroll';
        closeenv(false)
    }
    return (
        <div className={`${styles.container} ${styles.accesstoken_model}`}>
            <div className={styles.body}>
                <div className={styles.model_nav}>
                    <a className={styles.model_close} role="button" onClick={() =>closePopUp()}><img src="/images/close.png" alt='icon' /> </a>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.model_title}>Add New Environment</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.model_label}>Environment Name</label>
                        <input
                            type="text"
                            className={`${styles.model_input} form_control`}
                            name="name"
                            placeholder="Enter a name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className={`${styles.validations} validations`}>This field is required</p>}
                        <label className={styles.model_label}>Type</label>

                        <select
                            name="environmentTypeId"
                            className={styles.model_selection}
                            {...register("environmentTypeId", { required: true, valueAsNumber: true, })}
                        >
                            {errors.environmentTypeId && <p className={`${styles.validations} validations`}>This field is required</p>}
                            {env.map((item, key) =>
                                <option key={key} value={parseInt(item.id)}>{item.name}</option>
                            )}
                        </select>
                        <div className={styles.model_btn}>
                            <button type="button" className={`${styles.model_canel_btn} btn btn-primary`} onClick={() => closePopUp()}>Cancel</button>
                            <button type="submit" className={`${styles.model_save_btn} btn btn-primary`}>Add Environment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}