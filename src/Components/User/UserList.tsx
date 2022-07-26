import React from 'react'
import { Datagrid, EditButton, EmailField, List, TextField, useRecordContext } from 'react-admin'

export default function UserList() {
    const record = useRecordContext();
    console.log("Users",record);

  return (
    <div>
        <List bulkActionButtons={false}>
        <Datagrid>
        +    <TextField source="id" />

            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
            <EditButton />
        </Datagrid>
    </List>

    </div>
  )
}
