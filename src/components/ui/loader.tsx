import {useTranslation} from 'react-i18next';

export const Loader = () => {
  const {t} = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"
        role="status"
      >
        <span className="sr-only text-primary">{t('loading')}</span>
      </div>
    </div>
  );
};
