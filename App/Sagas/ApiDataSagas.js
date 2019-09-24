import { call, put } from 'redux-saga/effects'
import ApiDataActions from '../Redux/ApiDataRedux'

export function * getApiData (api, action) {
  const { data } = action
  const response = yield call(api.getData, data)
  console.log('res',response)
  if (response.ok) {
    yield put(ApiDataActions.apiDataSuccess(response.data))
  } else {
    yield put(ApiDataActions.apiDataFailure())
  }
}
