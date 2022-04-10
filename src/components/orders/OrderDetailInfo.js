import React from "react";

const OrderDetailInfo = (props) => {
  const { order } = props;
  return (
    <div className="row mb-5 order-info-wrap">
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-user"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Usuario</h6>
            <p className="mb-1">
              {order.user.name} <br />
              <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-truck-moving"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Informacion de pedido</h6>
            <p className="mb-1">
              Direccion: {order.shippingAddress.provincia} <br /> Metodo de pago:{" "}
              {order.paymentMethod}
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-map-marker-alt"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Enviar a</h6>
            <p className="mb-1">
              Direccion: {order.shippingAddress.pais}
              <br />
              {order.shippingAddress.provincia}
              <br /> {order.shippingAddress.ciudad}
              <br /> {order.shippingAddress.direccion}
              <br /> {order.shippingAddress.nombre_completo}
              <br /> {order.shippingAddress.celular}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OrderDetailInfo;
