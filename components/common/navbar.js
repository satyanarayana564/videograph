import styles from '../../styles/settings.module.css';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { memo, useContext } from "react";
import Api from '../api/api'
import NextNProgress from "nextjs-progressbar";
import {useRouter} from 'next/router'

function Navbar() {
const router=useRouter()
    let activeState
    if (process.browser) {
        activeState = localStorage.getItem('toggle')
    }

    const [opendropdown, setdropdown] = useState(false);
    const [ownername, setownername] = useState([]);
    const handlelogout = () => {
        window.localStorage.clear();
        document.cookie = 'Jwt-token=;expires=' + new Date().toUTCString()
    }

    useEffect(() => {
        setownername(
            localStorage.getItem("ownername")
        )
    }, [])

    let name;
    let orgnames;
    if (process.browser) {
        name = localStorage.getItem("ownername");
        orgnames = localStorage.getItem("orgName")
    }
    const OrgName = orgnames;
    const ownerName = name;
   
   
    return (
        <div className={styles.container}>
            <div className={styles.containercomponents}>
                <NextNProgress
                    color="#2863eb"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={2}
                    showOnShallow={true}
                />
                {/* <Link href='/'><a className={router.pathname=='/'  ? `${styles.activate}` : ''}><h2>Videograph</h2></a></Link> */}
                <div className={styles.uppercomponents}>
                    <ul>
                         <li className={styles.brand_logo}>
                            <Link href='/'><a className={router.pathname=='/'  ? `${styles.activate}` : ''}><img src={router.pathname=='/environments'? '/images/vg_logo.svg' : '/images/vg_logo.svg'} alt='icon'></img><span className={styles.title}>Videograph</span></a></Link>
                        </li>
                        <li>
                            <Link href="/environments"><a className={router.pathname=='/environments'  ? `${styles.activate}` : ''}><img src={router.pathname=='/environments'? '/images/iconmaterial-home(white).png' : '/images/iconmaterial-home.png'} alt='icon'></img><span>Environments</span></a></Link>
                        </li>
                        <li>
                            <Link href='/videos'><a className={router.pathname=='/videos' || router.pathname=='/videos/video'  ? `${styles.activate}` : ''}><img src={router.pathname=='/videos' || router.pathname=='/videos/video' ? '/images/iconmaterial-video-library(white).png' : '/images/iconmaterial-video-library.png'} alt='icon'></img><span>Videos</span></a></Link>
                        </li>
                        <li>
                            <Link href='/analytics'><a className={router.pathname=='/analytics' ? `${styles.activate}` :''}><img src={router.pathname=='/analytics' ? '/images/iconsimple-googleanalytics.png' : '/images/iconsimple-googleanalytics.png'} alt='icon'></img><span>Analytics</span></a></Link>
                        </li>
                        <li style={opendropdown|| router.pathname=='/tools/streammonitor'|| router.pathname=='/tools/subtitleconverter'? { backgroundColor: "#262b36", color: 'white' } : { backgroundColor: null }} className={styles.tools}>
                            <a className={styles.list_heading} onClick={() => setdropdown(!opendropdown)}><img src={opendropdown ? "/images/iconawesome-tools(white).png" : "/images/iconawesome-tools.png"} alt="icon"></img><span>Tools</span></a>
                            {opendropdown ? <div><ul className={styles.list}>
                                <li><Link href="/tools/streammonitor"><a className={router.pathname=='/tools/streammonitor'? `${styles.activate}`:''}>Stream Monitor</a></Link></li>
                                <li><a>Image Optimization</a></li>
                                <li><Link href="/tools/subtitleconverter"><a className={router.pathname=='/tools/subtitleconverter'? `${styles.activate}`:''}>Subtitle Converter</a></Link></li>
                                <li><a>Video player</a></li>
                                <li><a>Player Validator</a></li>
                            </ul></div> : null}
                        </li>
                    </ul>
                </div>
                <div className={styles.lowercomponents}>
                    <ul>
                        <li>
                            <Link href="/events_logs"><a className={router.pathname=='/events_logs' ? `${styles.activate}` : ''}><img src={router.pathname=='/events_logs' ? "/images/iconawesome-file-alt(white).png" : "/images/iconawesome-file-alt.png"} alt='icon'></img><span>Events & Logs</span></a></Link>
                        </li>
                        <li>
                            <Link href="/"><a className={router.pathname=='/' ? `${styles.activate}` : ''}><img src={router.pathname=='/'? "/images/iconionic-ios-settings.png" : "/images/iconionic-ios-settings.png"} alt='icon'></img><span>Settings</span></a></Link>
                        </li>
                        <li>
                            <Link href="/account"><a><img src={router.pathname=='/account'  ? "/images/iconawesome-user-alt(white).png" : "/images/iconawesome-user-alt.png"} alt='icon'></img><span><p className={router.pathname=='/account' ? `${styles.user_detail} ${styles.activate}` : `${styles.user_detail}`}>{ownername} <br />{OrgName}</p></span></a></Link>
                        </li>
                        <li>
                            <Link href="/signin"><a className={styles.logout} onClick={() => handlelogout()}><img src={ router.pathname=='/signin' ? "/images/iconfeather-log-out.png" : "/images/iconfeather-log-out.png"} alt='icon'></img><span>Logout</span></a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default memo(Navbar);

