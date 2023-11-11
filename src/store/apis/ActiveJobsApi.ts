import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { type IActiveJobs } from '@/models';

import { Environment } from '../../enviroment/environment';
import { type RootState } from '..';

export const activeJobsApi = createApi({
  reducerPath: 'activeJobsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Environment.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token: string = (getState() as RootState).users.user.data?.token ?? '';
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    }
  }),
  endpoints: builder => ({
    getActiveJobsMapData: builder.query<IActiveJobs, string>({
      query: (driverId: string) => ({
        url: `getMapsData?driver_id=${driverId}`
      })
    })
  })
});

export const { useGetActiveJobsMapDataQuery } = activeJobsApi;
