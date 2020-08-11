import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import he from "he";

const HomePage = props => {
  const formatDescription = text => {
    text = he.decode(text);
    text = text.split(" ");
    if (text.length > 26) {
      let final = text.slice(0, 20).join(" ");
      final = final + "...";
      return final;
    }
    return text.join(" ");
  };

  const classes = useStyles();
  return (
    <Box mt={3}>
      <div className={classes.root}>
        <Grid container spacing={10}>
          {props.items.map((item, index) => {
            const {
              volumeInfo: {
                title,
                authors,
                categories,
                canonicalVolumeLink,
                publisher,
                publishedDate,
                industryIdentifiers,
                imageLinks: { thumbnail }
              },
              searchInfo
            } = item;

            return (
              <Grid item xs={12} sm={6} key={index}>
                <Fade bottom cascade duration={1500}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <img
                          src={thumbnail}
                          alt="just an image"
                          height="180px"
                          width="150px"
                        />
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </Grid>
                      <Grid item container xs direction="column">
                        <Typography align="left">
                          <h2>
                            {title}
                            <span className="genre">
                              <i className="fas fa-book">{categories}</i>
                            </span>
                          </h2>
                          <h5>by {authors}</h5>
                          <p style={{ marginBottom: "10px" }}>
                            {publisher} <br />
                            Pub. Date: {publishedDate} <br />
                            {industryIdentifiers[0].type}:{" "}
                            {industryIdentifiers[0].identifier}
                            <br />
                            {industryIdentifiers[1]
                              ? industryIdentifiers[1].type
                              : ""}
                            {industryIdentifiers[1]
                              ? industryIdentifiers[1].identifier
                              : ""}
                          </p>
                          <a
                            href={canonicalVolumeLink}
                            target="_blank"
                            className="more"
                          >
                            More
                          </a>

                          {/* <p>{formatDescription(searchInfo.textSnippet)}</p> */}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Fade>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default HomePage;
