import React from 'react';
import headerLogo from './y18.gif';
import './NewHeader.css';

export default class NewHeader extends React.Component {
    getLogo() {
        return (
            <div className="newsHeader-logo">
                <a href="/build/index.html"><img src={headerLogo}/></a>
            </div>
        )
    }
    getTitle() {
        return (
            <div className="newsHeader-title">
                <a className="newsHeader-textLink" href="/build/index.html">Hacker News</a>
            </div>
        )
    }
    getNav() {
        var navLinks = [
            {
                name: 'new',
                url: 'newest'
            },
            {
                name: 'comments',
                url: 'newcomments'
            },
            {
                name: 'show',
                url: 'show'
            },
            {
                name: 'ask',
                url: 'ask'
            },
            {
                name: 'jobs',
                url: 'jobs'
            },
            {
                name: 'submit',
                url: 'submit'
            }
        ];
        return (
            <div className="newsHeader-nav">
            {
                navLinks.map(function(navLink){
                    return (
                        <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={"/build/index.html/"+ navLink.url}>
                                {navLink.name}
                        </a>
                    )
                })
            }
            </div>
        )
    }
    render() {
        return (
            <div className="newsHeader">
                {this.getLogo()}
                {this.getTitle()}
                {this.getNav()}
            </div>
        )
    }
}