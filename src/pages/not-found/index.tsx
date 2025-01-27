import {Typography} from '@/components';
import {useTranslation} from 'react-i18next';

const NotFound = () => {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Typography as="h1">{t('thisPageNotFound')}</Typography>
    </div>
  );
};

export default NotFound;
