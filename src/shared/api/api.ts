import axios from 'axios';
import { KEY_USER_IN_STORAGE } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: 'http://localhost:3011/api/',
    headers: {
        authorization: `Bearer ${localStorage.getItem(KEY_USER_IN_STORAGE) || ''}`,
    },
})
