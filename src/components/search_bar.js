import React, {Component} from 'react';
import itemsJSON from './data/inventory.json';
import './../App.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shortId: '',
      matchedItem: {}
    };
  }

  render() {

    let newItem = this.state.matchedItem;

    return (
      <div className="search-bar">
        <input placeholder="Search by UUID" value={this.state.shortId} onChange={event => this.onInputChange(event.target.value)}/>
        <div className="items">

          {Object.keys(newItem).map(function(key) {
            return <li key={key}>
              <strong>{key}</strong>: {newItem[key]}</li>;
          })}

        </div>
      </div>
    );
  }

  onInputChange(shortId) {
    this.setState({shortId});
    let that = this;

    itemsJSON.filter(function(item) {

      let uuid = item.uuid;

      if (uuid) {
        if (uuid.substr(0, 8).toLowerCase() === shortId.toLowerCase()) {
          // that.setState({matchedItem: item});
          that.props.uuidFromCamera(uuid);
        }
      }
      return "something";
    });
  }

}

export default SearchBar;
