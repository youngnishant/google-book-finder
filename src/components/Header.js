import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

const Header = ({ search }) => {
  const [input, setInput] = useState("");

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    search(input);
    setInput("");
  };
  const classes = useStyles();
  return (
    <>
      <div className="title">
        BOOK <span className="underline-text">FINDER </span>
      </div>
      <Box component="div" mt={5} className={classes.box} id="searchbar">
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search Books Here"
            value={input}
            onChange={event => handleChange(event)}
          />
          <IconButton
            className={classes.iconButton}
            aria-label="Search"
            onClick={handleClick}
          >
            <i className="material-icons">search</i>
          </IconButton>
        </Paper>
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  box: {
    background: "linear-gradient(to right, #F2C94C, #F2994A)"
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

export default Header;
