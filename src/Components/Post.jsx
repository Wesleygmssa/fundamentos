import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={StyleSheet.autho}>
      <header>
        <img
          className={styles.avatar}
          src="https://github.com/wesleygmssa.png"
        />
        <div className={styles.authorInfo}>
          <strong>Wesley Guerra</strong>
          <span>Web Developer</span>
        </div>

        <time title="11 de Maio ás 08:13h" dateTime="2022-05-22 08:12:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam
        </p>
        <p>
          <a href="">Jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rockeatseat</a>
        </p>
      </div>
    </article>
  );
}
