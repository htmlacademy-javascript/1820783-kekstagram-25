import { createDescriptionPhotos } from './data.js';
import { createSimilarPhotos } from './picture.js';
//import { createBigPictures } from './big-picture.js';
import './big-picture.js';

const photos =  createDescriptionPhotos();
createSimilarPhotos(photos);
//createBigPictures(photos);
