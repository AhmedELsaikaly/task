import {
  BreadcrumbComp,
  Filters,
  JobReminder,
  SideFilter,
  Typography,
  JobsList,
} from '@/components';
import {ItemsListHeaderSkeleton} from '@/components/items-list-header/items-list-header-skeleton';
import JobCardSkeleton from '@/components/job-card/job-card-skeleton';
import {ROUTES} from '@/constants';
import {useCallApi} from '@/hooks';
import {fetchJobList} from '@/services';

import {useTranslation} from 'react-i18next';

export const HomePage = () => {
  const {t} = useTranslation();
  const {data, loading} = useCallApi(fetchJobList);

  return (
    <>
      <section className="bg-gray-foreground">
        <div className="container">
          <div className="section-padding">
            <Typography as="h1" variant="h2" className="w-full lg:w-1/3">
              {t('thereAreJobsForYou', {count: 65456})}
            </Typography>
            <div className="flex justify-between">
              <Typography as="p" variant="body" className=" mt-2">
                {t('thereAreJobsForYouDesc')}
              </Typography>
              <BreadcrumbComp
                items={[
                  {title: t('home'), link: ROUTES.HOME},
                  {title: t('jobsListing')},
                ]}
              />
            </div>
            <div className="mt-6">
              <Filters />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray/5 section-padding">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <div className="space-y-2">
                <JobReminder />
                <SideFilter />
              </div>
            </div>
            <div className="col-span-9">
              {loading ? (
                <>
                  <ItemsListHeaderSkeleton />
                  <div className="mt-6">
                    <div className="grid grid-cols-12 gap-x-4 gap-y-4">
                      {Array.from({length: 12}, (_, index) => index + 1).map(
                        (index) => (
                          <div className="col-span-4" key={index}>
                            <JobCardSkeleton />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <JobsList data={data} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
