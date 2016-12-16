import React from 'react';
import NewItem from './NewItem.js';
import NewHeader from './NewHeader.js';

export default class NewList extends React.Component {

    render() {
        return (
            <div className="newsList">
                <NewHeader />
                <div className="newsList-newsItem">
            {
                (this.props.items).map(function(item, index) {
                    return (
                        <NewItem key={item.id} item={item} rank={index+1} />
                    );
                })
                }
                </div>
            </div>
        )
    }
}