/**
 * Created by lizc on 2016/12/16.
 */
import React from 'react'

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            isShowInStockOnly: true
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(searchText, isShowInStockOnly) {
        this.setState({
            searchText: searchText,
            isShowInStockOnly: isShowInStockOnly
        })
    }
    render() {
        return (
            <div>
                <SearchBar searchText={this.state.searchText} isShowInStockOnly={this.state.isShowInStockOnly} updateState={this.updateState}/>
                <ProductTable productData={this.props.productData} searchText={this.state.searchText} isShowInStockOnly={this.state.isShowInStockOnly}/>
            </div>
        )
    }
}

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.props.updateState(this.refs.filterTextInput.value, this.refs.inStockOnlyInput.checked);
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="Search.." value={this.props.searchText} ref="filterTextInput" onChange={this.onChange}/>
                <br/>
                <input type="checkbox" checked={this.props.isShowInStockOnly} ref="inStockOnlyInput" onChange={this.onChange}/> Only show products in stock
            </form>
        )
    }
}

class ProductTable extends React.Component {
    render(){
        var rows = [],
            currCategory = '';
        this.props.productData.forEach(function(product){
            if((this.props.isShowInStockOnly && !product.stocked)
                || (this.props.searchText && product.name.indexOf(this.props.searchText) == -1)){
                return;
            }
            if(currCategory !== product.category){
                rows.push(
                    <ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>
                )
            }
            rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
            currCategory = product.category;
        }.bind(this))
        return (
            <table>
                <thead>
                    <tr>
                        <td> Name </td>
                        <td> Price </td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render(){
        return (
            <tr>
                <td colSpan="2">{this.props.category}</td>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        var name = '';
        if(!this.props.product.stocked){
            name = <span style={{color: 'red'}}>{this.props.product.name}</span>;
        } else {
            name = this.props.product.name;
        }
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}