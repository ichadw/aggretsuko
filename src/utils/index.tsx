import { LS_DATA_KEY } from "./constants"
import { getLocalStorage } from "./localStorage"

export function isInCollection (id: string): boolean {
  const myList = getLocalStorage(LS_DATA_KEY, {});

  return Boolean(myList[id]);
}

export function isMobile (): boolean {
  const userAgent = window && window.navigator.userAgent;
  return /Mobile/.test(userAgent);
}