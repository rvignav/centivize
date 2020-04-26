import React, { Component, useEffect, useState } from 'react';
import { Tabs } from '@yazanaabed/react-tabs';

import SearchInfo from './SearchInfo';
import PostFeed from '../posts/PostFeed';

import dummyData from '../../dummyposts';
import distance from '../../distance.js';

const Search = () => {
  const [sortMethod, setSortMethod] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);

//   const []

  useEffect(
    () =>
      console.log(
        `FINAL DIST: ${distance(40.78382, -73.97536, 40.7039, -73.986909)}`,
      ),
    [],
  );

  const loadPosts = () => {
    return dummyData;
  };

  const toggleSetting = (setting) => {
    setSortMethod(setting);
  };

  const sortPosts = () => {
    console.log('filtering posts');
  };

  const filterTextUpdate = (text) => {
    setSearchQuery(text);
    sortPosts();
  };

  return (
    <div>
      <div className="container-fluid search-upper">
        <SearchInfo
          sort={sortMethod}
          toggleSetting={toggleSetting}
          filterTextUpdate={filterTextUpdate}
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
};

export default Search;
