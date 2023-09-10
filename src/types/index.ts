import { z } from 'zod';

export const PrefectureSchema = z.object({
  prefCode: z.number(),
  prefName: z.string(),
});
export type Prefecture = z.infer<typeof PrefectureSchema>;

export const PrefecturesSchema = z.array(PrefectureSchema);
export type Prefectures = z.infer<typeof PrefecturesSchema>;

export const PopulationDataSchema = z.array(
  z.object({
    label: z.string(),
    data: z.array(
      z.object({
        year: z.number(),
        value: z.number(),
        rate: z.number().optional(),
      }),
    ),
  }),
);

export type PopulationData = z.infer<typeof PopulationDataSchema>;

export type HttpError = {
  err: { message: string };
};
