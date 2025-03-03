import styles from '../../styles/videos.module.css';
import Layout from '../../components/common/layout';
import Videodelivery_tabs from '../../components/homepage/videodelivery_tabs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Api from '../../components/api/api';


export default function Video() {
    const [name,setname]=useState([])
    // useEffect(()=>{
    //     titlea()
    // },[])
    // const titlea=()=>{
    //     Api.Get_Env_item()
    //     .then(res=>{
    //         console.log(res.data.data)
    //         setname(res.data.data.title)
    //     })
    // }
 let title;
 if(process.browser){
     title=localStorage.getItem('asset_title')
 }
    return (
        <div className={styles.container}>
            <div className={styles.videosdelivery_assets}>
                <div className={styles.padding}>
                    <div className={styles.header}>
                        <div className={styles.assets}>
                            <Link href="/videos"><a>Video List</a></Link>
                            <p> &gt; {title}</p>
                        </div>
                        <div className={styles.header_asianet}>
                            <img className={styles.icon_stat} src="/images/iconionic-ios-stats@2x.png" alt="ios-stats"></img>
                            <h2>
                                {title}
                                <img className={styles.edit_img} src="/images/iconmaterial-edit.png" alt="edit" /><span> Edit</span>
                            </h2>
                        </div>
                    </div>
                    <div className={styles.close}> <Link href="/videos"><a><img src='/images/close.png' /></a></Link></div>
                    <Videodelivery_tabs />
                </div>
            </div>
        </div>
    )

}
Video.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}