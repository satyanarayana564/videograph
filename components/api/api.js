import axios from "axios";
let PROFILE_LINK = process.env.VG_PROFILE_SERVICE_API;
const PROFILE_BASE_URL = () => PROFILE_LINK;

let VIDEO_LINK = process.env.VG_VEDIO_SERVICE_API;
const VIDEO_BASE_URL = () => VIDEO_LINK;

let BILLING_LINK = process.env.VG_BILLING_SERVICE_API;
const BILLING_BASE_URL = () => BILLING_LINK;

let DATA_LINK = process.env.VG_DATA_SERVICE_API;
const DATA_BASE_URL = () => DATA_LINK;

export const SignIn_Data = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/authenticate`
}
export const Sign_up = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/signup`;
};
export const Create_user_account = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users`;
};
//organization
export const Edit_organisation_name = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations?time=${CurrentDate}`;
};
export const Newmember_invite = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/invite?time=${CurrentDate}`;
};
export const get_roles = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/roles?time=${CurrentDate}`
}
export const Remove_user = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/users?time=${CurrentDate}`
};
export const get_organization = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/users?time=${CurrentDate}`
};
export const editted_data = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}&?time=${CurrentDate}`
};
//Billing
export const list_billing_plans = () => {
    return `${BILLING_BASE_URL()}/services/api/v1/plans?time=${CurrentDate}`
}
export const org_list_billing_plans = () => {
    return `${BILLING_BASE_URL()}/services/api/v1/${uuid}/plans?time=${CurrentDate}`
}
export const list_org_subscriptions = () => {
    return `${BILLING_BASE_URL()}/services/api/v1/${uuid}/subscriptions?time=${CurrentDate}`
}
export const get_account_info = () => {
    return `${BILLING_BASE_URL()}/services/api/v1/${uuid}/account?time=${CurrentDate}`
}
export const payment_history = () => {
    return `${BILLING_BASE_URL()}/services/api/v1/${uuid}/payment/history?time=${CurrentDate}`
}
//wbhook
export const Create_webhook = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks?time=${CurrentDate}`;
};
export const get_webhook = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks?organizationId=${uuid}&time=${CurrentDate}`;
};
export const delete_webhook = (del_webhook) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks/${del_webhook}?time=${CurrentDate}`
}
//access token
export const Create_aaccess_token = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens?time=${CurrentDate}`;
};
export const get_access_token = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens?organizationId=${uuid}&includeRevoked=true&time=${CurrentDate}`;
}
export const revoke_acceesstoken = (del) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens/${del}?time=${CurrentDate}`
}
export const editAccessToken = (accessId) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens/${accessId}?time=${CurrentDate}`
}
//signin keys
export const Create_signin_keys = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/signingkeys?time=${CurrentDate}`;
};
export const get_signin_keys = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/signingkeys?organizationId=${uuid}&time=${CurrentDate}`
};
export const get_product = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/product-types?time=${CurrentDate}`
};
//used in wbhook,access token,,signin keys
export const get_environment_types = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environment-types?time=${CurrentDate}`
}
//environment
export const get_environment = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environments?organizationId=${localStorage.getItem("uuid")}&time=${CurrentDate}`
}
export const get_new_env = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environment-types?time=${CurrentDate}`
}
export const post_env = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environments?time=${CurrentDate}`
}
export const update_env = (data) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environments/${data}?time=${CurrentDate}`
}
//video 
export const video_url = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents?time=${CurrentDate}`
}
export const getList_videos = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents?time=${CurrentDate}`
}
export const post_selected = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/users?time=${CurrentDate}`
}
export const get_video_data = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem('videoId')}?time=${CurrentDate}`
}
//direct upload

