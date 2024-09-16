import React from 'react';
import { Button } from '@mui/material';

interface AddMealButtonProps {
  onClick: () => void;
}

const AddMealButton: React.FC<AddMealButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      sx={{ marginTop: 2, marginBottom: 2, borderRadius: '16px', color: 'secondary', width: '368px', fontWeight: '600' }}
    >
      Adicionar Refeição
    </Button>
  );
};

export default AddMealButton;