import { useMain } from './boards/main';

export const useRootStore = () => ({
  mainBoard: useMain(),
});
