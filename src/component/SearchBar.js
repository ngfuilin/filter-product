import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
        <div>
            <input type='text' 
                name='filterText' 
                placeholder='search...' 
                value={this.props.filterText} 
                onChange={this.props.handleTextChange}>
            </input>
            <br/>
            <input type="checkbox" 
                checked={this.props.inStockOnly} 
                onChange={this.props.handleCheckboxChange}/>
            <span>Only show products in stock</span>   
        </div>
        )
    }
}

export default SearchBar;
