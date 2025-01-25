import {FC, useState} from 'react';
import {ItemsListHeader} from '../items-list-header';
import {IJobItem} from '@/types';
import {JobCard} from '../job-card';
import {usePagination} from '@/hooks';
import {Paginator} from '../ui/pagination-comp';
import JobCardSkeleton from '../job-card/job-card-skeleton';

export const JobsList: FC<{data: IJobItem[]; loading: boolean}> = ({
  data,
  loading,
}) => {
  const [viewType, setViewType] = useState<'cards' | 'list'>('cards');
  const {
    currentData,
    currentPage,
    startRange,
    endRange,
    totalItems,
    handlePageChange,
    itemsPerPage,
  } = usePagination(data);

  return (
    <section>
      <ItemsListHeader
        viewType={viewType}
        setViewType={setViewType}
        totalItems={totalItems}
        startRange={startRange}
        endRange={endRange}
      />
      <div className="mt-6">
        <div className="grid grid-cols-12 gap-x-4 gap-y-4">
          {Array.isArray(currentData) &&
            currentData.map((item, index) => (
              <div className="col-span-4" key={index}>
                <JobCard data={item} key={index} />
              </div>
            ))}
        </div>
      </div>
      <div className="mt-8">
        <Paginator
          showPreviousNext
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};
