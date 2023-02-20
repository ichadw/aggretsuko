import { LS_DATA_KEY } from './constants';
import { getLocalStorage } from './localStorage';

export function isInCollection(id: string): boolean {
  const myList = getLocalStorage(LS_DATA_KEY, {});

  return Boolean(myList[id]);
}