export const post_direct_video = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/uploads?time=${CurrentDate}`
}
export const get_direct_video_data = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/uploads?time=${CurrentDate}`
}
//account
export const create_new_organization = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations?time=${CurrentDate}`
}
export const update_user = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/${orgid}?time=${CurrentDate}`
}
export const change_paswrd = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/${user_id}/change-password?time=${CurrentDate}`
}
// videos -> overview
export const delete_asset = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem("videoId")}?time=${CurrentDate}`
}
// videos -> thumbnails
export const create_thumbnail = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem("videoId")}/thumbnails?time=${CurrentDate}`
}
//others
export const meta_update = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${asset_id}?time=${CurrentDate}`
}
export const post_emailtoResetPswd = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/reset-password-request?time=${CurrentDate}`
}
export const password_reset = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/reset-password?time=${CurrentDate}`
}
export const delSigningKey = (id) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/signingkeys/${id}?time=${CurrentDate}`
}
//statistics
export const usage_statistics = (env, toDate, fromDate) => {
    if(fromDate==undefined) {
        return `${DATA_BASE_URL()}/services/api/v1/usage?environmentId=${env}&from=${pastdate}&to=${CurrentDate}&interval=1d&time=${CurrentDate}`
    }
    else{
        return `${DATA_BASE_URL()}/services/api/v1/usage?environmentId=${env}&from=${fromDate}&to=${toDate}&interval=1d&time=${CurrentDate}`;
        
    }
    
}
export const views_statistics = (env, toDate, fromDate) => {
    if (fromDate == undefined) {
        return `${DATA_BASE_URL()}/services/api/v1/views?environmentId=${env}&from=${new Date().setDate(new Date().getDate() - 7)}&to=${CurrentDate}&time=${CurrentDate}`
    } else {
        return `${DATA_BASE_URL()}/services/api/v1/views?environmentId=${env}&from=${fromDate}&to=${toDate}&time=${CurrentDate}`
    }
}


export const realtime_views = (env, fromDate, interval) => {
    return `${DATA_BASE_URL()}/services/api/v1/realtime_views?environmentId=${env}&from=${fromDate}&to=${CurrentDate}&interval=${interval}`
}

let user_id;
if (process.browser) {
    user_id = localStorage.getItem("userID")

}
const orgid = user_id

let token;
if (process.browser) {
    token = localStorage.getItem("Jwt-token");
}


let uuid_token;
if (process.browser) {
    uuid_token = localStorage.getItem("uuid");
}
const uuid = uuid_token;

let headers = {
    'Authorization': `Bearer ${token}`
};

let Env_uuid;
if (process.browser) {
    Env_uuid = localStorage.getItem("envuuid");
}
const envuuid = Env_uuid;

let asset_id;
if (process.browser) {
    asset_id = localStorage.getItem("videoId");
}
const assetid = asset_id;

let upload_id;
if (process.browser) {
    upload_id = localStorage.getItem("upload_id");
}
const uploadid = upload_id;

let current_date;
if (process.browser) {
    current_date = Date.now();
}
const CurrentDate = current_date;
let sevendaybeforedate;
if(process.browser){
   sevendaybeforedate = new Date().setDate(new Date().getDate() - 7);
}
const pastdate = sevendaybeforedate;
const Api = {
    Sign_up_data: (login_details) =>
        axios({
            method: 'POST',
            url: Sign_up(),
            data: login_details,
        }),//this is called signup
    SignIn_details: (signin_details) =>
        axios({
            method: 'POST',
            url: SignIn_Data(),
            data: signin_details,
        }),//this is called in signin
    Reset_pswEmail: (email) =>
        axios({
            method: 'POST',
            data: email,
            url: post_emailtoResetPswd(),
            headers: headers
        }),
    Reset_password: (paswrd) =>
        axios({
            method: 'POST',
            data: paswrd,
            url: password_reset(),
            headers: headers
        }),
    Create_account_data: (createaccount_data, id) =>
        axios({
            method: 'POST',
            url: Create_user_account(),
            data: createaccount_data,
        }),
    Get_roles_data: () =>
        axios({
            method: 'GET',
            url: get_roles(),
            headers: headers,
        }),//this is called in newmember_invite

    Get_organization_data: () =>
        axios({
            method: 'GET',
            url: get_organization(),
            headers: headers,
        }),//this is calleed in organization
    Remove_user_data: (data) =>
        axios({
            method: 'DELETE',
            url: Remove_user(),
            data: data,
            headers: headers,
        }),
    Get_environment_types_data: () =>
        axios({
            method: 'GET',
            url: get_environment_types(),
            headers: headers,
        }),// this is called where ever environments are there
    Edit_organisation_name_data: (organization_data) =>
        axios({
            method: 'POST',
            url: Edit_organisation_name(),
            data: organization_data,
            headers: headers,
        }),//this is called in edit_organisation_name
    Newmember_invite_data: (admin_invite_code) =>
        axios({
            method: 'POST',
            url: Newmember_invite(),
            data: admin_invite_code,
            headers: headers,
        }),
    Editted_data: (data) =>
        axios({
            method: 'PUT',
            url: editted_data(),
            data: data,
            headers: headers,
        }),
    //access token
    Get_access_token: () =>
        axios({
            method: 'GET',
            url: get_access_token(),
            headers: headers,
        }),
    Create_aaccess_token_data: (access_data) =>
        axios({
            method: 'POST',
            url: Create_aaccess_token(),
            data: access_data,
            headers: headers,
        }),
    Revoke_acceesstoken: (del) =>
        axios({
            method: 'DELETE',
            url: revoke_acceesstoken(del),
            data: del,
            headers: headers,
        }),//revoke accesstoken
    //webhook
    Get_webhook: () =>
        axios({
            method: 'GET',
            url: get_webhook(),
            headers: headers,
        }),
    Create_webhook_data: (webhook_data) =>
        axios({
            method: 'POST',
            url: Create_webhook(),
            data: webhook_data,
            headers: headers,
        }),
    Delete_webhook: (del_webhook) =>
        axios({
            method: 'DELETE',
            url: delete_webhook(del_webhook),
            data: del_webhook,
            headers: headers,
        }),//delete webhook
    //signin key
    Get_sigin_keys: () =>
        axios({
            method: 'GET',
            url: get_signin_keys(),
            headers: headers,
        }),
    Create_signin_keys_data: (signin_key) =>
        axios({
            method: 'POST',
            url: Create_signin_keys(),
            data: signin_key,
            headers: headers,
        }),
    Delete_key_signing: (id) =>
        axios({
            method: 'DELETE',
            url: delSigningKey(id),
            headers: headers
        }),
    Get_product_data: () =>
        axios({
            method: 'GET',
            url: get_product(),
            headers: headers,
        }),//create_signing_key
    //videos
    Video_list: (data) =>
        axios({
            method: 'GET',
            url: getList_videos(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${data}`
            },
        }),
    post_video: (video_url_data) =>
        axios({
            method: 'POST',
            data: video_url_data,
            url: video_url(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }
        }),
    //environments
    Get_env_data: () =>
        axios({
            method: 'GET',
            url: get_environment(),
            headers: headers,
        }),
    Env_data: () =>
        axios({
            method: 'GET',
            url: get_new_env(),
            headers: headers,
        }),
    Post_env: (new_env_data) =>
        axios({
            method: 'POST',
            data: new_env_data,
            url: post_env(),
            headers: headers,
        }),
    Update_env: (dev_data, data) =>
        axios({
            method: 'PUT',
            data: dev_data,
            url: update_env(data),
            headers: { 'Authorization': `Bearer ${token}` }
        }),
    //direct upload
    Direct_upload_post: (direct_video_upload) =>
        axios({
            method: 'POST',
            data: direct_video_upload,
            url: post_direct_video(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${envuuid}`
            }

        }),
    Direct_upload_get_data: (data) =>
        axios({
            method: 'GET',
            url: get_direct_video_data(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${data}`
            }
        }),//called in videos
    //selected
    Selected_option: (data) =>
        axios({
            method: 'POST',
            data: data,
            url: post_selected(),
            headers: headers
        }),
    Get_Env_item: (ast_id) =>
        axios({
            method: 'GET',
            url: get_video_data(ast_id),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${envuuid}`
            }
        }),
    //account
    Create_new_organization: (new_org_name) =>
        axios({
            method: 'POST',
            url: create_new_organization(),
            data: new_org_name,
            headers: headers
        }),
    User_update: (update_user_data) =>
        axios({
            method: "PUT",
            url: update_user(),
            data: update_user_data,
            headers: headers
        }),
    Get_User_update: () =>
        axios({
            method: "GET",
            url: update_user(),
            headers: headers
        }),
    Password_Change: (paswrd) =>
        axios({
            method: 'POST',
            data: paswrd,
            url: change_paswrd(),
            headers: headers
        }),
    //thumbnails
    Create_thumbnail: (thumbnail)=> 
        axios({
            method: 'POST',
            data: thumbnail,
            url: create_thumbnail(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${envuuid}`
            }
        }),
    //others
    Meta_tag: (data) =>
        axios({
            method: 'PUT',
            data: data,
            url: meta_update(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${envuuid}`
            }
        }),
    //billing
    List_billing_plans: () =>
        axios({
            method: 'GET',
            url: list_billing_plans(),
            headers: headers,
        }),
    Org_list_billing_plans: () =>
        axios({
            method: "GET",
            url: org_list_billing_plans(),
            headers: headers,
        }),
    List_org_subscriptions: () =>
        axios({
            method: 'GET',
            url: list_org_subscriptions(),
            headers: headers,
        }),
    Get_account_info: () =>
        axios({
            method: 'GET',
            url: get_account_info(),
            headers: headers,
        }),

    Payment_history: () =>
        axios({
            method: 'GET',
            url: payment_history(),
            headers: headers,
        }),

    //Statistics
    Usage_statistics: (env, toDate, fromDate) =>
        axios({
            method: 'GET',
            url: usage_statistics(env, toDate, fromDate),
            headers: headers,
        }),
    Views_statistics: (env, toDate, fromDate) =>
        axios({
            method: 'GET',
            url: views_statistics(env, toDate, fromDate),
            headers: headers,
        }),
    EditApiAccessToken: (value, accessId) =>
        axios({
            method: 'PUT',
            data: value,
            url: editAccessToken(accessId),
            headers: headers
        }),
    Realtime_views: (env, fromDate, interval) =>
        axios({
            method: 'GET',
            url: realtime_views(env, fromDate, interval),
            headers: headers,
        }),
}
export default Api

