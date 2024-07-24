import { isLoading } from '@/atom/isLoading';
import { QnA, qnaAtom } from '@/atom/QnA';
import axios from 'axios';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
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

    setQnaList((prev) => {
      previous = prev;
      return [...prev, qna];
    });

    try {
      setIsLoading(true);

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, {
        text: qna.q,
      });

      qna = { ...qna, a: res.data.response as string };

      setQnaList([...previous, qna]);
    } catch (error) {
      console.error(error);
      qna = { ...qna, a: 'Error' };
      setQnaList([...previous, qna]);
      toast.error('요청을 처리하는 도중에 오류가 발생했어요');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [QnaList, qnaRequest] as const;
}
