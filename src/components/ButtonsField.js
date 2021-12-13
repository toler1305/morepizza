import React, {useState, useRef} from 'react'
import MoreButton from './MoreButton.js';

function ButtonsField({onMore}) {
    
    const [poses, setPoses] = useState([[50,50,false]]);
    
    const divRef = useRef();  

    const rndPercent = () => { return Math.random() * (100) }

    function moreClick(cPos) {
    

        //Change poses touching clicked pos
        poses.forEach(p => {
            if (p !== cPos) {
                let isTouching = false;
                const din = getRandomInt(1,6)
                const h = 50*din / divRef.current.offsetHeight * 100
                const w = 100*din / divRef.current.offsetWidth * 100

                const leftGap =  (cPos[1])-(p[1] + w)
                const rightGap = (p[1]) - (cPos[1] + w)
                const topGap = (cPos[0])-(p[0] + h) 
                const bottomGap = (p[0]) - (cPos[0]  + h)

                    if (leftGap < 0 &&
                        rightGap < 0 &&
                        topGap < 0 &&
                        bottomGap < 0)
                        isTouching = true;

                let d = 0.4
                let a = 3

                if (isTouching)
                {
                    if (leftGap >= rightGap)
                        p[1] += leftGap*d-a;
                    else
                        p[1] -= rightGap*d-a;

                    if (topGap >= bottomGap)
                        p[0] += topGap*d-a;
                    else
                        p[0] -= bottomGap*d-a;

                    //cPos[2] = "#" + Math.floor(Math.random()*16777215).toString(16)
                    p[2] = "#" + Math.floor(Math.random()*16777215).toString(16) 
                }
            }
        })

        //Call component onMore event
        onMore()

        //Push new MoreButton
        let newButtonPos = []
        for (let i = 0; i<getRandomInt(1,4);i++)
        {
            newButtonPos.push([rndPercent(),rndPercent(),0])     
        }
        setPoses([...poses,...newButtonPos])
        
        
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
  
    return (
        <div className="ButtonsField" ref={divRef} >
            {poses.map(p => <MoreButton pos={p} onClick={() => moreClick(p)}/>)}
            
        </div>
    )
}

export default ButtonsField
