import { Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'

const PrincipalInformation = ({initialRender}) => {
  return (
    <Fragment>
        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography variant='h4'>{initialRender.name}</Typography>
            <Typography >{initialRender.created_at}</Typography>
        </Stack>
        <Typography variant='h5'>{initialRender.login}</Typography>
        <Typography variant='h5'>{initialRender.company}</Typography>
    </Fragment>
  )
}

export { PrincipalInformation }