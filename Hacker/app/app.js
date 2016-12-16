/**
 * Created with JetBrains WebStorm.
 * User: lizc
 * Date: 16-12-15
 * Time: 上午10:11
 * To change this template use File | Settings | File Templates.
 */
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewList from './NewList.js';
import './app.css';


function get(url) {
    return Promise.resolve($.ajax(url));
}

get('https://hacker-news.firebaseio.com/v0/topstories.json').then( function(stories) {
    return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
}).then(function(items) {
    render(<NewList items={items} />, $('#content')[0]);
}).catch(function(err) {
    console.log('error occur', err);
});