import React from 'react';
import itemsJSON from './data/inventory.json';
import uuid from 'uuid-regexp';

const ItemDetail = ({item}) => {



  const link = item.result;



  if (!link) {
    return <div></div>;
  }

  let id = uuid().exec(link)[0];


  let matchedItem = itemsJSON.find(function(item) {
    if (uuid().test(item.uuid)) {
      return uuid().exec(item.uuid)[0] === id;
    } else {
      return null;
    }
  });

  if (matchedItem) {
    return (
      <div className="items">
        {Object.keys(matchedItem).map(function(key) {
          return <li key={key}>
            <strong>{key}</strong>: {matchedItem[key]}</li>;
        })}
      </div>

    )
  } else {
    return <div>Not found</div>
  }

};

export default ItemDetail;
