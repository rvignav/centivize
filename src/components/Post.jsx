import React, { Component } from 'react';
import { Tabs } from '@yazanaabed/react-tabs';
import Box from '@material-ui/core/Box';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert(`An essay was submitted: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <div className="card card-body shadow-sm mb-2">
                <Tabs
                    activeTab={{
                        id: 'tab1',
                    }}
                >
                    <Tabs.Tab id="tab1" title="Tab 1">
                        <div style={{ padding: 10 }}>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Essay:
                  <textarea
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </Tabs.Tab>
                    <Tabs.Tab id="tab2" title="Tab 2">
                        <div style={{ padding: 10 }}>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Essay:
                  <textarea
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </Tabs.Tab>
                </Tabs>
            </div>
        );
    }
}
