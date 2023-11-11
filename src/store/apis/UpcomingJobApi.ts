import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  type IUpcomingJobargType,
  type IUpcomingJobExpandedList,
  type IUpcomingJobs
} from '@/models';

import { Environment } from '../../enviroment/environment';
import { type RootState } from '..';

export const upcomingJobsApi = createApi({
  reducerPath: 'upcomingJobsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Environment.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token: string = (getState() as RootState).users.user.data?.token ?? '';
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    }
  }),
  endpoints: builder => ({
    getUpcomingJobsByDriverId: builder.query<IUpcomingJobs, string>({
      query: (driverId: string) => ({
        url: `getUpcomingJobs?driver_id=${driverId}`
      })
    }),
    getUpcomingJobListingByDriverId: builder.query<IUpcomingJobExpandedList, IUpcomingJobargType>({
      query: (args: IUpcomingJobargType) => ({
        url: `getUpcomingJobsListing?driver_id=${args.driverId}&user_id=${args.userId}`
      })
    })
  })
});

export const { useGetUpcomingJobsByDriverIdQuery, useGetUpcomingJobListingByDriverIdQuery } =
  upcomingJobsApi;
