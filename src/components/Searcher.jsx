import React from "react";
import { Stack } from "@mui/material";
import { TextField, IconButton } from "@mui/material";

const Searcher = () => {
  return (
    <Stack
    direction='row'
      sx={{
        marginTop: '25px'
      }}
    >
      <TextField id="" label="name" value={"name."} />
      <IconButton aria-label="">i</IconButton>
    </Stack>
  );
};

export { Searcher };
