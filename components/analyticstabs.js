import { useState } from "react"
import styles from '../styles/tabs.module.css';
import Metrics from "./analytics_tabs/metrics";
import Overview from "./analytics_tabs/overview";

function Analytics_tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className={styles.wrapper_tabs}>
            <div className={styles.bloc_tabs}>
                <button
                    className={toggleState === 1 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(1)}
                >
                    <span>Overview</span>
                </button>
                <button
                    className={toggleState === 2 ? `${styles.tabs_item} ${styles.active_tabs}` : `${styles.tabs_item}`}
                    onClick={() => toggleTab(2)}
                >
                    <span>Video Metrics</span>
                </button>
               

            </div>

            <div className={styles.content_tabs_area}>
                <div
                    className={toggleState === 1 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >
                    {toggleState==1 ? <Overview/>:null }
                   
                </div>

                <div
                    className={toggleState === 2 ? `${styles.content_tabs} ${styles.active_content}` : `${styles.content_tabs}`}
                >
                    {toggleState==2 ? <Metrics/>:null}
                    
                </div>
            </div>
        </div>
    )
}

export default Analytics_tabs;