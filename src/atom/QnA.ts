import { atom } from 'recoil';

export interface QnA {
  date: Date;
  q: string;
  a?: string;
}

export const qnaAtom = atom<QnA[]>({
  key: 'qnaAtomKey',
  default: [],
});
