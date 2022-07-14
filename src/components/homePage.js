import React from "react";
import propTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    title: {
      
    },
  });
  
HomePage.propTypes = {

};

function HomePage() {
    return (
        <div className="title">
        <Typography variant="h2">Kendal Freeman</Typography>
        </div>
    )
}

export default HomePage;