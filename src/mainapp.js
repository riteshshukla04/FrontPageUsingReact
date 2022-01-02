import { useContext } from "react"
import App from "./App"
import Background from "./Components/Background/background"
import { OptionContext } from "./Components/OptionContext"

export const MainApp=()=>{
    const [option,setOption]=useContext(OptionContext);
    setOption(option);
  
    return(
        <Background option={option}> 
            <App></App>
        </Background>
    )

}