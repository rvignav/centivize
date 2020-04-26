const recommend = async () => {
  const functionEndpoint =
    'https://us-central1-hack-now-28797.cloudfunctions.net/similarity';
  fetch(functionEndpoint)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(`Err is:${err}`);
    });
};

export default recommend;
