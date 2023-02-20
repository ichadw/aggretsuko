/**
 * mock local storage
 * @param {string} key
 * @param {*} val
 */
export const localStorageMock = (key: string, val: any) => {
  window.localStorage.setItem(key, JSON.stringify(val));
};