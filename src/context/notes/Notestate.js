import react from 'react'
import Notecontext from "./notecontext";
import { useState } from 'react';

const Notestate = (props) =>{
    const s1 = {
        "name": "krushna",
        "class": "10A"
    }
    const [state, setState] = useState(s1);
    const update = () =>{
        setTimeout(() => {
            setState({
                "name": "atharva",
                "class": "10b"
            });
        }, 3000);
    };
    return(
        <Notecontext.Provider value={{ state, update }}>
            {props.children}
        </Notecontext.Provider>
    )
}

export default Notestate