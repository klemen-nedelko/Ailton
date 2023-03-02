import React from 'react'
import { Paper } from '@mui/material';
import '../assets/style/style.css';
import { Draggable } from 'react-beautiful-dnd';

export const Card = ({ card, index }) => {
  return (

    <Draggable draggableId={card.id} index={index}>
      {
        (provided)=>(
        <div
            ref={provided.innerRef} 
            {... provided.dragHandleProps} 
            {...provided.draggableProps}
            >
          <Paper className="card">
              {card.title}
          </Paper>
        </div>
        )

      }
      
    </Draggable>
  )
}
