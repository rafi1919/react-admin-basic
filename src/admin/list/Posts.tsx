import {
    List,
    Datagrid,
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

export const PostList =()=> (
    <Box sx={{marginTop:'40px'}}>
    <List filters={postFilters}>
        <Datagrid>
      <TextField source="id" />
        <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
    </Box>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" disabled/>
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}  />
        </SimpleForm>
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