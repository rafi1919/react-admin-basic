import { AppBar } from 'react-admin';

export const MyAppBar = () => (
    <AppBar
        sx={{
            background:'#252B48',
            borderRadius:'20px',
            margin:'20px',
            width:'80%',
            color: 'lightblue',
            '& .RaAppBar-toolbar': { padding: 0 },
        }}
    />
);