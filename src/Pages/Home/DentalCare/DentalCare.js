import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { memo } from 'react';
import Treatment  from '../../../images/treatment.png'

const DentalCare = memo(() => {
    return (
        <Container>
                <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                <img style={{ width: '55%' }} src={Treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6} >
               <Box>
               <Typography variant="h3">
                       Expectional Dental <br />
                        Care, on Your Terms
                </Typography>;
                <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                </Typography>
                <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn more</Button>
               </Box>
                </Grid>
                </Grid>

        </Container>
    );
});

export default DentalCare;