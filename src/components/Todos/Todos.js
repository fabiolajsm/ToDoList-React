import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../../redux/actions';
import styles from './todos.module.css';
import img1 from './dt.jpg';
import img2 from './doit.jpg';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Todo from '../Todo/Todo';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Todos() {
  const state = useSelector(state => state);
  const classes = useStyles();
  return (
    <div className={styles.wrapper}>
      {state.length > 0 ? (
        <div className='App'>
          <DragDropContext>
            <Droppable droppableId='to-dos'>
              {provided => (
                <List className={classes.root} {...provided.droppableProps} ref={provided.innerRef}>
                  {state.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                      {(provided, snapshot) => (
                        // <ListItem
                        //   key={item.id}
                        //   button
                        //   onClick={handleToggle}
                        //   {...provided.draggableProps}
                        //   ref={provided.innerRef}
                        //   {...provided.dragHandleProps}
                        //   className={snapshot.isDragging ? 'selected' : 'not-selected'}>
                        //   <ListItemIcon>
                        //     <Checkbox edge='start' checked={checked} disableRipple />
                        //   </ListItemIcon>
                        //   {!css ? (
                        //     <ListItemText
                        //       id={item.id}
                        //       className={styles.done}
                        //       primary={`${item.title}`}
                        //     />
                        //   ) : (
                        //     <ListItemText id={item.id} primary={`${item.title}`} />
                        //   )}

                        //   <ListItemSecondaryAction>
                        //     <button className='btn btn-dark' onClick={handleDelete(item.id)}>
                        //       x
                        //     </button>
                        //   </ListItemSecondaryAction>
                        // </ListItem>
                        <li
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          key={item.id}
                          className={snapshot.isDragging ? 'selected' : 'not-selected'}>
                          <Todo id={item.id} title={item.title} />
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              )}
            </Droppable>
          </DragDropContext>
          <div className={styles.container}>
            <img
              src={img1}
              alt='https://i.pinimg.com/564x/1b/71/97/1b719784c82adaf96b79123e2b4be877.jpg'
            />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <img
            src={img2}
            alt='https://i.pinimg.com/564x/6f/e2/5f/6fe25fcdf430117ce658316dd526acc4.jpg'
          />
        </div>
      )}
    </div>
  );
}
