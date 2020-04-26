import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Tabs } from '@yazanaabed/react-tabs';
import { db } from '../../firebase/firebase.utils.js';
import diagnose from '../../diagnosis.js';
import { useUid } from '../../hooks/auth.js';

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
    // const user = useUid()[0];
    // console.log(user);
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
        window.location.reload();
      });
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
          window.location.reload();
        });
    });

    // alert(`An essay was submitted: ${gender} and ${year} and ${symptoms}`);
    event.preventDefault();
  }

  render() {
    return (
      <center>
        <div className="container">
          <Tabs
            activeTab={{
              id: 'tab1',
            }}
          >
            <Tabs.Tab id="tab1" title="Diagnosis">
              <div className="pt-3">
                <form onSubmit={this.handleSubmit2} className="form">
                  <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    className="form-control mb-2"
                    value={this.state.gender}
                    onChange={this.handleChange3}
                  />
                  <input
                    type="text"
                    name="year"
                    placeholder="Year of Birth"
                    className="form-control mb-3"
                    value={this.state.year}
                    onChange={this.handleChange4}
                  />
                  <textarea
                    value={this.state.symptoms}
                    onChange={this.handleChange5}
                    placeholder="Write your symptoms, separated by commas..."
                    className="form-control pb-5 mb-3"
                  />
                  <input
                    type="text"
                    placeholder="How long ago did these symptoms first appear?"
                    className="form-control mb-3"
                  />
                  <input
                    type="text"
                    placeholder="What is the duration of the symptoms (constant, few minutes in the day, etc.)?"
                    className="form-control mb-3"
                  />
                  <input
                    type="text"
                    placeholder="How do the symptoms affect daily activities?"
                    className="form-control mb-3"
                  />
                  <input
                    type="text"
                    placeholder="What medical conditions were/are you diagnosed with?"
                    className="form-control mb-3"
                  />
                  <input
                    type="text"
                    placeholder="What past treatments have you tried (medications, hot pack, ice, etc.) and how did they affect you?"
                    className="form-control mb-3"
                  />
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                  />
                </form>
              </div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Custom">
              <div>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Title"
                    className="form-control mt-3 mb-2"
                    value={this.state.text}
                    onChange={this.handleChange2}
                  />
                  <textarea
                    value={this.state.value}
                    className="form-control mb-3 pb-5"
                    placeholder="Write your post here..."
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                  />
                </form>
              </div>
            </Tabs.Tab>
          </Tabs>
        </div>
      </center>
    );
  }
}
