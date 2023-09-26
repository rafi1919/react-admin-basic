
import * as React from "react";
import {Grid, Card,Box} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
export default () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card>
        <Title title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
        
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
        
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
        </Grid>
        <Grid item xs={8}>
        <Card>
        
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
        </Grid>
      </Grid>
    </Box>
);