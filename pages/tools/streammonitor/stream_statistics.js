import styles from '../../../styles/stream_statistics.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Premiumfeatures_monitor from '../../../components/dialog/Premiumfeatures_monitor';
import Activities from '../../../components/dialog/activities';
import Delete_stream from '../../../components/dialog/Delete_stream';
import Layout from '../../../components/common/layout';



export default function Stream_statistics({setmonitoring}) {
    const[openpremium,setpremium]=useState(false);
    const[open_activities,set_activities]=useState(false);
    const[open_delete_stream,set_delete_stream]=useState(false);
    return (
        <div className={styles.container}>
            {/* <div>
                <Navbar/>
            </div> */}
            <div className={styles.stream_statistics}>
            <div className={styles.padding}>
                <div className={styles.stream_list}>
                    <Link href='/tools/streammonitor/stream_monitor'><a>Stream List</a></Link>
                    <p> &gt; Asianet-Roku </p>
                </div>
                <div className={styles.header}>
                    {/* <img/> */}
                    <img src="/images/iconionic-ios-stats@2x.png" alt="ios-stats"></img>
                    <h2>
                        Asianet-Roku Statistics
                    </h2>
                </div>
                <div className={styles.border_bottom}>

                    <div className={styles.stream_url_check}>
                        <div className={styles.stream_url}>
                            <h4>    
                                Stream URL
                            </h4>
                            <div className={styles.copyurl}>
                            <h4>http://akamaiaus1.akamaized.net</h4>
                            <img src="/images/copy.png" alt="copy"></img>
                            </div>
                        </div>
                        <div className={styles.stream_check}>
                            <h4>
                                Check Stream:
                            </h4>
                            <select>
                                <option >Every 6 months</option>
                            </select>

                        </div>
                    </div>
                    <div className={styles.functional_buttons}>
                        <div className={styles.premium_features}>
                            <button onClick={()=>setpremium(true)} className='btn'>Enable Premium Features</button>
                            <img src="/images/unionblue.png" alt="unionblue"></img>
                        </div>
                        <div className={styles.actions}>
                            <button onClick={()=>set_activities(true)} className='btn'>Activities</button>
                            <img src="/images/iconawesome-file-alt.png" alt="file"></img>
                        </div>
                        <div className={styles.delete_stream}>
                            <button onClick={()=>set_delete_stream(true)} className='btn'>Delete Stream</button>
                            <img src="/images/iconmaterial-delete.png" alt="delete"></img>
                        </div>
                    </div>

                </div>
                <div className={styles.content}>

                    <div className={styles.Utime_check}>
                        <div className={styles.uptime_header}>
                            <h3>Uptime check <span>(Last Checked:6 mins)</span></h3>

                        </div>
                        <div className={styles.Preview}>
                            <div className={styles.image_preview}>Image Preview <input type="checkbox" className={styles.input}></input></div>
                            <div className={styles.time_line}>
                                <label>Time Line:</label>
                                <select>
                                    <option >12 hours</option>
                                </select>
                            </div>

                        </div>
                        <div className={styles.scte_markers}></div>
                    </div>

                    {/* <div></div> for preview pi graph*/}
                    <div className={styles.scte}>
                        <div className={styles.scte_header}>
                            <h3>SCTE -35/104</h3>
                        </div>
                        <div className={styles.scte_markers}>
                            <div className={styles.text_align}>
                                <h4>SCTE-35/104 Markers</h4>
                                <p>Detects the markers in the strem.Get details info such as duration and the time line at which the marker occur in the stream.</p>
                                <a onClick={()=>setpremium(true)}>Enable Premium Features</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.master_manifest}>
                        <div className={styles.master_manifest_header}>
                            <h3>Master Manifest<span>(Last Checked:6mins)</span></h3>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Playing</th>
                                    <th>URL Validated</th>
                                    <th>Sent Stream Request</th>
                                    <th>Received Full Stream info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Asianet-Roku</td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.child_manifest}>
                        <div className={styles.child_manifest_header}>
                            <h3>Child Manifest<span>(Last Checked:6mins)</span></h3>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Resolution</th>
                                    <th>Playing</th>
                                    <th>Manifest Bitrate</th>
                                    <th>URL Validated</th>
                                    <th>Sent Stream Request</th>
                                    <th>Received Full Stream info</th>
                                    <th>Check for Frame freeze</th>
                                    <th>Check for Black Frame</th>
                                    <th>Check for Audio Loss</th>
                                    <th>Detailed Stream Info</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Stream1</td>
                                    <td>360p</td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td>30 kbps</td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td colSpan="4" rowSpan="4">Advanced stream monitoring.<br></br>Enable Frame Freeze detection,Black frame detection,<br></br>Audio loss detection and detialed stream info.<br></br><a onClick={()=>setpremium(true)}>Enable Premium Features</a></td>
                                </tr>
                                <tr>
                                    <td>Stream2</td>
                                    <td>480p</td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td>60 kbps</td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    
                                </tr>
                                <tr>
                                    <td>Stream3</td>
                                    <td>720p</td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td>90 kbps</td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                   
                                </tr>
                                <tr>
                                    <td>Stream4</td>
                                    <td>1080p</td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td>120 kbps</td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.track_pts}>
                        <div className={styles.track_pts_header}>
                            <h3>Track PTS</h3>
                        </div>
                        <div className={styles.timestamp}>
                            <div className={styles.timestamp_details}>
                                <h4>Track Presentation Timestamp(PTS)</h4>
                                <p>Early track PTS of streamS for any location.</p>
                                <p>For optional monitoring choose a location that is close to stream origin.</p>
                                <a onClick={()=>setpremium(true)}>Enable Premium Features</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.geo_locations}>
                        <div className={styles.geo_loacations_header}>
                            <h3>Geo Locations<span>(Last Checked:6 mins)</span></h3>
                        </div>
                        <div className={styles.select_loaction}>
                            <label>Change Location:</label>
                            <select>
                                <option>7 Selected</option>
                            </select>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Stream</th>
                                    <th>United states</th>
                                    <th>Australia</th>
                                    <th>India</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Asianet-Roku</td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                    <td><img src="/images/iconmaterial-error.png" alt="error"></img></td>
                                    <td><img src="/images/check-circle.png" alt="check-circle"></img></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
            {openpremium && < Premiumfeatures_monitor closepremium={setpremium}/>}
            {open_activities && <Activities closeactivities={set_activities}/>} 
            {open_delete_stream && <Delete_stream close_delete_stream={set_delete_stream}/>}
        </div>
    )
}
Stream_statistics.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
}