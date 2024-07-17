import React from 'react';
import Column from './Column';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter) || '';

  const columns = {
    todo: 'To Do',
    inProgress: 'In Progress',
    peerReview: 'Peer Review',
    done: 'Done',
  };

  const filteredTasks = tasks.filter((task) =>
    (task.title || '').toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="kanban-board">
      <Grid container spacing={3}>
        {Object.keys(columns).map((key) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <Column
              title={columns[key]}
              tasks={filteredTasks.filter((task) => task.status === key)}
              status={key}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default KanbanBoard;