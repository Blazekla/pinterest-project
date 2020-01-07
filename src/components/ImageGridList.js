import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import tileData from "../images/tileData";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "wrap",
    // cellHeight: "auto",
    width: "auto",
    // padding: 200,
    // column: 10,
    [theme.breakpoints.down("sm")]: { cols: 2 },
    [theme.breakpoints.down("md")]: { cols: 12 },
    // height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  },
  cols: 12
}));

export default function AdvancedGridList() {
  const classes = useStyles();
  console.log(`The columns are : ${classes.gridList.padding}`);
  return (
    <div className={classes.root}>
      <GridList
        // cellHeight={200}
        // spacing={0}
        className={classes.gridList}
        cols={parseInt(classes.cols, 10)}
      >
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            // cols={tile.featured ? 2 : 1}
            cols={2}
            // rows={tile.featured ? 2 : 1}
            // rows={1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${tile.title}`}
                  className={classes.icon}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
