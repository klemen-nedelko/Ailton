import React from 'react'
import Info from './Info'
import Search from './Search'
import ThemeComponent  from "./ThemeComponent"

const Header = ({name}) => {
  return (
    <> 
    <div className="xl:px-32"> 
        <h1 className="text-5xl">{name}</h1>
            <Search/>
            <Info/>
    </div> 
    <ThemeComponent/>
    </>

  )
}

export default Header