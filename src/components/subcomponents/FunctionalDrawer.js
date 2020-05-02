import React from "react";

//Import MaterialUI Components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

function FunctionalDrawer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer anchor={props.anchor} open={props.open} onClose={props.close}>
        {props.children}
      </Drawer>
    </React.Fragment>
  );
}

export default FunctionalDrawer;
