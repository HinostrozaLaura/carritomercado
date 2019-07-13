import React,{Component} from "react";
import ListadoElementos from "./ListadoElementos"

const arregloMercado=[
    {id:1, nombre:"JABON",cantidad:"5",precio:24 },
    {id:2, nombre:"SHAMPO",cantidad:"5",precio:20 },
    {id:3, nombre:"CEPILLO",cantidad:"1",precio:5 },
    {id:4, nombre:"ARROZ",cantidad:"2 kilos",precio:8},
    {id:5, nombre:"AZUCAR",cantidad:"3 kilos",precio:10},
    {id:6, nombre:"PAPA",cantidad:"8 kilos",precio:58},
    {id:7, nombre:"DETERGENTE",cantidad:"1 grande",precio:36},
    {id:8, nombre:"SAL",cantidad:"1",precio:1.8},
    {id:9, nombre:"FOSFORO",cantidad:"1 caja ",precio:4},
    {id:10, nombre:"PASTA DE DENTAL",cantidad:"4 ",precio:17},
    {id:11, nombre:"OREGANO DEL BUENO",cantidad:"1 kilo ",precio:10},
]

class Contenedor extends Component{

    constructor(){
        super()
        this.state={
            listamercado:arregloMercado,
            listaCarrito:[]
        }
    }
    escribiendo=(evento)=>{
       // console.log("escribiendo",evento.target.value)
        const texto=evento.target.value;
        this.filtrar(texto)
    }

    filtrar=(texto)=>{
        const listadoFiltrado=[];
       for(let i=0;i<arregloMercado.length;i++){
           const mercaderia=arregloMercado[i];
           if(mercaderia.nombre.toLowerCase().startsWith(texto.toLowerCase())){
               listadoFiltrado.push(mercaderia);
           }
       }
       this.setState({listamercado:listadoFiltrado})
    }

    agregarAlCarrito=(mercaderia)=>{
        const{listaCarrito  }=this.state
        listaCarrito.push(mercaderia);
        let preciototal=0;
        listaCarrito.forEach((item)=>{
            preciototal+=item.precio
        })
        this.setState({listaCarrito,total:preciototal})
    }
    render(){

        const{listamercado,listaCarrito, total}=this.state
        return(
         <div>
                Carrito de compras 
            
            <div  className="total"style={{display:'flex', flexDirection:'row'}}>
                  
               <div className="filtro" style={{flex:1}}>
               <div>
                    <input  onChange={this.escribiendo}/>
                </div>

                <ListadoElementos agregarAlCarrito={this.agregarAlCarrito} mercaderia={listamercado} />

               </div>
              
               <div   style={{flex:1}}>
                   Carrito de compras

                   <div>
                       Total:{total}
                   </div>
                   <ListadoElementos mercaderia={listaCarrito} />
               </div>
            </div>
            <div className ="nombrem" >
                     Mercado Mass ... Mas serca a tu hogar 
                   </div>
         </div>

        )
    }
}

export default Contenedor