import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./BtnBag.css"

export const VerPedido = ({id})=>{
console.log(id , "mesaaaa buton bag ver pedido")

    let {favProd} =useSelector((state) => state.alldata);
    return(
        <div className="goBag">
          { favProd.length===0? <p></p>:
          <NavLink className="btnGoBag" to={`/${id}/Bag`}>
             <p className="pedido">Ver pedido <b className="cantidad">{favProd.length}</b></p> 
          </NavLink>
            }
        </div>
    )
}