import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/wesleygmssa.png"
          />
          <div className={styles.authorInfo}>
            <strong>Wesley Guerra</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio ás 08:13h" dateTime="2022-05-22 08:12:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala Galera 👋</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam
        </p>
        <p>
          👉 <a href="">Jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rockeatseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Enviar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
