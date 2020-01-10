import { callService } from '../service-helper';
import * as modelService from '../service';

export function* create({
  payload: { modelName, values, opts, asyncActionTypes }
}) {
  yield* callService(
    modelService.create,
    {
      modelName,
      data: values
    },
    asyncActionTypes,
    opts
  );
}

export function* update({
  payload: { modelName, values, opts, asyncActionTypes }
}) {
  yield* callService(
    modelService.update,
    {
      modelName,
      data: values
    },
    asyncActionTypes,
    opts
  );
}

export function* destroy({
  payload: { modelName, values, opts, asyncActionTypes }
}) {
  yield* callService(
    modelService.destroy,
    {
      modelName,
      data: values
    },
    asyncActionTypes,
    opts
  );
}

export function* findPage({
  payload: { modelName, values, opts, asyncActionTypes }
}) {
  yield* callService(
    modelService.findPage,
    {
      modelName,
      data: values
    },
    asyncActionTypes,
    opts
  );
}

export function* findOne({
  payload: { modelName, values, opts, asyncActionTypes }
}) {
  yield* callService(
    modelService.findOne,
    {
      modelName,
      data: values
    },
    asyncActionTypes,
    opts
  );
}

export function* findById({
  payload: { modelName, values, opts, asyncActionTypes }
}) {
  yield* callService(
    modelService.findById,
    {
      modelName,
      data: values
    },
    asyncActionTypes,
    opts
  );
}

export function* findList({
  payload: { modelName, values, opts, asyncActionTypes }
}) {
  yield* callService(
    modelService.findList,
    {
      modelName,
      data: values
    },
    asyncActionTypes,
    opts
  );
}
