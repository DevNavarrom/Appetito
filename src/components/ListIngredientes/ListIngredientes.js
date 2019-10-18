import React from 'react';
//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  itemList:{
    color: "#0DBE98",
  },
}));

/* function Row(props) {
  const { items, style } = props.items;
  console.log(items);
  return (
    <ListItem button style={style} key={items.ingrediente}>
      <ListItemText primary={items.ingrediente} />
    </ListItem>
  );
}

Row.propTypes = {
    items: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
}; */

export default function VirtualizedList(props) {
  const classes = useStyles();
  //console.log(items);

  return (
    <List component="nav" className={classes.root} aria-label="ingredientes">
        {props.items.map(value =>{
            return (
                <ListItem button key={value.ingrediente}>
                    <ListItemText primary={value.ingrediente} />
                </ListItem>
            );
        })}
      </List>
  );
}
