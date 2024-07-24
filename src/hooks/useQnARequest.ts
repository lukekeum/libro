import { isLoading } from '@/atom/isLoading';
import { QnA, qnaAtom } from '@/atom/QnA';
import axios from 'axios';
import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function useQnARequest() {
  const [QnaList, setQnaList] = useRecoilState<QnA[]>(qnaAtom);
  const setIsLoading = useSetRecoilState(isLoading);

  const qnaRequest = useCallback(async (q: string) => {
    let qna: QnA = {
      date: new Date(),
      q,
    };
    let previous: QnA[] = [];

    setIsLoading(true);

    setQnaList((prev) => {
      previous = prev;
      return [...prev, qna];
    });

    const res = await axios.post(`${process.env.API_URL}`, {
      text: qna.q,
    });

    qna = { ...qna, a: res.data.response as string };

    setQnaList([...previous, qna]);

    setIsLoading(false);
  }, []);

  return [QnaList, qnaRequest] as const;
}
