import Radar from 'radar-sdk-js';
import { db } from './firebase/firebase.utils.js';

Radar.initialize('prj_live_pk_9960fa9015ec1c672178a43fa62142afc16b6aed');

const geofence = async (lat, lng, radius, desc) => {
  await fetch(
    `https://api.radar.io/v1/geofences?description=${desc}&type=circle&coordinates=[${lng},${lat}]&radius=${radius}`,
    {
      headers: {
        Authorization: 'prj_live_pk_9960fa9015ec1c672178a43fa62142afc16b6aed',
      },
      method: 'PUT',
    },
  );
  const tag = desc.split('#')[0].trim();
  const externalId = desc.split('#')[1];
  return { tag, externalId };
};

export default geofence;
