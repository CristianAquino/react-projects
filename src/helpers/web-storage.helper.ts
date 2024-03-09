type LocalStorageProps<T> = {
  key: string;
  value?: T;
};
type CookieProps<T> = {
  key: string;
  value?: T;
  time?: number;
};

// local storage
function setLocalStorage<T>({ key, value }: LocalStorageProps<T>) {
  localStorage.setItem(key, JSON.stringify({ ...value }));
}
function getLocalStorage({ key }: LocalStorageProps<any>) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
function removeLocalStorage({ key }: LocalStorageProps<any>) {
  localStorage.removeItem(key);
}

// cookies
function setCookie<T>({ key, value, time = 7 }: CookieProps<T>) {
  let currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + 1000 * 60 * 60 * 24 * time);
  let expires = "expires=" + currentDate.toUTCString();
  document.cookie = `${key}=${value}; ${expires};path=/teacher/*`;
}
function getCookie({ key }: CookieProps<any>) {
  const value = document.cookie
    .split(";")
    .find((item) => item.trim().startsWith(key));
  return value ? value : null;
}

export {
  getCookie,
  getLocalStorage,
  removeLocalStorage,
  setCookie,
  setLocalStorage,
};
