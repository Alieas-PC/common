import { put, select } from 'redux-saga/effects';

function* scrollPage({ payload: { page, get, set, reset } }) {
  console.log('scroll page - get state');

  const prevPage = reset ? null : yield select(get);

  const { rows, count } = page;

  if (prevPage) {
    const allRows = prevPage.rows.concat(rows);

    console.log('scroll page - before set');

    const setAction = set({ rows: allRows, count });

    console.log('scroll page - set state', setAction);

    if (setAction) {
      yield put(setAction);
    }
  } else {
    console.log('scroll page - before set');

    const setAction = set({ rows, count });

    console.log('scroll page - set state', setAction);

    if (setAction) {
      yield put(setAction);
    }
  }
}

export default scrollPage;
