import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import UserList from './User/UserList';
import UserEdit from './User/UserEdit';

function Container() {
    const dataProvider=jsonServerProvider('https://jsonplaceholder.typicode.com');
    const ecitData=()=>{
        alert("1");
    }
  return (
    <div>
        <Admin dataProvider={dataProvider}>
            <Resource name='users' list={UserList} edit={UserEdit}/>
            </Admin>
    </div>
  )
}

export default Container