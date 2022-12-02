import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsBag } from "./CardsBag/CardsB";
import { Nav } from "../Nav/Nav";
import "./myBag.css";
import { asyncOrder } from "../redux/slice";

export const Bag = (id) => {
  const dispatch = useDispatch()
console.log(id.match.params.id , "id tiene que ser solo numero sin barra")

  let { favProd } = useSelector((state) => state.alldata);

  const [pago, setPago] = useState({
    payment:""
  })

const [order, setOrder] = useState({
  pedido:"",
  description:"",
  mesa:"",
  price:"",
  status:true
})
console.log(order, "pedido post")

const sendComanda=()=>{
  setOrder({
    pedido: favProd.map(x=> x.name).join(),
    description: "aprovado",
    mesa: id.match.params.id,
    price: total,
    status: true
  })
  console.log(order,"esto es la info del post")
  dispatch(asyncOrder(order))
}


  const metodoPago = function handbleOnMethod (e){
    setPago({
        payment:e.target.value
    })

}
let result = favProd.filter((item,index)=>{
    return favProd.indexOf(item) === index;
  })

  const valores = favProd.map((e) => parseInt(e.price, 10));
  let total = valores.reduce((a, b) => a + b, 0);

  return (
    <div className="backBag">
      <Nav id={id.match.params.id} />
     
      <div className="contBag">
        <CardsBag products={result} />
      </div>
      {isNaN(id.match.params.id) === true? (
        <p className="textNoMesa">
          <svg
            className="warning"
            width="24"
            height="24"
            viewBox="0 0 673 591"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M666.72 533.147C653.73 510.491 391.373 57.7336 368.933 19.0803C354.188 -6.28903 319.048 -5.87303 304.288 19.0803C287.829 46.8976 24.1413 501.387 5.80798 534.294C-7.62402 558.398 7.21424 590.012 37.7813 590.012H634.568C662.323 590.012 682.959 561.408 666.724 533.138L666.72 533.147ZM336.667 530.272C316.052 530.272 299.333 513.564 299.333 492.939C299.333 472.313 316.052 455.605 336.667 455.605C357.292 455.605 374 472.313 374 492.939C374 513.564 357.292 530.272 336.667 530.272ZM359.068 410.808C359.068 425.74 351.599 433.209 336.667 433.209C321.734 433.209 314.265 425.741 314.265 410.808L291.864 194.275C291.864 171.873 306.796 149.472 336.667 149.472C366.531 149.472 381.469 171.873 381.469 194.275L359.068 410.808Z"
              fill="#F7B217"
            />
          </svg>
          Para realizar tu pedido por este medio debes encontrarte en alguna
          mesa{" "}
          <svg
            className="warning"
            width="24"
            height="24"
            viewBox="0 0 673 591"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M666.72 533.147C653.73 510.491 391.373 57.7336 368.933 19.0803C354.188 -6.28903 319.048 -5.87303 304.288 19.0803C287.829 46.8976 24.1413 501.387 5.80798 534.294C-7.62402 558.398 7.21424 590.012 37.7813 590.012H634.568C662.323 590.012 682.959 561.408 666.724 533.138L666.72 533.147ZM336.667 530.272C316.052 530.272 299.333 513.564 299.333 492.939C299.333 472.313 316.052 455.605 336.667 455.605C357.292 455.605 374 472.313 374 492.939C374 513.564 357.292 530.272 336.667 530.272ZM359.068 410.808C359.068 425.74 351.599 433.209 336.667 433.209C321.734 433.209 314.265 425.741 314.265 410.808L291.864 194.275C291.864 171.873 306.796 149.472 336.667 149.472C366.531 149.472 381.469 171.873 381.469 194.275L359.068 410.808Z"
              fill="#F7B217"
            />
          </svg>
        </p>
      ) : (
        <div>
        <select 
        className="selectP"
        onChange={metodoPago}
        value={pago.payment}
        >
          <option  hidden disabled selected value={""}>Como pagas?</option>
          <option>Efectivo</option>
          <option>Tarjeta</option>
          <option>QR</option>
        </select>
        {/* <a
          href={`http://wa.me/542915729501?text=Hola Franco Mensaje de mi pedido ➤ ${favProd.map(
            (e) => e.name + "$" + e.price + ", "
          )} Total = $ ${total}, "${pago.payment}" , estamos en la mesa ${id.match.params.id}`}
          rel="noreferrer"
          target="_blank"
        > */}
          <button className="btnWssp" onClick={sendComanda}>Enviar Pedido <svg width="16" height="16" viewBox="0 0 665 660" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M501.92 250.307C501.92 112.187 389.556 0.23999 251.44 0.23999C113.32 0.245198 0.946289 112.824 0.946289 250.947C0.946289 301.535 15.7583 349.873 43.905 391.347L3.20229 471.456C-0.0685091 477.878 0.238689 484.727 4.00958 490.868C7.78038 497.019 14.468 499.946 21.6869 499.946H251.447C389.567 499.946 501.927 388.425 501.927 250.306L501.92 250.307ZM84.6263 377.119C57.0063 340.608 42.4076 297.051 42.4076 251.16C42.4076 135.905 136.173 42.1333 251.434 42.1333C366.689 42.1333 460.461 132.931 460.461 248.187C460.461 363.443 366.701 454.24 251.434 454.24H55.4743L86.5676 396.052C90.1718 388.979 89.4166 383.443 84.6354 377.12L84.6263 377.119ZM662.133 633.972C665.404 640.404 665.097 645.977 661.326 652.123C657.555 658.268 650.867 659.946 643.648 659.946H413.902C331.396 659.946 254.195 621.378 207.368 553.284C200.879 543.857 203.269 531.987 212.702 525.498C222.139 519.008 235.051 521.529 241.53 530.961C280.612 587.795 345.046 621.852 413.903 621.852H609.85L578.756 561.081C575.163 554.008 575.913 545.707 580.699 539.373C608.308 502.863 622.918 459.404 622.918 413.509C622.918 344.061 588.532 279.363 530.939 240.363C521.455 233.946 518.975 221.081 525.403 211.592C531.819 202.113 544.709 199.639 554.195 206.061C623.195 252.79 664.383 330.373 664.383 413.594C664.383 464.193 649.571 512.422 621.424 553.901L662.133 633.972ZM230.706 145.665C230.706 134.212 239.988 126.619 251.436 126.619H354.894C366.337 126.619 375.624 134.212 375.624 145.665C375.629 157.118 366.337 164.712 354.894 164.712H251.436C239.983 164.712 230.706 157.118 230.706 145.665ZM127.253 244.712C127.253 233.259 136.534 225.665 147.982 225.665H354.889C366.332 225.665 375.618 233.259 375.618 244.712C375.624 256.165 366.332 263.759 354.889 263.759H147.982C136.534 263.759 127.253 256.165 127.253 244.712ZM127.253 343.759C127.253 332.306 136.534 324.712 147.982 324.712H354.889C366.332 324.712 375.618 332.306 375.618 343.759C375.618 355.201 366.332 362.805 354.889 362.805H147.982C136.534 362.805 127.253 355.201 127.253 343.759Z" fill="black"/>
</svg></button>
        {/* </a>{" "} */}
      </div>
      )}
    </div>
  );
};
