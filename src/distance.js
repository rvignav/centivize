import Radar from 'radar-sdk-js';
Radar.initialize('prj_live_pk_9960fa9015ec1c672178a43fa62142afc16b6aed');

const distance = async (lat1, lng1, lat2, lng2) => {
    // Radar.getDistance({
    //     origin: {
    //       latitude: lat1,
    //       longitude: lng1
    //     },
    //     destination: {
    //       latitude: lat2,
    //       longitude: lng2
    //     },
    //     modes: ['car'],
    //     units: 'imperial'
    //   }).then((result) => {
    //     console.log(result.routes);
    //   }).catch((err) => {
    //     // optionally, do something with err
    //   });
    Radar.trackOnce(function(err, { status, location, user, events }) {
        if (!err) {
          console.log(location)
        }
      });
    const dist = 0;
    return dist;
}

export default distance;