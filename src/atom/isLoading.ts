import { atom } from 'recoil';

export const isLoading = atom<boolean>({
  key: 'isLoadingAtom',
  default: false,
});
