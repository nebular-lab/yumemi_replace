import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { fetchPopulationData, fetchPrefectures } from '../utils/fetch';

export const useQueryPrefecturePopulation = () => {
  const fetchPrefecturePopulation = async () => {
    const prefectures = await fetchPrefectures();

    const populationData = await Promise.all(
      prefectures.map(({ prefCode }) => fetchPopulationData(prefCode)),
    );
    // ['総人口', '年少人口', '生産年齢人口', '老年人口']
    const populationTypeLabels = populationData[0].map(({ label }) => label);

    return { prefectures, populationTypeLabels, populationData };
  };

  return useSuspenseQuery({
    queryKey: ['prefecturePopulation'],
    queryFn: fetchPrefecturePopulation,
    staleTime: Infinity,
  });
};
