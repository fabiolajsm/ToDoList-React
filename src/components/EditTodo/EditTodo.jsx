import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '3px solid #fcd5ce',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(3, 4, 3),
    },
    margin: {
        height: 55,
    },
}));

export default function EditTodo({ id, task }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [editedTask, setEditedTask] = useState(task);
    const dispatch = useDispatch();

    const handleEdit = () => {
        let payload = { id, task: editedTask }
        if (editedTask.length > 47) return alert("The task must have less than 3 lines of text");
        if (editedTask !== "") {
            dispatch(editTodo(payload))
            setOpen(false);
        }
        return null
    };

    return (
        <div>
            <IconButton onClick={() => setOpen(true)}>
                <EditIcon />
            </IconButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <TextField
                            id="outlined-textarea"
                            autoComplete="off"
                            label="Edit your task:"
                            placeholder={editedTask}
                            multiline
                            variant="outlined"
                            onChange={(e) => setEditedTask(e.target.value)}
                        />
                        <Button variant="outlined" className={classes.margin} onClick={handleEdit}>
                            Edit
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}