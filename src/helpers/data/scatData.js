import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getScatsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbScats = response.data;
      const scats = [];
      if (fbScats !== null) {
        Object.keys(fbScats).forEach((scatId) => {
          fbScats[scatId].id = scatId;
          scats.push(fbScats[scatId]);
        });
      }
      resolve(scats);
    })
    .catch((err) => reject(err));
});

const getSingleScat = (scatId) => axios.get(`${baseUrl}/scats/${scatId}.json`);

const postScat = (newScat) => axios.post(`${baseUrl}/scats.json`, newScat);

export default { getScatsByUid, getSingleScat, postScat };
