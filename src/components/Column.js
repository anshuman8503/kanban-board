import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateTask } from '../redux/slices/tasksSlice';

const ItemTypes = {
  TASK: 'task',
};

const Column = ({ title, tasks, status }) => {
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => {
      if (item.status !== status) {
        dispatch(updateTask({ id: item.id, status }));
      }
    },
  });

  return (
    <div ref={drop} className={`column column-${status}`}>
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;