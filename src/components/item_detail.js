import React from 'react';
import itemsJSON from './data/inventory.json';

const ItemDetail = ({item}) => {

  const link = item.result;

  if (!link) {
    return <div></div>;
  }

  let id = link.substr(-36);

  let matchedItem = itemsJSON.find(function(item) {
    return item.uuid === id;
  });

  if (matchedItem) {
    return (
      <div className="items">
        {Object.keys(matchedItem).map(function(key) {
          return <li key={key}>
            <strong>{key}</strong>: {matchedItem[key]}</li>;
        })
}
      </div>

    )
  } else {
    return <div>Not found</div>
  }

};

export default ItemDetail;
