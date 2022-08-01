import React from 'react'
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


const butonStyle = {
    backgroundColor: 'green',
}

const iconStyle = {
    color: 'yellow',
}

const First = () => {
  return (
    <div>
        <h2> I am Button from first </h2>
        <Button variant="contained" sx={butonStyle} href='https://www.youtube.com/watch?v=zRIbf6JqkNc&list=RDzRIbf6JqkNc&start_radio=1' target={'_blank'} disableElevation>
            Disable elevation
        </Button>
        <AccessAlarmIcon color='error'  sx={iconStyle}/>
    </div>
  )
}

export { First }