import {JOBS} from '@/constants/jobs';
import {IJobItem} from '@/types';

export const fetchJobList = (): Promise<IJobItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([].concat(...new Array(100).fill(JOBS)));
    }, 2000);
  });
};
