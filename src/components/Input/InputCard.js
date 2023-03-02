import { Button, IconButton, InputBase, Paper } from '@mui/material';
import React, { useContext, useState } from 'react';
import '../../assets/style/style.css';
import ClearIcon from '@mui/icons-material/Clear';
import storeApi from '../../utils/storeApi';

export const InputCard = ({setOpen, listId, type}) => {
    const [title, setTitle] = useState(null);
    const {addMoreCard, addMoreList} = useContext(storeApi);
    const handleOnChange = (e) =>{
        setTitle(e.target.value);

    }
    const handleBtnConfirm = (e) => {
        if(type === 'card') {
            addMoreCard(title, listId);
            setTitle("");
            setOpen(false);
        }else {
            addMoreList(title);
            setTitle("");
            setOpen(false);
        }
    }

    const handleBlur = () =>{
        setOpen(false);
    }
  return (
    <div>
        <div>
        <Paper className="inputCard">
            <InputBase
                onChange={handleOnChange}
                onBlur={handleBlur}
                multiline
                fullWidth
                inputProps={{
                    className:'input'
                }}
                value={title}
                placeholder={type === 'card'? "Enter title of this card...":"Enter list title..."}
            />
        </Paper>
        </div>
        <div className="confirm">
            <Button className="btnConfirm" onClick={handleBtnConfirm}>
                {type === "card" ? 'Add Card' : 'Add list'}
                </Button>
            <IconButton  onClick={() => setOpen(false)}>
                <ClearIcon/>
            </IconButton>
        </div>
    </div>
  )
}
