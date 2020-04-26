import Radar from 'radar-sdk-js';
Radar.initialize('prj_live_pk_9960fa9015ec1c672178a43fa62142afc16b6aed');

const distance = async (lat1, lng1, lat2, lng2) => {
    fetch("https://api.radar.io/v1/route/distance?origin="+lat1+","+lng1+"&destination="+lat2+","+lng2+"&modes=foot,car&units=imperial", {
    headers: {
        Authorization: "prj_live_pk_9960fa9015ec1c672178a43fa62142afc16b6aed"
    }
    }).then((response) => {
        response.json().then((data) => {
            console.log(data);
            const dist = data['routes']['car']['distance']['text'];
            console.log(dist);
            return dist;
        });
    })
    //   Radar.trackOnce(function(err, { status, location, user, events }) {
    //     if (!err) {
    //       console.log(location)
    //     }
    //   });
}

export default distance;