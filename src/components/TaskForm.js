import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/tasksSlice';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TaskForm = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(addTask({ id: Date.now().toString(), title, description, status: 'todo' }));
    setOpen(false);
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <Fab color="primary" aria-label="add" onClick={handleOpen} style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskForm;