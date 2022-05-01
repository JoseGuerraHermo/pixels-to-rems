export const InitConverter = () => {
  let localStorageValue = localStorage.getItem("px2rem");
  if (!localStorageValue) localStorageValue = localStorage.setItem("px2rem", JSON.stringify(16));
  return localStorageValue;
};

export const updateConverter = (val) => {
  try {
    localStorage.setItem("px2rem", JSON.stringify(Number(val)));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}