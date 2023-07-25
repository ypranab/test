
function stringReverse<T>(...arr_names: T[]): void {
    arr_names.reverse();
    console.log(arr_names)
}
stringReverse("A", "B", "C", "D");