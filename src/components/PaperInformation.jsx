import { Height } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'

const PaperInformation = ({initialRender}) => {
  return (
        <Fragment>
            <Stack 
            sx={{display: 'flex', 
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around', 
                marginTop: '25px', 
                marginLeft: '10px',
                padding: '15px',
                border: '1px grey black',
                backgroundColor: 'white',
                height: '80px',
                marginBottom: '35px',
                borderRadius: '15px'
                }}>
                <Typography variant='h6'>Public Repos: {initialRender.public_repos}</Typography>
                <Typography variant='h6'> Followers: {initialRender.followers}</Typography>
                <Typography variant='h6'> Following: {initialRender.following}</Typography>
            </Stack>
        </Fragment>
    )
}

export {PaperInformation}