import { useMemo } from 'react';
import { rand } from '../utils/rand';

export const useRandomId = (prefix?: string) => useMemo(() => {
  if (prefix) {
    return `${prefix}-${rand()}`;
  }
  return rand();
}, [prefix]);
