const STORAGE_KEYNAME = "list-orderer-store";

const storage = (() => {
  const get = () => {
    return localStorage.getItem(STORAGE_KEYNAME) || null;
  };

  const update = (text) => {
    localStorage.setItem(STORAGE_KEYNAME, text);
  };

  const clear = () => {
    localStorage.removeItem(STORAGE_KEYNAME);
  };

  return {
    get,
    update,
    clear,
  };
})();

export default storage;
