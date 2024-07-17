import styled from 'styled-components';

export const KanbanContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const ColumnContainer = styled.div`
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  width: 22%;
  min-height: 80vh;
  padding: 16px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const ColumnTitle = styled.h2`
  font-family: 'Indie Flower', cursive;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 16px;
  color: #333;
`;

export const TaskCardContainer = styled.div`
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const TaskTitle = styled.h3`
  font-family: 'Indie Flower', cursive;
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #444;
`;

export const TaskDescription = styled.p`
  font-family: 'Indie Flower', cursive;
  font-size: 1rem;
  color: #666;
`;

export const SearchBarContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

export const StyledTextField = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  width: 60%;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;
  &:focus {
    border: 2px solid #888;
  }
`;