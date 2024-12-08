import merge from 'lodash.merge'

const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  }
}

export async function fetchApi<T>(url: string, options: RequestInit = {}): Promise<T> {
  return fetch(url, merge(DEFAULT_OPTIONS, options))
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as T;
    });
}
