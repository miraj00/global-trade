
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";


const Categories = [
  { title: "Jewelery" },
  { title: "Electronics" },
  { title: "women's clothing" },
  { title: "men clothing" },
];


const display = {
  form: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  select: {
    width: "800px",
  },
  btn: {
    width: "200px"
  }
};


export default function FreeSolo() {
  return (
    <Stack spacing={2} >
      <form style={display.form}>
        <Autocomplete
          style={ display.select}
          disableClearable
          options={Categories.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Category"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <Button variant="outlined" type="submit" style= {display.btn}>
          search
        </Button>
      </form>
    </Stack>
  );
}


