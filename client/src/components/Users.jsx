import React, { useState,useEffect } from 'react';
import UserCard from './UserCard';
import Pagination from './Pagination';
import { getUsers,getUserFriends,getUserFriends2  } from '../services/auth';



const Users = (props) => {

    let page = 1;
    const [users,setUsers] = useState({});
    var user =  props?.location?.state?.user;
    var topText = props?.location?.state?.topText ? props?.location?.state?.topText : 'All users';
    // console.log(user,topText);

    let level =1;
    if(props?.location?.pathname === '/friends'){
        level =2;
        if(!user){
            props.history.push('/');
        }
    }
    else if(props?.location?.pathname === '/friends2'){
        level =3;
        if(!user){
            props.history.push('/');
        }
        
    }else{
        page =  props?.location?.state?.page;
    }
    
    useEffect(() => {
        (async () => {
            let data = {};
            if(level === 1){
                data = await getUsers(page);
            }
            else if(level === 2 && user){
                data = await getUserFriends(user.id);
            }
            else if(level === 3 && user){
                data = await getUserFriends2(user.id);
            }

            setUsers(data);
        })();

        return () => {
            setUsers(null);
        }
    },[user,page]);





    return (
        
        users ? ( users.rowCount > 0 ? ( level === 1 ?
                (<div className="container" style={{maxWidth:"500px"}}>
                    <h3 className="pt-5">{topText}</h3>
                    <div>
                        <UserCard users={users.data} level={level} />
                    </div>
                    <div>
                        <Pagination page={users.page} totalPage={users.totalPage} />
                    </div>
                </div>)
                : (
                    <div className="container" style={{maxWidth:"500px"}}>
                        <h3 className="pt-5">{topText}</h3>
                        <div>
                            <UserCard users={users.data} level={level} />
                        </div>
                    </div>
                )
            ) 
            : ( <div className="container" style={{maxWidth:"500px"}}>
                <h3 className="pt-5">{topText}</h3>
                <div>Sorry! No user found</div>
            </div>)
        ) 
        : (<div>Loading...</div>)
    );
}

export default Users;