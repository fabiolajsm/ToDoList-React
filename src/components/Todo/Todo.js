import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { removeTodo } from '../../redux/actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import styles from '../Home/home.module.css'; // from another folder, bc is too short...

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Todo({ id, title }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [css, setCss] = useState(true);
  const [checked, setChecked] = React.useState(false);

  function handleToggle() {
    if (css) {
      setCss(false);
      setChecked(true);
    }
    else {
      setCss(true);
      setChecked(false);
    }
  };

  function handleDelete(e) {
    e.preventDefault();
    dispatch(removeTodo(id));
  }

  return (
    <List className={classes.root}>
      <ListItem key={id} button onClick={handleToggle}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            disableRipple
          />
        </ListItemIcon>
        {
          !css ?
            <ListItemText id={id} className={styles.done} primary={`${title}`} />
            :
            <ListItemText id={id} primary={`${title}`} />
        }

        <ListItemSecondaryAction>
          <button className='btn btn-dark' onClick={handleDelete}>x</button>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}