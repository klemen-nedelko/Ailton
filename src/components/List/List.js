import React from 'react'
import { CssBaseline, Paper } from '@mui/material';
import '../../assets/style/style.css';
import { Title } from './Title';
import { Card } from '../Card';
import { InputContainer } from '../Input/InputContainer';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export const List = ({ list, index }) => {
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided)=>(
        <div {...provided.draggableProps} ref={provided.innerRef}>
        <Paper className='root' {...provided.dragHandleProps}>
            <CssBaseline />
            <Title title={list.title} listId={list.id}/>
              <Droppable droppableId={list.id}>
                {(provided)=>(
                  <div
                   ref={provided.innerRef} {... provided.droppableProps}
                   className="cardContainer"
                  >
                    {
                      list.cards.map((card, index) =>(
                      <Card key={card.id} card={card} index={index}/>
                      ))
                    }
                    {provided.placeholder}
                  </div>
                )}
                
              </Droppable>
            <InputContainer listId={list.id} type="card"/>
        </Paper>
    </div>
      )}
    </Draggable>
  )
}
