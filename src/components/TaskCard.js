import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardContent, Typography, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/slices/tasksSlice';

const ItemTypes = {
  TASK: 'task',
};

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleEditOpen = () => {
    setOpen(true);
  };

  const handleEditClose = () => {
    setOpen(false);
  };

  const handleEditSave = () => {
    dispatch(editTask({ id: task.id, title, description }));
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <>
      <div
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1, marginBottom: '1rem' }}
        className={`task-card task-card-${task.status}`}
      >
        <Card>
          <CardContent>
            <Typography variant="h6" className="task-card-title">
              {task.title}
            </Typography>
            <Typography variant="body2" className="task-card-description">
              {task.description}
            </Typography>
            <IconButton onClick={handleEditOpen} className="edit-button">
              <Edit />
            </IconButton>
            <IconButton onClick={handleDelete} className="delete-button">
              <Delete />
            </IconButton>
          </CardContent>
        </Card>
      </div>

      <Dialog open={open} onClose={handleEditClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent className="dialog-content">
          <TextField
            autoFocus
            margin="dense"
            label="Task Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Task Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskCard;