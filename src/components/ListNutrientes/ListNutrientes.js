import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  export default function InsetList(props) {
    const classes = useStyles();
    //const {nutrientes} = props;
    return (
      <List component="nav" className={classes.root} aria-label="nutrientes">
        {props.datos.map(value =>{
            return (
                <ListItem button key={value.nutriente}>
                    <ListItemText primary={value.nutriente} />
                </ListItem>
            );
        })}
      </List>
    );
  }