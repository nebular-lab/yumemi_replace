import { axios } from '../lib/axios';
import { PopulationDataSchema, PrefecturesSchema } from '../types';

export const fetchPrefectures = async () => {
  const { data } = await axios.get('/prefectures');
  return PrefecturesSchema.parse(data.result);
};

export const fetchPopulationData = async (prefCode: number) => {
  try {
    const { data } = await axios.get('/population/composition/perYear', {
      params: {
        prefCode,
        cityCode: '-',
      },
    });
    return PopulationDataSchema.parse(data.result.data);
  } catch (error) {
    throw error;
  }
};
