import {Skeleton} from '../ui/skeleton';

const JobCardSkeleton = () => {
  return (
    <div>
      <div className="p-2 px-3 border-gray-200 shadow-sm rounded-lg border animate-pulse">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="rounded-full w-5 h-5 " />
            <Skeleton className="w-20 h-4  rounded-md" />
          </div>
          <Skeleton className="w-16 h-5  rounded-md" />
        </div>

        <div className="mt-4">
          <Skeleton className="w-full h-4 rounded-lg" />
          <Skeleton className="w-3/4 h-4 mt-2 rounded-lg" />

          <div className="mt-2 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Skeleton className="w-3 h-3 rounded-full" />
              <Skeleton className="w-16 h-3 rounded-md" />
            </div>
            <div className="flex items-center gap-1">
              <Skeleton className="w-3 h-3 rounded-full" />
              <Skeleton className="w-16 h-3  rounded-md" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <Skeleton className="w-20 h-5 rounded-md" />
              <div className="flex items-center gap-2">
                <Skeleton className="w-6 h-6 rounded-lg" />
                <Skeleton className="w-6 h-6  rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
