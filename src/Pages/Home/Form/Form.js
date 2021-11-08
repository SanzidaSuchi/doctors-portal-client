import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Formbg from "../../../images/bg.png"

const form = {
    background: `url(${Formbg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175

}
const Form = () => {
    return (
        <Container>
           <Box style={form} sx={{ flexGrow: 1 }}>
           <Grid item xs={12} md={6}>
            <img style={{ width:300 }}   src={Formbg} alt="" />
            </Grid>
            <Typography color="#f5f5f5" variant="h6">
                Contact Us
            </Typography>
            <Typography color="#f5f5f5"  variant="h4">
                Always Connect with Us
            </Typography>
            <form>
                    <TextField
                        sx={{ width: '60%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue="Email Address*"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '60%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue="Subject*"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '60%', height:'100%' , m: 1 }}
                        id="outlined-size-small"
                        defaultValue="Your Message"
                        size="small"
                    />
                    <br/>
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
           </Box>
        </Container>
    );
};

export default Form;