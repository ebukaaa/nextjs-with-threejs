import styles from "./style.module.scss";

function get({ prop }) {
  return prop;
}

export const useStore = () => {
  return {
    get: get({}),
    styles,
  };
};
