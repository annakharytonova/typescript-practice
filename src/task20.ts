import axios from "axios";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  console.log(response.data);
  return response.data;
};

const logThreePosts = async () => {
  const posts = await fetchPosts();
  const firstThree = posts.slice(0, 3);
  console.log(firstThree);
};

logThreePosts();
// Функція fetchPosts повинна отримати список постів з API за допомогою бібліотеки axios.
// Оголосіть інтерфейс Post для поста (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchPosts, вказавши, що вона повертає проміс, який містить масив об'єктів типу Post.
// Оголосіть функцію logThreePosts, яка виведе в консоль дані перших 3 постів, виводячи їхні title та body.
