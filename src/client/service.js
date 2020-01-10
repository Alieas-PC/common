import { post } from './utils/fetchUtil';

export const create = ({ modelName, data }) =>
  post(`/api/${modelName}/create`, { data });

export const update = ({ modelName, data }) =>
  post(`/api/${modelName}/update`, { data });

export const destroy = ({ modelName, data }) =>
  post(`/api/${modelName}/destroy`, { data });

export const findPage = ({ modelName, data }) =>
  post(`/api/${modelName}/find-page`, { data });

export const findOne = ({ modelName, data }) =>
  post(`/api/${modelName}/find-one`, { data });

export const findById = ({ modelName, data }) =>
  post(`/api/${modelName}/find-by-id`, { data });

export const findList = ({ modelName, data }) =>
  post(`/api/${modelName}/find-list`, { data });
