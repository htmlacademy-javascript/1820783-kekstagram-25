import { createDescriptionPhotos } from './data.js';
import { createSimilarPhotos } from './picture.js';

const photos =  createDescriptionPhotos();
createSimilarPhotos(photos);
