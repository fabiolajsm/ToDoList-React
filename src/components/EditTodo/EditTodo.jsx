import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { editTodo } from '../../redux/actions';
import { useDispatch } from 'react-redux';
// import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function EditTodo({ id }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [editedTask, setEditedTask] = useState("");
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        let payload = { id, task: editedTask }
        if (editedTask !== "") {
            dispatch(editTodo(payload))
            setOpen(false);
        }
        return null
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                {/* <EditIcon /> */}
                hola
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <p id="transition-modal-description">Edit your task:</p>
                        <input type='text' autoComplete="off" placeholder="..." value={editedTask} onChange={(e) => setEditedTask(e.target.value)}></input>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleClose}>Cancel</button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
