import React from 'react';
import  { Link } from 'react-router-dom';


const UserCard =  ({users,level}) => {

    return(
        <div className="row">
            {users.map((user,i) => 
                level === 1 ? (
                <div key={i} className="col-4 pt-2 pb-3 px-1">
                    <div className="usercards text-center py-2">
                        <img src={user.avatar} width={"70%"} alt={"user image"} />
                        <div className="mt-2 name px-2">{user.firstName + ' '+user.lastName}</div>
                        <div className="mt-2 mybtn mx-2 mb-2">
                            <Link to={{ pathname: '/friends', state: { user,'topText':`${user.firstName}'s Friends` } }}>Friends</Link>
                        </div>
                        <div className="mt-2 mybtn mx-2 mb-2">
                            <Link to={{ pathname: '/friends2', state: { user,'topText':`${user.firstName}'s friends Friends` } }}>Friends friends</Link>
                        </div>
                    </div>
                </div>
                ) :
                (<div key={i} className="col-4 pt-2 pb-3 px-1">
                    <div className="usercards text-center py-2">
                        <img src={user.avatar} width={"70%"} />
                        <div className="mt-2 name px-2">{user.firstName + ' '+user.lastName}</div>
                    </div>
                </div>)
            )}
        </div>
    );
};


export default UserCard;