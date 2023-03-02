import { Collapse, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import '../../assets/style/style.css';
import { InputCard } from './InputCard';

export const InputContainer = ( { listId, type } ) => {
    const [open, setOpen] = useState(false);

  return (
    <div className='addCardRoot'>
        <Collapse in={open}>
            <InputCard 
            setOpen={setOpen}
            listId={listId}
            type={type}
            />
        </Collapse>
        <Collapse in={!open}>
        <Paper className="addCard" elevation={0} onClick={() => setOpen(!open)}>
            <Typography>{type === "card" ? '+ Add Card' : '+ Add list'}</Typography>
        </Paper>
        </Collapse>

    </div>
  )
}
