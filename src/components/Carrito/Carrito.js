import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import "./Carrito.scss";

const Carrito = () => {

    const [Carrito, setCarrito] = useState([])
    const [MontoTotal, setMontoTotal] = useState(0)

    useEffect(() => {
        let arregloCarrito = JSON.parse(localStorage.getItem('misCompras'));
        if (arregloCarrito === null){
            arregloCarrito = []
        }
        
        let sumatoria = 0 
        arregloCarrito.map((monto) => sumatoria += monto.total )
        setCarrito(arregloCarrito);
        setMontoTotal(sumatoria)
    }, [])

    const handleSubmitPayment = () => {
        localStorage.removeItem('misCompras');
        alert('Gracias por su compra')
        window.location.href = "./Home";
    }

    return (
        <div className="container-carrito">
            <Link to="/Home">
                <button className="btnBackC">
                    <IoIosArrowBack size={25} />
                </button>
            </Link>
            <h1 className="etiqueta-carrito">Carrito</h1>
            
            {
                Carrito.length === 0 ?
                <>  
                    <div className='container-carrito-vacio'>
                        <img src="https://res.cloudinary.com/dkf2jot5c/image/upload/v1643598722/Sprint-2/imagen-carrito_mqtqmy.png" alt="" className='imagen-carrito-vacio'/>
                        <h3>No hay productos</h3>
                        <button className="btn-pagar disabled opacidad-btn-carrito">
                            <h1>Pagar</h1>
                        </button>
                    </div>
                </>
                :
                <>
                {
                    Carrito && Carrito.map((item) => (
                        <div key={item.producto.id}> 
                            <div className="container-compra">
                                <img src={item.producto.image} alt="" className="imagen-compra"/>
                                <div className="container-nombre-cantidad">
                                    {
                                        item.producto.categorias === 2 ?                                
                                        <h1 className="nombre">{item.producto.color}</h1>
                                        :
                                        <h1 className="nombre">Guajalota de {item.producto.color}</h1>
                                    }   
                                    <h1 className="cantidad">X {item.contador}</h1>
                                </div>
                                <h1 className="precio">${item.total} MXN</h1>
                            </div>                                                
                        </div>                       
                    ))}

                    <div className='container-total'>
                        <h1 className='etiqueta-total'>Total</h1>
                        <h1 className="precio-total">${MontoTotal} MXN</h1>
                    </div>

                    <button className="btn-pagar" onClick={handleSubmitPayment}>
                        <h1>Pagar</h1>
                    </button>
                </>
            }
                    
        </div>
    )
};

export default Carrito;
