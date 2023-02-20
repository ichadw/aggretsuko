import fetch from 'cross-fetch';
import { API_URL } from '@/utils/constants';

/**
 * 
 * @param {string} path
 * @param {string} method GET | POST | PUT | DELETE
 * @param {string} options
 * @returns 
 */
export default async function fetcher(path: string, method: string, options?: any) {
  const defaultHeader = {
    ...options?.headers,
  };
  const otherOptions = {
    headers: defaultHeader,
    ...options,
  };

  const response = await fetch(`${API_URL}${path}`, { method, ...otherOptions });
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const json = await response.json();

  return json;
}