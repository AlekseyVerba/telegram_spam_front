import axios from 'axios';
import { KEY_USER_IN_STORAGE } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: `${process.env.BACKEND_URL || 'http://localhost:3010'}/api/`,
    headers: {
        authorization: `Bearer ${localStorage.getItem(KEY_USER_IN_STORAGE) || ''}`,
    },
})
