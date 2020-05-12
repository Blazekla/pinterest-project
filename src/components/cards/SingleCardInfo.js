import React from "react";

//Import MaterialUI components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

//Import Custom Components
import SendIcon from "../icons/SendIcon";
import SaveButton from "./SavePinButton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "502px",
  },
  topButtons: {
    justifyContent: "space-between",
    margin: "12px",
  },
  middleSection: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  followingSection: {
    justifyContent: "space-between",
  },
  middleActionButtons: {
    marginTop: "40px",
    paddingTop: "16px",
    paddingBottom: "16px",
  },
  bottomSection: {
    alignContent: "center",
    flexWrap: "nowrap",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginBottom: "20px",
    marginTop: "40px",
  },
  bottomText: {
    paddingLeft: "1rem",
  },
  optionButton: {
    width: "auto",
  },
  buttonStyling: {
    backgroundColor: "@efefef",
    borderRadius: "30px",
  },
}));

function SingleCardInfo(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container item className={classes.topButtons}>
        <Grid container item className={classes.optionButton}>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
          <IconButton>
            <SendIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <SaveButton />
        </Grid>
      </Grid>
      <Grid container item className={classes.middleSection}>
        <Grid item>
          <Typography>Pin Title Here</Typography>
        </Grid>
        <Grid container direction="column" item>
          <Typography>
            Description Here Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Odit laborum aut veniam temporibus similique deserunt non. Quo
            optio quis cum!
          </Typography>
          <Grid container item className={classes.followingSection}>
            <Avatar />
            <Button>Following</Button>
          </Grid>
          <Grid container item className={classes.middleActionButtons}>
            <Button>Photos</Button>
            <Button>Comments</Button>
            <Button variant="contained" className={classes.buttonStyling}>
              Add Photo
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item className={classes.bottomSection}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid container direction="column" item className={classes.bottomText}>
          <Grid container item>
            <Button>AvatarName</Button>
            <Button>Album Page</Button>
          </Grid>
          <Grid item>
            <Typography>
              Description Lorem ipsum, dolor sit amet consectetur
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SingleCardInfo;
