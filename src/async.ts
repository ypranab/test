const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fetched";
        if (data) {
            resolve(data);
        } else {
            reject("Failed to feted data!");
        }
    });
};

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if (data) {
            resolve(data);
        } else {
            reject("Failed to feted data!");
        }
    });
};

interface DataType {
    data: string;
}

const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: "Data is fetched" };
        if (data) {
            resolve(data);
        } else {
            reject("Failed to feted data!");
        }
    });
};

const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data;
};

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data;
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
};

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const getToDo = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json()
}

const getToDoData = async (): Promise<void> => {
    const res = await getToDo();
    console.log(res)
}
getToDoData()
