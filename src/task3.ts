interface User {
    readonly id: string;
    name: string;
    age: number;
    active: boolean;
}

const user: User = { id: "1", name: "Charlie", age: 25, active: true };

// console.log(user.id)

// user.id = 2;
user.name = "Roman"

// console.log(user.name)