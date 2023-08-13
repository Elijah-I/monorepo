import { useStore } from '@shared/store';
import { useLocalStore } from '../store/hook';

export const DecrementPage = (props: { label: string }) => {
  const { decrement } = useStore();
  const LS = useLocalStore();

  return (
    <>
      <button onClick={decrement}>{props.label}</button>
      local total: {LS.count}
      <button onClick={LS.decrement}>local dec</button>
      <button onClick={LS.increment}>local inc</button>
    </>
  );
};

export default DecrementPage;
