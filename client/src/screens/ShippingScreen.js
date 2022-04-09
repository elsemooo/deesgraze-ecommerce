import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/cartActions";

const ShippingScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [pais, setPais] = useState(shippingAddress.pais);
  const [nombre_completo, setNombre_completo] = useState(shippingAddress.nombre_completo);
  const [direccion, setDireccion] = useState(shippingAddress.direccion);
  const [ciudad, setCiudad] = useState(shippingAddress.ciudad);
  const [provincia, setProvincia] = useState(shippingAddress.provincia);
  const [celular, setCelular] = useState(shippingAddress.celular);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ pais, nombre_completo, direccion, ciudad, provincia, celular }));
    history.push("/payment");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login shippingScreen col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>Direccion de envio</h6>
          <input
            type="text"
            placeholder="Pais"
            value={pais}
            required
            onChange={(e) => setPais(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre_completo}
            required
            onChange={(e) => setNombre_completo(e.target.value)}
          />
          <input
            type="text"
            className="large-text"
            placeholder="Direccion fisica, apartamento, unidad, piso"
            value={direccion}
            required
            onChange={(e) => setDireccion(e.target.value)}
          />
          <input
            type="text"
            placeholder="Departamento. ej: lima"
            value={provincia}
            required
            onChange={(e) => setProvincia(e.target.value)}
          />
          <input
            type="text"
            placeholder="Distrito. ej: comas"
            value={ciudad}
            required
            onChange={(e) => setCiudad(e.target.value)}
          />
          <input
            type="text"
            placeholder="Numero de celular"
            value={celular}
            required
            onChange={(e) => setCelular(e.target.value)}
          />
          <button type="submit">Continuar</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
