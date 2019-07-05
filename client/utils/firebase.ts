import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
