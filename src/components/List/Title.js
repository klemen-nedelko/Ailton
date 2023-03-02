import { InputBase, Typography } from '@mui/material';
import React,{useContext, useState} from 'react';
import '../../assets/style/style.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import storeApi from '../../utils/storeApi';

export const Title = ({ title, listId }) => {
  const [open, setOpen] = useState();
  const [newTitle, setNewTitle] = useState(title);
  const {updateListTitle} = useContext(storeApi);

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  }
  const handleOnBlur = (e) => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  }

    return (
    <div>
        {
            open ?
            <div className="">
                <InputBase
                    onChange={handleOnChange}
                    autoFocus
                    value={newTitle}
                    inputProps={{
                        className: "editableTitleInput"
                    }}
                    fullWidth
                    onBlur={handleOnBlur}
                />
            </div>:
            <div className="editableTitleContainer">
                <Typography
                    onClick={() => setOpen(!open)}
                    className='editableTitle'
                >{title}</Typography>
                <MoreHorizIcon/>
            </div>
        }
    </div>
  )
}
