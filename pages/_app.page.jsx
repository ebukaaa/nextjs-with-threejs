import "./style.scss";
import { func, string, shape } from "prop-types";

export const useApp = ({ Component, pageProps }) => {
  return (
    <main id="app">
      <Component {...pageProps} />
    </main>
  );
};

useApp.propTypes = {
  Component: func.isRequired,
  pageProps: shape({ root: string }).isRequired,
};

export default useApp;
