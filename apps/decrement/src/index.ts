import { lazy } from 'react';
export default lazy(() => import('./app/app'));

export * from './store/slice';
