import axios from "axios";

axios.defaults.baseURL = 'https://api-django-walkthrough-a704359edacf.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();