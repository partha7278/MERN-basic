import http from './httpService';
import { serverUrl } from '../config.json';
import { toast } from 'react-toastify';

const apiEndPoint = serverUrl + '/api';


export async function getUsers(page=1){
    try{
        const  { data } = await http.post(apiEndPoint + '/users' , {page});
        return data;
    }catch(err){
        toast.error('something went wrong');
        return null;
    }
}



export async function getUserFriends(user_id){
    try{
        const  { data } = await http.get(apiEndPoint + '/users/friends/'+user_id , {});
        return data;
    }catch(err){
        toast.error('something went wrong');
        return null;
    }
}



export async function getUserFriends2(user_id){
    try{
        const  { data } = await http.get(apiEndPoint + '/users/friends2/'+user_id , {});
        return data;
    }catch(err){
        toast.error('something went wrong');
        return null;
    }
}

