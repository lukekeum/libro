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

    // TODO: Change Request
    // const res = await axios.post(`${process.env.API_URL}`, qna);

    // qna = { ...qna, a: res.data.a as string };

    qna = { ...qna, a: '삼국지를 추천드릴게요!' };

    setQnaList([...previous, qna]);

    setIsLoading(false);
  }, []);

  return [QnaList, qnaRequest] as const;
}
