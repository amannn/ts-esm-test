export * from './core';
export * from './another';

export function dynamic() {
  return import('./dynamic');
}
