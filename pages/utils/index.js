// export * from "../index.page";
// export * from "../_app.page";

function get({ prop }) {
  return prop;
}

export const useStore = () => {
  return {
    get: get({}),
  };
};
