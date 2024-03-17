import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '../store';
import { UserSignInForm } from '../../pages/Login';
import axios from 'axios';
import { ACCESS_TOKEN, ACCESS_TOKEN_CYBERSOFT, USER_LOGIN, getStorage, getStorageJson, saveStorage, saveStorageJson, setCookie } from '../../util/config';
import { history } from '../..';

export interface UserLogin {
    email:string,
    accessToken:string
}

export interface UserReducerState {
    userLogin : UserLogin | null
}

const initialState: UserReducerState  = {
    userLogin : getStorageJson(USER_LOGIN)
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction:(state,action:PayloadAction<UserLogin>) => {
        state.userLogin = action.payload
    }
  }
});

export const {loginAction} = userReducer.actions

export default userReducer.reducer


// ------------------------- action async -----------

export const signinActionApi = (userLoginForm: UserSignInForm) => {

    return async (dispatch:AppDispatch)=>{
        const res = await axios({
            url:'https://shop.cyberlearn.vn/api/Users/signin',
            method:'POST',
            data:userLoginForm
        })
        //Sau khi có dữ liệu từ api trả về thì đưa dữ liệu lên store
        const action:PayloadAction<UserLogin> = loginAction(res.data.content)
        dispatch(action)
        //lưu localstorage
        saveStorageJson(USER_LOGIN,res.data.content)
        //Đối với việc lưu primitive value vào store thì không dùng JSON.stringify vì nó sẽ sinh thêm ''
        // 'accessToken' => ''accessToken''
        saveStorage(ACCESS_TOKEN,res.data.content.accessToken)

        //Lưu dữ liệu vào cookie
        setCookie(ACCESS_TOKEN, res.data.content.accessToken)
    }
}

//cấu hình interceptor
export const http = axios.create({
    baseURL: 'https://shop.cyberlearn.vn/api',
    timeout: 30000
})

//request: tất cả các dữ liệu gửi về server
http.interceptors.response.use((config) => {
    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${getStorage(ACCESS_TOKEN)}`,
        'TokenCyberSoft': ACCESS_TOKEN_CYBERSOFT
    }
    return config
}, err => {
    return Promise.reject(err)
})

//response: tất cả dữ liệu nhận từ server
http.interceptors.response.use((res) => {
    return res
}, err  => {
    //xử lý khi lỗi
    if (err.response?.status === 404) {

    }
    else if (err.response?.status === 400) {

    }
    else if (err.response?.status === 401) {
        alert("đăng nhập để vào trang này!")
        history.push('/login')
        //return Promise.reject(err)

    }
    else if (err.response?.status === 403) {

    }
    return Promise.reject(err)
})