export function getLocalStorage(key: string, defaultValue: any): any {
  if (typeof window !== 'undefined') {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData) {
      return JSON.parse(localStorageData);
    }
  }
  return defaultValue;
}

export function setLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}
