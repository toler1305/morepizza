import React, {useEffect, useState} from 'react'

function MoreButton({pos,onClick}) {
    const [currentClass, SetCurrentClass] = useState("moreButton")
  
    

    const posStyle = {
      top: pos[0] + "%",    
      left: pos[1]  + "%",
      backgroundColor: pos[2]
    };

    console.log(pos[2]);
    
    //backgroundColor: pos[2] ? "#ff9c00" : "default"
//left: (pos[1]) / 100 * (contWidth - butWidth)

    useEffect(() => {
      SetCurrentClass("moreButton moreButtonAfterLoad")
      //pos[2] = "#" + Math.floor(Math.random()*16777215).toString(16) 
    }, [])

    

    return (
            <button className={currentClass} onClick={onClick} style={posStyle}>more</button>
    )
}

export default MoreButton
