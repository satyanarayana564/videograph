import { Fragment } from "react";
import styles from '../../../styles/webhooks.module.css';

function Webhooks() {
    return (
        <Fragment>
            <section className={styles.wrapper_webhooks}>
                <div className={styles.head}>
                    <p>Use Webhooks to get real time updates on any events that happens outside of an API request cycle.
                        Webhooks can be configured for any environment and notifications will be sent for all events for the environment.
                    </p>
                    
                    <button className="btn">Create new Webhook</button>

                </div>
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>URL to Notify</th>
                                <th>Signing Secret</th>
                                <th>Environment</th>
                                <th>Created</th>
                                <th>Created by</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>https://example.com/videograp-endpoint</td>
                                <td>f54fvca1kr8ama7bfjueamrbo45v4gm</td>
                                <td>Development</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>Active</td>
                                <td>
                                    <input type="checkbox" className={styles.input}></input>
                                    <img src="Icon material-delete.png"></img>
                                </td>
                            </tr>
                            <tr>
                                <td>https://example.com/videograp-endpoint</td>
                                <td>f54fvca1kr8ama7bfjueamrbo45v4gm</td>
                                <td>Production</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>Disabled</td>
                                <td>
                                    <input type="checkbox" className={styles.input}></input>
                                    <img src="Icon material-delete.png"></img>
                                </td>
                            </tr>
                            <tr>
                                <td>https://example.com/videograp-endpoint</td>
                                <td>f54fvca1kr8ama7bfjueamrbo45v4gm</td>
                                <td>UAT</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>Disabled</td>
                                <td>
                                    <input type="checkbox" className={styles.input}></input>
                                    <img src="Icon material-delete.png"></img>
                                </td>
                            </tr>
                            <tr>
                                <td>https://example.com/videograp-endpoint</td>
                                <td>f54fvca1kr8ama7bfjueamrbo45v4gm</td>
                                <td>UAT</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>Active</td>
                                <td>
                                    <input type="checkbox" className={styles.input}></input>
                                    <img src="Icon material-delete.png"></img>
                                </td>
                            </tr>
                            <tr>
                                <td>https://example.com/videograp-endpoint</td>
                                <td>f54fvca1kr8ama7bfjueamrbo45v4gm</td>
                                <td>Development</td>
                                <td>10/21/2021</td>
                                <td>anil@yupptv.com</td>
                                <td>Active</td>
                                <td>
                                    <input type="checkbox" className={styles.input}></input>
                                    <img src="Icon material-delete.png"></img>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </Fragment>
    )
}
export default Webhooks;