import { useState } from "react";
import { v4 as uuid } from "uuid";
import { InputContainer } from "../components/Input/InputContainer";
import { List } from "../components/List/List";
import store from "../utils/store";
import StoreApi from "../utils/storeApi";
import '../assets/style/style.css';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Wrapper() {

  const [data, setData] = useState(store);
  
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    }
    const lists = data.lists[listId];
    lists.cards = [...lists.cards, newCard];

    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]: lists,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) =>{
    const newListId = uuid();
    const newList ={
      id: newListId,
      title,
      cards:[]
    }
    const newState = {
      listIds:[...data.listIds, newListId],
      lists:{
        ...data.lists,
        [newListId]:newList,
      }
    }
    setData(newState);

  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]:list
      }
    }
    setData(newState);
  }
  
  const onDragEnd = (result) =>{
    const { destination, source, draggableId, type } = result;

    if(!destination){
      return;
    }
    if(type === "list"){
      const newListIds = data.listIds;
      newListIds.splice(source.index,1);
      newListIds.splice(destination.index,0,draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if(source.draggableId === destination.draggableId){
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState);
  }else{
    sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
  }

  }

  return (
    <>
    <StoreApi.Provider value={{addMoreCard, addMoreList, updateListTitle}}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list" direction="horizontal" >
          {(provided)=>(
            <div className="main" ref={provided.innerRef} {... provided.droppableProps}>
              {
                data.listIds.map((listId, index) => {
                  const list = data.lists[listId];
                  return <List list={list} key={listId} index={index} />;
                })
              }
          <InputContainer type="list"/>
          {provided.placeholder}
        </div>
          )}
        
        </Droppable>
      </DragDropContext>
    </StoreApi.Provider>
    </>
  );
}

export default Wrapper;
