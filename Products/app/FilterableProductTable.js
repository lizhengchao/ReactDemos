/**
 * Created by lizc on 2016/12/16.
 */
import React from 'react'

export default class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <ProductTable productData={this.props.productData}/>
            </div>
        )
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search.."/>
                <br/>
                <input type="checkbox"/> Only show products in stock
            </form>
        )
    }
}

class ProductTable extends React.Component {
    render(){
        var rows = [],
            currCategory = '';
        this.props.productData.forEach(function(product){
            if(currCategory !== product.category){
                rows.push(
                    <ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>
                )
            }
            rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
            currCategory = product.category;
        })
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
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}