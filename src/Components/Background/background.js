import './background.css'

export default function Background(props,option){
    const style={
        "background-image": `url('https://i.pinimg.com/originals/ae/a4/d6/aea4d61eefe73e341660ec17118ec0fe.jpg')`
   
       
    }
    const style2={
        "background-image": `url('./Layer 1.png')`
    }
    var Mainstyle=style2
   switch(option){
       case 0:
            Mainstyle=style
            break
        case 1:
            Mainstyle=style2
            break
        default:
            Mainstyle=style
            break
   }
    return (
        <page style={Mainstyle}>
            {props.children}
        </page>
    )
}
