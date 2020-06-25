import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';


export default class AppTopbar extends Component {


    render() {
        return (
            <div >
                <button className="p-link layout-menu-button" >
                    <span className="pi pi-bars" style={{marginright: '200px'}}/>
                </button>
            </div>
        );
    }
}
