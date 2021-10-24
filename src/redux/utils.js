import { call, put } from 'redux-saga/effects';
import { compose } from 'redux';
import axios from 'axios';

const BASE_API_URL = 'https://picsum.photos';

function commitError(error, ...args) {
  console.log('Saga Error: ', args, error);
}

const cutUrl = (url) => url.substring(0, url.lastIndexOf('/'));

export const optimizeImage = (url) => {
  return `${cutUrl(cutUrl(url))}/200`;
};

export const formatImageUrl = (url) => {
  const urlObj = new URL(url);
  return `${urlObj.origin}${cutUrl(cutUrl(urlObj.pathname))}/200${
    urlObj.search
  }`;
};

export const sagaErrorBoundaries = (saga, ...args) =>
  function* (action) {
    try {
      yield call(saga, action, ...args);
    } catch (err) {
      yield call(commitError, err, ...args);
    }
  };

export function asyncFlow(
  apiFn,
  successAction,
  errorAction,
  postEffect = null,
  preEffect = null,
  preEffectParams = null,
  errorPostEffect = null,
) {
  return function* (payload = null) {
    try {
      if (preEffect && preEffectParams) yield call(preEffect, preEffectParams);
      // console.log('sagaAsyncPayload', payload);
      const { data } = yield call(apiFn, payload);
      // console.log('sagaAsyncResponse', data);

      if (data) yield put(successAction(data));
      if (postEffect) yield call(postEffect, data);
      return data;
    } catch (e) {
      // console.log('sagaAsyncErr', e);
      yield put(errorAction(e));
      if (errorPostEffect) {
        yield call(errorPostEffect);
      }
    }
  };
}

export const callApi =
  (path = '', method = 'get') =>
  ({ queryParams, urlPath }) =>
    axios[method](
      `${BASE_API_URL}${path}${urlPath ? `/${urlPath}` : ''}`,
      queryParams ? { params: queryParams } : undefined,
    );

const dimentionsPathDecorator = ({ width, height, url, ...params }) => {
  return {
    url: `${url}${width ? `/${width}` : ''}${height ? `/${height}` : ''}`,
    ...params,
  };
};

const idPathDecorator = (apiUrl, { id, url, ...params }) => {
  return { url: `${apiUrl}${id ? `/id/${id}` : ''}`, ...params };
};

const grayscalePathDecorator = ({ grayscale, url, ...params }) => {
  return {
    url: `${url}${grayscale ? `?grayscale` : ''}`,
    grayscale,
    ...params,
  };
};

const blurPathDecorator = ({ blur, url, grayscale, ...params }) => {
  if (blur > 10 && blur < 1) {
    return { url, ...params };
  }
  return {
    url: `${url}${blur ? `${grayscale ? '&' : '?'}blur=${blur}` : ''}`,
    ...params,
  };
};

const getUrl = ({ url }) => {
  return url;
};

export const buildImageUrl = (params) => {
  return compose(
    getUrl,
    blurPathDecorator,
    grayscalePathDecorator,
    dimentionsPathDecorator,
    idPathDecorator,
  )(BASE_API_URL, params);
};
