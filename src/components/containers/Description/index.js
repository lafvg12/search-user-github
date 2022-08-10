import { Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import LocationInformation from '../../LocationInformation'
import { PaperInformation } from '../../PaperInformation'

const Description = ({initialRender}) => {
  return (
    <Fragment>
      <Stack sx={{marginTop: '15px'}}>
        {
          initialRender.bio !== null ? <Typography variant='h5'>{initialRender.bio}</Typography> :  <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography> 
        }
      </Stack>
      <PaperInformation initialRender={initialRender} /> 
      <LocationInformation initialRender={initialRender}/> 
    </Fragment>
    )
}

export { Description }