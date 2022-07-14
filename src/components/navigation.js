import React from "react";
import propTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  
function Navigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Tabs  
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered>
            <Tab label = "Home"/>
            <Tab label = "Projects"/>
            <Tab label = "Work History"/>
        </Tabs>
    )
}

export default Navigation;

