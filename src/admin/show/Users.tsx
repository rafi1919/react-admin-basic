import { useMediaQuery, Theme, Typography, Box, CardContent, Grid } from "@mui/material";
import { Show, SimpleList, SimpleShowLayout, TextField, EmailField,UrlField } from "react-admin";

export const UserShow = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <Box sx={{marginTop:'40px'}}>
        <Show>
            {isSmall ? (
                <SimpleList 
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <SimpleShowLayout>
                        <Typography>
                            <TextField source="id" />
                        </Typography>
                        <Typography>
                           <TextField source="name" /> 
                        </Typography>
                        <Typography>
                            <TextField source="username" />
                        </Typography>
                        <Typography>
                            <EmailField source="email" />
                        </Typography>  
                        <Typography>
                            <TextField source="address.street" />
                        </Typography>
                        <Typography>
                            <TextField source="phone" />
                        </Typography>                   
                        <Typography>
                            <UrlField source="website" />
                        </Typography>
                        <Typography>
                            <TextField source="company.name" />
                        </Typography>         
                </SimpleShowLayout>
            )}
        </Show>
        </Box>
    );
};