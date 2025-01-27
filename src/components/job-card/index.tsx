import {IJobItem} from '@/types';
import {FC} from 'react';
import {Badge} from '../ui/badge';
import {Bookmark, Clock, MapPin, Plus, ShieldCheck} from 'lucide-react';
import {Typography} from '../ui';
import {useTranslation} from 'react-i18next';

interface JobCardProps {
  data: IJobItem;
}
export const JobCard: FC<JobCardProps> = ({data}) => {
  const {t} = useTranslation();
  return (
    <div className="p-2 px-3 border-gray-200 shadow-sm rounded-lg border">
      <div className="flex items-center justify-between">
        <div className="flex items-center  gap-2">
          <div className="rounded-full w-5 h-5 overflow-hidden">
            <img src={data.company.logo} className="img-full" />
          </div>
          <Typography as="span" className="!text-black text-xs" variant="small">
            {data.company.name}
          </Typography>
        </div>

        <Badge variant="secondary" className="px-2 py-1">
          <span className="flex items-center gap-0.5 text-foreground">
            <Plus size={14} />
            {data.jobType}
          </span>
        </Badge>
      </div>
      <div className="mt-4">
        <Typography as="h4" variant="h6" className="!font-medium text-md">
          {data.title}
        </Typography>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Clock size={10} className="stroke-gray-400" />
            <Typography
              as="span"
              variant="small"
              className="text-xs !text-foreground"
            >
              {data.time}
            </Typography>
          </div>

          <div className="flex items-center gap-1">
            <MapPin size={10} className="stroke-gray-400" />
            <Typography
              as="span"
              variant="small"
              className="text-xs !text-foreground"
            >
              {data.location}
            </Typography>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p className="font-bold">
              ${data.salary}{' '}
              <span className="text-sm text-gray-400 font-normal">
                / {t('month')}
              </span>
            </p>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="stroke-gray-400" />
              <button className="border-0 outline-0">
                <Bookmark size={16} className="stroke-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
