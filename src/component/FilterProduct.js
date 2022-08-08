import React from "react";
import DisplayProduct from "./DisplayProduct";
import SearchBar from "./SearchBar";

class FilterProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterText: '', inStockOnly: false};
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
                <SearchBar filterText={searchText} 
                    inStockOnly={chkinStockOnly}
                    handleTextChange = {this.handleTextChange}
                    handleCheckboxChange = {this.handleCheckboxChange}/>
                <DisplayProduct 
                    products={this.props.products}
                    input = {searchText} 
                    stocked = {chkinStockOnly}/>
            </div>
        );
        
    }
}

export default FilterProduct;