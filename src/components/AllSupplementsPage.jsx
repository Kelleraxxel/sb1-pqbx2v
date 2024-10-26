import React from 'react';
import styled from 'styled-components';
import { FaStar, FaEdit, FaTrash } from 'react-icons/fa';

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  overflow: hidden;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background-color: #4a90e2;
  color: white;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  color: white;
  background-color: #4a90e2;
`;

const ActionIcon = styled.span`
  cursor: pointer;
  margin-left: 12px;
  font-size: 18px;
`;

function AllSupplementsPage({ onCreateNew, supplements = [], onToggleFavorite, onEdit, onDelete }) {
  return (
    <>
      <Title>
        All Supplements
        <Button onClick={onCreateNew}>+ Create New</Button>
      </Title>
      {supplements.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Ingredients</Th>
              <Th>Unit</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {supplements.map((supplement) => (
              <tr key={supplement.id}>
                <Td>{supplement.name}</Td>
                <Td>{supplement.ingredients.map(i => i.name).join(', ')}</Td>
                <Td>{supplement.ingredients[0]?.unit}</Td>
                <Td>
                  <ActionIcon onClick={() => onToggleFavorite(supplement.id)}>
                    <FaStar style={{ color: supplement.isFavorite ? '#f1c40f' : '#bdc3c7' }} />
                  </ActionIcon>
                  <ActionIcon onClick={() => onEdit(supplement)}>
                    <FaEdit style={{ color: '#3498db' }} />
                  </ActionIcon>
                  <ActionIcon onClick={() => onDelete(supplement.id)}>
                    <FaTrash style={{ color: '#e74c3c' }} />
                  </ActionIcon>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No supplements available. Click "Create New" to add a supplement.</p>
      )}
    </>
  );
}

export default AllSupplementsPage;