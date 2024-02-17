import React,{ useState } from "react";
import "../app.css"

function Item(props){
    
    const [style,stylechange] =useState("items");
    function change(){
        if(style==="items"){
            stylechange("crossed")
        }
        else{
            stylechange("items")
        }
    }
    return(
        <div onClick={change}className={style}>
           <h2>☉</h2>
          <h2>{props.content}</h2>
          
        </div>
    )
}
export default Item;