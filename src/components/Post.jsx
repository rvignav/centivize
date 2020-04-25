import React, { Component, StrictMode } from 'react';
import { Tabs } from '@yazanaabed/react-tabs';
import { db } from '../firebase/firebase.utils.js';
import diagnose from '../diagnosis.js';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            text: '',
            gender: '',
            year: '',
            symptoms: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleChange5(event) {
        this.setState({ symptoms: event.target.value });
    }

    handleChange2(event) {
        this.setState({ text: event.target.value });
    }

    handleChange3(event) {
        this.setState({ gender: event.target.value });
    }

    handleChange4(event) {
        this.setState({ year: event.target.value });
    }

    handleSubmit(event) {
        const user = 'user';
        const title = this.state.text;
        const post = this.state.value;
        db.collection(user)
            .add({
                title,
                post,
            })
            .then(function () {
                alert(`Thanks for submitting! Your post has been recorded.`);
                console.log('DONE');
                window.location.href = '../app';
            });
        event.preventDefault();
    }

    handleSubmit2(event) {
        const user = 'user';
        const { gender } = this.state;
        const { year } = this.state;
        const { symptoms } = this.state;
        const s = symptoms.split(', ');
        for (let i = 0; i < s.length; i++) {
            s[i] = s[i].charAt(0).toUpperCase() + s[i].substring(1);
        }
        diagnose(s, gender, year).then((treatments) => {
            console.log(treatments);
            let str = '';
            for (let i = 0; i < treatments.length; i++) {
                str += `${treatments[i]} \n`;
            }
            console.log(`str: ${str}`);
            db.collection(user)
                .add({
                    title: 'Need treatment help',
                    post: str,
                })
                .then(function () {
                    alert(`Thanks for submitting! Your post has been recorded.`);
                    console.log('DONE');
                    window.location.href = '../app';
                });
        });

        // alert(`An essay was submitted: ${gender} and ${year} and ${symptoms}`);
        event.preventDefault();
    }

    render() {
        // const left = `${100}px`;
        // const top = `${100}px`;
        const width = `${500}px`;
        const height = `${500}px`;
        const marginTop = `${70}px`;
        return (
            <center>
                <div
                    className="card card-body shadow-sm mb-2"
                    style={{ width, height, marginTop }}
                >
                    <Tabs
                        activeTab={{
                            id: 'tab1',
                        }}
                    >
                        <Tabs.Tab id="tab1" title="Diagnosis">
                            <div style={{ padding: 10 }}>
                                <form onSubmit={this.handleSubmit2}>
                                    <input
                                        type="text"
                                        name="gender"
                                        placeholder="Gender"
                                        value={this.state.gender}
                                        onChange={this.handleChange3}
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <input
                                        type="text"
                                        name="year"
                                        placeholder="Year of Birth"
                                        value={this.state.year}
                                        onChange={this.handleChange4}
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <textarea
                                        value={this.state.symptoms}
                                        onChange={this.handleChange5}
                                        placeholder="Write your symptoms, separated by commas..."
                                        style={({ height: `${1000}px` }, { width: `${400}px` })}
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab id="tab2" title="Custom">
                            <div style={{ padding: 10 }}>
                                <form onSubmit={this.handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Title"
                                        value={this.state.text}
                                        onChange={this.handleChange2}
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <textarea
                                        value={this.state.value}
                                        placeholder="Write your post here..."
                                        onChange={this.handleChange}
                                        style={({ height: `${1000}px` }, { width: `${400}px` })}
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </Tabs.Tab>
                    </Tabs>
                </div>
            </center>
        );
    }
}
