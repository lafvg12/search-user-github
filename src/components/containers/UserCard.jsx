import React from 'react'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import {PrincipalInformation} from '../PrincipalInformation'
import { Description } from './Description'

const UserCard = ({ initialRender }) => {
  return (
    <Grid 
    sx={{marginTop: '63px'}} 
    container 
    spacing={1} 
    wrap='nowrap'
    >
      <Grid xs={3} sx={{display: 'flex', justifyContent:' center'}}>
        <CardMedia 
        sx={{
            borderRadius: '50%',
            width: '80%',
            height: '60%'
        }}
        component="img" 
        image={initialRender.avatar_url} 
        alt='Photo Url'/>
      </Grid>
      <Grid 
        xs={9} 
        sx={{
            marginLeft: '25px'
        }}>
        <PrincipalInformation initialRender={initialRender} />
        <Description initialRender={initialRender}/>
      </Grid>
    </Grid>
  )
}

export { UserCard }