import { useStore } from '@shared/store';

const IncrementPage = () => {
  const { increment } = useStore();

  return (
    <div>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default IncrementPage;
