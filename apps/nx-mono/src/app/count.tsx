import { useStore } from '@shared/store';

const Count = () => {
  const { count } = useStore();

  return <div>total: {count}</div>;
};

export default Count;
