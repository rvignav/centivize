import React, { Component } from 'react';
import { Tabs } from '@yazanaabed/react-tabs';

import SearchInfo from './SearchInfo';
import PostFeed from '../posts/PostFeed';

import dummyData from '../../dummyposts';
import distance from '../../distance.js';

export class Search extends Component {
  constructor() {
    super();
    const posts = this.loadPosts();
    this.state = {
      sort: 'date',
      filterText: '',
      posts,
    };
  }

  componentDidMount() {
    console.log(
      `FINAL DIST: ${distance(40.78382, -73.97536, 40.7039, -73.986909)}`,
    );
  }

  loadPosts = () => {
    return dummyData;
  };

  toggleSetting = (setting) => {
    this.setState({ sort: setting });
  };

  filterTextUpdate = (text) => {
    this.setState({ filterText: text });
    this.sortPosts();
  };

  sortPosts = () => {
    console.log('filtering posts');
  };

  render() {
    const { sort, posts } = this.state;

    return (
      <div>
        <div className="container-fluid search-upper">
          <SearchInfo
            sort={sort}
            toggleSetting={this.toggleSetting}
            filterTextUpdate={this.filterTextUpdate}
          />
        </div>
        <div className="container search-lower">
          <Tabs
            activeTab={{
              id: 'list-tab',
            }}
          >
            <Tabs.Tab id="list-tab" title="List">
              <div className="pt-3">
                <PostFeed posts={posts} />
              </div>
            </Tabs.Tab>
            <Tabs.Tab id="map-tab" title="Map">
              <div />
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Search;
