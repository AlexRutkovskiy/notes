import merge from 'lodash.merge'

const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  }
}

export const fetchApi = async (url: string, options: RequestInit = {}) => {
  return fetch(url, merge(DEFAULT_OPTIONS, options))
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json()
    });
}
