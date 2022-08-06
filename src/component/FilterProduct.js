import React from "react";
import DisplayProduct from "./DisplayProduct";

class FilterProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterText: '', inStockOnly: true};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleTextChange = (event) => {
        this.setState({filterText: event.target.value});
    }

    handleCheckboxChange = (event) => {
        this.setState({inStockOnly: event.target.checked });
    }

    render() {
        const searchText = this.state.filterText;
        const chkinStockOnly = this.state.inStockOnly;
        return (
            <div>
                <input type='text' name='filterText' placeholder='search...' value={this.state.filterText} onChange={this.handleTextChange}></input>
                <br/>
                <input type="checkbox" checked={this.state.inStockOnly} onChange={this.handleCheckboxChange}/>
                <span>Only show products in stock</span>
                <DisplayProduct 
                    products={this.props.products}
                    input = {searchText} 
                    stocked = {chkinStockOnly}/>
            </div>
        );
        
    }
}

export default FilterProduct;