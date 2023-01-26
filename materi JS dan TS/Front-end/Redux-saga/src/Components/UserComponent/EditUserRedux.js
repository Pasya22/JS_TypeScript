import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { updateUsers } from '../../Redux/Actions/reducerAction';

const EditUserRedux = ({data}) => {

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const [DataUser, setDataUser] = useState({
        idUser : data.idUser,
        username : data.username,
        passwords : data.passwords
    })

    const eventHandler = data => event => {
        setDataUser({...DataUser, [data] : event.target.value});

        console.log(DataUser)
    }

    const editdata = (e) => {
        e.preventDefault();
        console.log(DataUser)
        dispatch(updateUsers(DataUser))
        .then(() => {
            navigate('/userredux')
        })
        .catch(e => {
            alert(e)
        })
    }

    return (
        <div>
            <form class="row g-3">
                <div class="col-12">
                    <label for="username" class="form-label">idUser</label>
                    <input type="text" class="form-control" id="idUser" value={DataUser.idUser} onChange={eventHandler('idUser')} />
                    {/* <input type="text" class="form-control" id="username" value={DataUser.username} onChange={eventHandler('username')} /> */}
                </div>
                <div class="col-12">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" value={DataUser.username} onChange={eventHandler('username')} />
                </div>
                <div class="col-12">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="passwords" value={DataUser.passwords} onChange={eventHandler('password')} />
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-outline-primary mx-1" onClick={editdata}>Submit</button>
                    <button type="reset" class="btn btn-outline-secondary mx-1">Reset</button>
                </div>
            </form>
        </div>
    )
}

export default EditUserRedux
