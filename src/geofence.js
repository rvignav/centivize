import Radar from 'radar-sdk-js';
Radar.initialize('prj_live_pk_9960fa9015ec1c672178a43fa62142afc16b6aed');

const geofence = async (lat, lng, radius, desc) => {
    fetch("https://api.radar.io/v1/geofences?description="+desc+"&type=circle&coordinates=["+lng+","+lat+"]&radius="+radius, {
    headers: {
        Authorization: "prj_live_pk_9960fa9015ec1c672178a43fa62142afc16b6aed"
    }
    })
}

export default geofence