import React from 'react'
import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin'

export default function UserEdit(props:any) {
    console.log("Props",props)
  return (
    <div> <Edit>
    <SimpleForm>
        <TextInput source="id" />
        <TextInput source="email" />
        <TextInput source="company.name" />
    </SimpleForm>
</Edit>
</div>
  )
}
