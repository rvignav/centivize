const recommend = async () => {
  fetch('https://us-central1-hack-now-28797.cloudfunctions.net/similarity', {
    body: '{"par1":"Hello", "par2":"Goodbye"}',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }.then((response) => {
      response.json().then(data => {
        console.log(data);
      });
  });
};

export default recommend;
