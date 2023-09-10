import { HttpError } from '../types';

export const httpError: HttpError = {
  err: { message: 'internal server error' },
};

export const dummyPrefectures = [
  {
    prefCode: 1,
    prefName: '北海道',
  },
  {
    prefCode: 2,
    prefName: '青森県',
  },
  {
    prefCode: 3,
    prefName: '岩手県',
  },
  {
    prefCode: 4,
    prefName: '宮城県',
  },
];

export const dummyPopulation = [
  [
    {
      label: '総人口',
      data: [
        {
          year: 1960,
          value: 5039206,
        },
        {
          year: 1965,
          value: 5171800,
        },
        {
          year: 1970,
          value: 5310795,
        },
        {
          year: 1975,
          value: 5432087,
        },
      ],
    },
    {
      label: '年少人口',
      data: [
        {
          year: 1960,
          value: 1558229,
        },
        {
          year: 1965,
          value: 1558480,
        },
        {
          year: 1970,
          value: 1539233,
        },
        {
          year: 1975,
          value: 1505280,
        },
      ],
    },
    {
      label: '生産年齢人口',
      data: [
        {
          year: 1960,
          value: 1558229,
        },
        {
          year: 1965,
          value: 1558480,
        },
        {
          year: 1970,
          value: 1539233,
        },
        {
          year: 1975,
          value: 1505280,
        },
      ],
    },
    {
      label: '老年人口',
      data: [
        {
          year: 1960,
          value: 1558229,
        },
        {
          year: 1965,
          value: 1558480,
        },
        {
          year: 1970,
          value: 1539233,
        },
        {
          year: 1975,
          value: 1505280,
        },
      ],
    },
  ],
];
