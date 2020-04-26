import React, { useEffect } from 'react';

const Demo = () => {
  useEffect(() => {
    window.location.assign('http://github.com');
  }, []);

  return <div />;
};

export default Demo;
