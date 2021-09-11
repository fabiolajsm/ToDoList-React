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
import EditTodo from '../EditTodo/EditTodo';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Todo({ id, task }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [css, setCss] = useState(true);
  const [checked, setChecked] = React.useState(false);

  function handleToggle() {
    if (css) {
      setCss(false);
      setChecked(true);
    } else {
      setCss(true);
      setChecked(false);
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(removeTodo(id));
  }

  return (
    <List className={classes.root}>
      <ListItem key={id} button onClick={handleToggle}>
        <ListItemIcon>
          <Checkbox edge='start' checked={checked} disableRipple />
        </ListItemIcon>
        {!css ? (
          <ListItemText id={id} className={styles.done} primary={`${task}`} />
        ) : (
          <ListItemText id={id} primary={`${task}`} />
        )}
        <div>
          <EditTodo id={id} task={task} />
        </div>
        <ListItemSecondaryAction>
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
