import * as React from 'react';
import {Box, Stack, Grid} from '@mui/material'
import { Menu } from 'react-admin';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import LabelIcon from '@mui/icons-material/Label';

export const MyMenu = () => (
    <Menu  >
        <Box sx={{color:'#252B48'}}> 
            <Menu.DashboardItem />
            <Menu.Item to="/posts" primaryText="Posts" leftIcon={<PostIcon />}/>
            <Menu.Item to="/comments" primaryText="Comments" leftIcon={<ChatBubbleIcon />}/>
            <Menu.Item to="/users" primaryText="Users" leftIcon={<LabelIcon />}/>
        </Box>
       
    </Menu>
);


// sx={{background: 'red', height:'90vh', width:'100px', borderRadius:'20px', margin:'30px'}}