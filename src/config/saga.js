import authSaga from '../auth/auth.saga';

export default function* rootSaga() {
  yield([authSaga()]);
}
