import './background.css'

export default function Background(props){
    const style={
        "background-image": `url('https://i.pinimg.com/originals/ae/a4/d6/aea4d61eefe73e341660ec17118ec0fe.jpg')`
   
       
    }
    const style2={
        "background-image": `url('https://firebasestorage.googleapis.com/v0/b/frontpagesjs.appspot.com/o/Layer%201.png?alt=media&token=d840af3e-58eb-434c-8f9f-c3eda2340973')`
    }
    
    var Mainstyle=style2
    
    if(props.option==="0"){
        
        Mainstyle=style
    }
    else{
        Mainstyle=style2
    }
    return (
        <page style={Mainstyle}>
            {props.children}
        </page>
    )
}
