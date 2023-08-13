import DecrementPage from '@mf/decrement';
import IncrementPage from '@mf/increment';
import { WithStore } from '@shared/store';
import { Suspense } from 'react';
import Count from './count';

export function App() {
  return (
    <WithStore>
      <Suspense fallback="loading...">
        <Count />
        <DecrementPage label="decrement" />
        <IncrementPage />
      </Suspense>
    </WithStore>
  );
}

export default App;
