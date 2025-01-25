import i18n from '@/i18n';
import {ROUTES} from './routes';

export const NAVBAR_LINKS = [
  {title: i18n.t('home'), link: ROUTES.HOME},
  {
    title: i18n.t('browseJobs'),
    link: ROUTES.HOME,
    children: [
      {title: i18n.t('jobCategories'), link: `${ROUTES.HOME}`},
      {title: i18n.t('savedJobs'), link: `${ROUTES.HOME}`},
    ],
  },
  {
    title: i18n.t('employers'),
    link: ROUTES.HOME,
    children: [
      {title: i18n.t('postJob'), link: `${ROUTES.HOME}`},
      {title: i18n.t('employerDashboard'), link: `${ROUTES.HOME}`},
    ],
  },
  {
    title: i18n.t('candidates'),
    link: ROUTES.HOME,
    children: [
      {title: i18n.t('profile'), link: `${ROUTES.HOME}`},
      {title: i18n.t('applications'), link: `${ROUTES.HOME}`},
    ],
  },
  {title: i18n.t('contact'), link: ROUTES.HOME},
];
