import React, {useContext} from 'react';
import {apiContext} from '../contextApi'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  selectOptions: {
    "& .MuiListItem-root": {
      borderTop: "1px solid rgb(3,15,252)",
      borderRadius: 8
    },
    "& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover": {
      backgroundColor: "transparent"
    },
    backgroundColor: "rgb(3,252,244)",
    "& .MuiCheckbox-root": {
      color: "green"
    },
    "& .MuiCheckbox-colorSecondary": {
      "&.Mui-checked": {
        color: "orange"
      }
    }
  }
  
}));

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


export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const data = useContext(apiContext)
  const [personName, setPersonName] = React.useState([]);
  
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };



  //get publisher name
  const publisher = data.data.map(elem => elem.article_source_url)
  //remove duplicate
  const publiserSet = [...new Set(publisher)]
  

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Publications</InputLabel>
        <Select
        multiple
        value={personName}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        >
            {publiserSet.map((name) => (
            <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
            </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
