import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    height: 52,
  },
}));

export default function AddTodo() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleChange(e) { setTask(e.target.value) }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.length > 47) return alert("The task must have less than 3 lines of text");
    if (task !== '') {
      dispatch(addTodo(task))
      setTask("");
    }
  }

  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <TextField
          label="Write your task"
          placeholder="..."
          variant="outlined"
          value={task}
          multiline
          onChange={handleChange}
        />
        <Button variant="outlined" className={classes.margin} onClick={handleSubmit}>
          Add
        </Button>
      </form>
    </div>
  )
};