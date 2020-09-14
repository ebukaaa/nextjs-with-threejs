import { useStore } from "./utils";

export const useHome = () => {
  const { styles } = useStore();

  return <main className={styles.home} />;
};

export default useHome;
