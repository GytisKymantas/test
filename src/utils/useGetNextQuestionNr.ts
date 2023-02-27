import { useRouter } from 'next/router';

export const useGetNextQuestionNr = () => {
  const router = useRouter();
  const { nr } = router.query;

  return parseFloat(nr as string) + 1;
};
