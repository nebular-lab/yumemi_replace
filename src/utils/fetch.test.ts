import * as Fetcher from './fetch';
import { dummyPrefectures, httpError } from './fexture';

jest.mock('./fetch');

describe('fetchPrefectures', () => {
  it('should return prefectures', async () => {
    const prefectures = [
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
    jest.spyOn(Fetcher, 'fetchPrefectures').mockResolvedValue(dummyPrefectures);
    const result = await Fetcher.fetchPrefectures();
    expect(result).toEqual(prefectures);
  });
  it('should throw error', async () => {
    jest.spyOn(Fetcher, 'fetchPrefectures').mockRejectedValue(httpError);
    await expect(Fetcher.fetchPrefectures()).rejects.toMatchObject({
      err: { message: 'internal server error' },
    });
  });
});
