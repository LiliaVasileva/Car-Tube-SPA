import { get, post } from "./api.js";
import { setUserData, clearUserData } from "../util.js";

export async function login(username, password){
    const {_id, username: resultUsername, accessToken} = await post('/users/login', {username, password});

    setUserData({
            _id,
            username: resultUsername,
            accessToken
        });
}

export async function register(email, password){
    const {_id, email: resultEmail, accessToken} = await post('/users/register', {email, password});

    setUserData(
        {
            _id,
            email: resultEmail,
            accessToken
        }
    );
}

export async function logout(){
    get('/users/logout');
    clearUserData();
}