import React from "react";
import Genre from "./Genre";

let genres = [
  { genre: "Natación" },
  { genre: "Carrera" },
  { genre: "Ciclismo" },
];

function GenresInDb() {
  return (
    <React.Fragment>
      {/*<!-- Categories in DB -->*/}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              Categories in Data Base
            </h6>
          </div>
          <div className="card-body">
            <div className="center">
              {genres.map((genre, index) => {
                return <Genre {...genre} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default GenresInDb;
