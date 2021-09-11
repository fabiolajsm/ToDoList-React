import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './todos.module.css';
import img1 from './dt.jpg';
import img2 from './doit.jpg';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Todo from '../Todo/Todo';
import { orderBy, range } from 'lodash';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Todos() {
  const classes = useStyles();
  const state = useSelector(state => state);
  const [data, setData] = useState(state);
  useEffect(() => {
    if (data !== state) {
      setData(state);
    }
  }, [state, data]);
  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination || !source) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const directionOfDrag = destination.index > source.index ? 'GREATER' : 'LESS';
    let affectedRange;
    if (directionOfDrag === 'GREATER') {
      affectedRange = range(source.index, destination.index + 1);
    } else {
      affectedRange = range(destination.index, source.index);
    }
    const reOrderItems = data.map(item => {
      if (item.id === parseInt(result.draggableId)) {
        item.position = destination.index;
        return item;
      } else if (affectedRange.includes(item.position)) {
        if (directionOfDrag === 'GREATER') {
          console.log(typeof item.position, 'ITEM ITEM');
          item.position = item.position - 1;
          return item;
        } else if (directionOfDrag === 'LESS') {
          item.position = item.position + 1;
          return item;
        }
      } else {
        return item;
      }
      return item;
    });
    setData(reOrderItems);
  };
  return (
    <div className={styles.wrapper}>
      {data.length > 0 ? (
        <div className='App'>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='to-dos'>
              {provided => (
                <List className={classes.root} {...provided.droppableProps} ref={provided.innerRef}>
                  {orderBy(data, 'position').map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          key={item.id}
                          className={snapshot.isDragging ? 'selected' : 'not-selected'}>
                          <Todo id={item.id} title={item.title} />
                        </div>
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
