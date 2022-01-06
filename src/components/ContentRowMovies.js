import React from "react";
import SmallCard from "./SmallCard";

let productInDataBase = {
  color: "primary",
  titulo: "Products in Data Base",
  valor: 4,
  icono: "fa-solid fa-shop",
};

let user = {
  color: "warning",
  titulo: "Users quantity",
  valor: 5,
  icono: "fas fa-user",
};

let cardProps = [productInDataBase, user];

function ContentRowTop() {
  return (
    <React.Fragment>
      {/*<!-- Content Row -->*/}
      <div className="row">
        {cardProps.map((producto, index) => {
          return <SmallCard {...producto} key={index} />;
        })}
      </div>
    </React.Fragment>
  );
}
export default ContentRowTop;
