import React from 'react';
import { save_file, load_file } from './api/savefile';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disableButtons: false
        }
        this.saveHandler = this.saveHandler.bind(this);
        this.loadHandler = this.loadHandler.bind(this);
    }
    async saveHandler(event) {
        var data = {
            studentName: 'sarah'
        }
        this.setState({
            ...this.state,
            disableButtons: true
        })
        await save_file(data, "/api/savefile");
        await this.setState({
            ...this.state,
            disableButtons: false
        })
    }
    async loadHandler(event) {
        await this.setState({
            ...this.state,
            disableButtons: true
        })
        var result = await load_file("/api/savefile");
        await this.setState({
            ...this.state,
            disableButtons: false
        })
    }
    render() {
        return (
        <div>
            <button disabled={this.state.disableButtons} onClick={this.saveHandler}>
                Save
            </button>
            <button disabled={this.state.disableButtons} onClick={this.loadHandler}>
                Load
            </button>
        </div>)

    }
}
export default AppComponent;