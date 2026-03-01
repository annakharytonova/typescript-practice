interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();
  return data;
};

fetchUsers().then((users) => console.log(users));

// Функція fetchUsers повертає проміс, який через fetch отримує список користувачів
// з API
// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача
// містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.
