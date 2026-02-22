interface User {
  id: number;
  name: string;
}

function toUserObjects(names: string[]): User[] {
  return names.map((name, index) => ({ id: index + 1, name }));
}

console.log(toUserObjects(["alice", "bob", "charlie"]));
