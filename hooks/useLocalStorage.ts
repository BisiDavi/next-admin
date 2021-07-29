export default function useLocalStorage() {
    function setStorage(name, value) {
        if (!window.localStorage.getItem(name))
            window.localStorage.setItem(name, JSON.stringify(value));
    }
    function getStorage(name) {
        const item = window.localStorage.getItem(name);
        return JSON.parse(item);
    }
    function removeStorage(name) {
        window.localStorage.removeItem(name);
    }
    return { setStorage, getStorage, removeStorage };
}
