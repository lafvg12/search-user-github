import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import RoomIcon from '@mui/icons-material/Room';
import LanguageIcon from '@mui/icons-material/Language';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Stack } from '@mui/material';

const LocationInformation = ({initialRender}) => {

    const styleSTack = {
        display:'flex', 
        flexDirection:'row', 
        alignItems: 'center'
    }


  return (
        <Grid container spacing={1}>
            <Grid xs={6}>
                <Stack sx={styleSTack}>
                    <RoomIcon  sx={{color: 'red'}}/> 
                    <Typography sx={{marginLeft: '5px'}} variant='h6'>  { initialRender.location}</Typography>
                </Stack>
                <Stack sx={styleSTack}>
                    <LanguageIcon sx={{color: 'blue'}} /> 
                    <Typography sx={{marginLeft: '5px'}} variant='h6'> { initialRender.blog}</Typography>
                </Stack>
            </Grid>
            <Grid xs={6}>
                <Stack sx={styleSTack}>
                <TwitterIcon/>
                    {
                        initialRender.twitter_username != null ? <Typography sx={{marginLeft: '5px'}} variant='h6'> { initialRender.company}</Typography> : <Typography sx={{marginLeft: '5px'}} variant='h6'>Not Available</Typography>
                    }
                </Stack>
            <Stack sx={styleSTack}>
                 <ContactPageIcon/>
                <Typography sx={{marginLeft: '5px'}} variant='h6'> { initialRender.blog}</Typography>
            </Stack>
            </Grid>
        </Grid>
    )
}

export default LocationInformation