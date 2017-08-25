import React from 'react';
import itemsJSON from './data/inventory.json';

const ItemDetail = ({item}) => {

  const link = item.result;

  if (!link) {
    return <div></div>;
  }

  let id = link.substr(27);

  let matchedItem = itemsJSON.find(function(item) {
    let fullId = id.substr(0,8) + ' ' + id;
    return item.uuid === id || item.uuid === fullId;
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
