import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  type: yup.string().required(),
  status: yup.string().required(),
  owner_id: yup.string().nullable(),
});
