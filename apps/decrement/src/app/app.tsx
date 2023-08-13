import { useStore } from '@shared/store';

export const DecrementPage = (props: { label: string }) => {
  const { decrement } = useStore();

  return (
    <div>
      <button onClick={decrement}>{props.label}</button>
    </div>
  );
};

export default DecrementPage;
