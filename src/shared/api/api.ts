import axios from 'axios';
import { KEY_USER_IN_STORAGE } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: `${process.env.BACKEND_URL || 'http://91.186.196.84:3010'}/api/`,
})

$api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(KEY_USER_IN_STORAGE) || ''}`