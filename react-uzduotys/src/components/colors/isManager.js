function get() {
    const data = localStorage.getItem(key);
    return null !== data ? JSON.parse(data) : [];
}

function set(data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function IsStore(key, data) {
    const id = uuidv4();
    const newData = { ...data, id };
    const oldData = get(key);
    const dataToStore = [...oldData, newData];
    set(key, dataToStore);
}

export function IsUpdate(key, id, data) {
    const oldData = get(key);
    const dataToStore = oldData.map(item => item.id === id ? { ...item, ...data, id} : item);
    set(key, dataToStore);
}

export function IsDelete(key, id) {
    const oldData = get(key);
    const dataToStore = oldData.filter(item => item.id !== id);
    set(key, dataToStore);
}

export function IsRead(key) {
    return get(key);
}

export function IsShow(key, id) {
    const oldData = get(key);
    const dataToShow = oldData.find(item => item.id === id);
    return dataToShow;
}