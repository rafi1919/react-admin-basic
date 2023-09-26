import {
    Show,
    SimpleShowLayout,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    Create,
    useRecordContext
 } from "react-admin";
 import { Container, Box } from "@mui/material"
const PostTitle =() =>{
    const record = useRecordContext();
    return <span>Post {record ? '"${record.title}"' : ''}</span>
}

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostShow =()=> (
    <Box sx={{marginTop:'40px',  flexGrow: 3 }}>
    <Show>
        <SimpleShowLayout>
      <TextField source="id" />
        <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </SimpleShowLayout>
    </Show>
    </Box>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
            <Box sx={{marginTop:'40px'}}>

        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" disabled/>
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}  />
        </SimpleForm>
        </Box>
    </Edit>
);

export const PostCreate = () => (
     <Create>
       <SimpleForm>
         <ReferenceInput source="userId" reference="users" />
         <TextInput source="title" />
         <TextInput source="body" multiline rows={5} />
       </SimpleForm>
     </Create>
    );