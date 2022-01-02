import { createContext, useState } from "react";


export const OptionContext=createContext();

export const  OptionProvider=(props)=>{

    const [option,setOption]=useState(1);
    return(<OptionContext.Provider value={[option,setOption]}>
            {props.children}
    </OptionContext.Provider>
        );
}