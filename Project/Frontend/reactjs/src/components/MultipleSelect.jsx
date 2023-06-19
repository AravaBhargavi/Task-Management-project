import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import "./MultiSelect.css";
import { Container } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Tasks = [
  'Research',
  'Designing',
  'Programming',
  'Testing',
  'Deployment',
];

function getStyles(Tasks, personTasks, theme) {
  return {
    fontWeight:
      personTasks.indexOf(Tasks) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personTasks, setPersonTasks] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonTasks(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Container align="center">
    <div>
      <h1>Task Management System</h1>
      <h3>Choose a task:</h3>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Tasks</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personTasks}
          onChange={handleChange}
          input={<OutlinedInput label="Select" />}
          MenuProps={MenuProps}
        >
          {Tasks.map((Tasks) => (
            <MenuItem
              key={Tasks}
              value={Tasks}
              style={getStyles(Tasks, personTasks, theme)}
            >
              {Tasks}
            </MenuItem>
          ))}
        </Select>
        <br></br><Button variant="contained" href="/Total">Submit</Button>
      </FormControl>
    </div>
    </Container>
  );
}