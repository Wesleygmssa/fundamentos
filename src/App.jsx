import { Header } from "./Components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";

import "./global.css";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam",
      },
      {
        type: "link",
        content: "Jane.design/doctorcare",
      },
      {
        type: "hashtag",
        content: "#novoprojeto",
      },
    ],
    publishedAt: new Date("2022-05-22 08:12:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk brito",
      role: "Educator Rockeatseat",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam",
      },
      {
        type: "link",
        content: "Jane.design/doctorcare",
      },
      {
        type: "hashtag",
        content: "#novoprojeto",
      },
    ],
    publishedAt: new Date("2022-05-22 08:12:30"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
