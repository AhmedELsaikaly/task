import {Skeleton} from '../ui/skeleton';

export const ItemsListHeaderSkeleton = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Skeleton className="w-24 h-4 mb-2" />

        <div className="flex items-center gap-2">
          <Skeleton className="w-20 h-6" />

          <div className="flex items-center gap-2">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
