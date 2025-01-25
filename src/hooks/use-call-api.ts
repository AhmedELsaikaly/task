import {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

interface ApiResponse<T> {
  data: T;
  error: string | null;
  loading: boolean;
}

export const useCallApi = <T>(
  apiFunction: () => Promise<T>,
): ApiResponse<T> => {
  const {t} = useTranslation();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await apiFunction();
        setData(result);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError(t('somethingWentWrongWhileFetchingData'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiFunction]);

  return {data: data as T, loading, error};
};

export default useCallApi;
