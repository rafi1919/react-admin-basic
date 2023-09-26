import * as React from 'react';
import { Drawer } from '@mui/material';
import { SidebarClasses, useLocale, useSidebarState } from 'react-admin';

export const MySidebar = ({ children }) => {
    const [open, setOpen] = useSidebarState();
    useLocale(); // force redraw on locale change

    const toggleSidebar = () => setOpen(!open);

    return (
        <Drawer
            variant="temporary"
            open={open}
         
            classes={SidebarClasses}
        >
            {children}
        </Drawer>
    );
};