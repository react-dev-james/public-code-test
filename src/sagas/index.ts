import { all } from "redux-saga/effects";

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */
export default function * root() {
  yield all([
    // some sagas only receive an action
  ]);
}
