import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import KanbanBoard from './components/KanbanBoard';
import SearchBar from './components/SearchBar';
import TaskForm from './components/TaskForm';
import { Container, CssBaseline, Typography, AppBar, Toolbar } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Kanban Board
          </Typography>
          <TaskForm />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <SearchBar />
        <DndProvider backend={HTML5Backend}>
          <KanbanBoard />
        </DndProvider>
      </Container>
    </Provider>
  );
};

export default App;