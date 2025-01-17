import { all } from "typed-redux-saga";
import { companiesSagas } from "../../Companies/state/sagas";

export default function* rootSaga() {
  yield* all([
    companiesSagas()
  ]);
}
