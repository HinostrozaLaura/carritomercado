import React, {Component} from "react";

class ListadoElementos extends Component{

    clickMercaderia=(item)=>{
        const{agregarAlCarrito}=this.props

        if(typeof agregarAlCarrito==='function'){
            agregarAlCarrito(item);  
        }

       
      
    }
    render(){
        const{mercaderia}=this.props
        return(
            <div>
               
                 <div>
                     {mercaderia.map((item,index)=>{

                         return(
                             <div onClick={()=>{this.clickMercaderia(item)}} key={index}>
                                 {item.nombre} -{item.cantidad}- {item.precio} soles
                                 </div>

                         )
                     })}
                 </div>
            </div>
            )
        }
   
}

export default ListadoElementos