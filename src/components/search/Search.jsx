import React, { Component, useEffect, useState } from 'react';
import { Tabs } from '@yazanaabed/react-tabs';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SearchInfo from './SearchInfo';
import PostFeed from '../posts/PostFeed';
import dummyData from '../../dummyposts';
import distance from '../../distance';
import diagnose from '../../diagnosis';
import { db, datab } from '../../firebase/firebase.utils';

const Search = () => {
  const [sortMethod, setSortMethod] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);

  const [postDocs, loadingPostDocs] = useCollectionData(db.collection('posts'));

  // if (!loadingPostDocs) {
  //   setPosts(
  //     postDocs.map((postDoc) => {
  //       console.log(postDoc);
  //     }),
  //   );
  // }

  useEffect(
    () =>
      console.log(
        `FINAL DIST: ${distance(40.78382, -73.97536, 40.7039, -73.986909)}`,
      ),
    [],
  );
  const loadPosts = () => {
    datab.ref('posts').on('value', (snapshot) => {
      const val = snapshot.val();
      const keys = Object.keys(val);
      keys.forEach((key) => {
        const year = 2020 - val[key].fields.age;
        let { gender } = val[key].fields;
        gender = gender.charAt(0).toUpperCase() + gender.substring(1);
        const symptoms = val[key].fields.symptoms.split(' ');
        for (let i = 0; i < symptoms.length; i++) {
          symptoms[i] =
            symptoms[i].charAt(0).toUpperCase() + symptoms[i].substring(1);
        }
        console.log(gender);
        console.log(year);
        console.log(symptoms);
        diagnose(symptoms, gender, year).then((response) => {
          const issues = response[0];
          const treatments = response[1];
          console.log(treatments);
          let str = '';
          for (let i = 0; i < treatments.length; i++) {
            str += `${issues[i]}: ${treatments[i]} \n`;
          }
          console.log(`str: ${str}`);
          let address;
          db.collection(`posts`).add({
            title: 'Need treatment help',
            message: str,
            type: 'diagnosis',
            timePosted: new Date(),
          });
        });
      });
    });
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
