import React from 'react';

function ProductListItem(props) {
  return (
    <div className="card d-flex col-3 mx-1 my-2">
      <div className="row col">
        <img className="card-img-top m-4" src={props.image} style= {{ width: '200px', height: '180px' }}alt="Card image cap"></img>
      </div>
      <div className="row col">
        <div className="card-body">
          <h5 className="card-title" onClick={() => props.setView('details', { id: props.id })}>{props.name}</h5>
          <p className="card-text">${((props.price / 100).toFixed(2))}</p>
          <p className="card-text">{props.shortDescription}</p>
        </div>
      </div>
      <p className="card-text">{props.longDescription}</p>
    </div>
  );
}

export default ProductListItem;
