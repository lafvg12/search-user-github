import React, { useState } from "react";
import { Stack } from "@mui/material";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ({ inputUser, setInputuser}) => {

  const [valueInput, setValueInput] = useState('')

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value
    setValueInput(inputValue)
  }

  const handleSubmit = () => {
      setInputuser(valueInput)
      console.log('from search --->', inputUser);

  }

  return (
    <Stack
    direction='row'
      sx={{
        marginTop: '25px',
        width: '80%'
        
      }}
    >
      <TextField 
      id="" autoFocus={true}
      label="Github User" 
      variant="outlined"  
      placeholder="Type your user"
      value={valueInput}
      onChange={onSearchValueChange}
      size='small'
      sx={{
        width: '90%'
      }}/>
      <IconButton 
       onClick={handleSubmit} 
       aria-label=""
       sx={{
        left: '-52px',

      }}>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export { Searcher };
