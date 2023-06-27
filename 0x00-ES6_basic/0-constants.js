export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}

export function getList() {
    return ' is okay';
}

export function taskNext() {
    let combination = 'But sometimes let';
    combination += getList();

    return combination;
}
