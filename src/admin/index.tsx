import { Admin, Resource, ListGuesser, ShowGuesser,Layout, EditGuesser} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';

//component custom
import Dashboard from "./layout/Dashboard";
import { MyMenu } from './layout/MyMenu';
import { MyAppBar } from './layout/MyAppBar';

//page post
import { PostList, PostEdit, PostCreate } from './list/Posts';
import { PostShow} from './show/Posts';
//page user
import{ UserList} from './list/Users';
import{ UserShow} from './show/Users';


const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

const dataProvider =  jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () =>(
    <Admin 
        layout={MyLayout} 
        menu ={MyMenu}
        dashboard={Dashboard} 

        dataProvider={dataProvider}>
        <Resource name="users" list={UserList} show={UserShow} recordRepresentation="name"/>
        <Resource name="comments" list={ListGuesser} />
        <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate}/>
    </Admin>
)

export default App;
