import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

// author: {avatar_url, name, role} },

// const comments = [1, 2, 3];

export function Post(props) {
  const [comments, setComments] = useState(["Post muito bacana"]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormatted = format(
    props.publishedAt,
    "d 'de' MMMM 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  // const publicationDate = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(props.publishedAt);

  /**Programação Imperativa - O que fazer, Passo a passo*/
  // function handleCreateNewComment(event) {
  //   event.preventDefault();
  //   const newComment = event.target.comment.value;
  //   setComments([...comments, newComment]);
  //   event.target.reset();
  // }

  /**Programação Declarativo - O que queremos*/
  function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {props.content.map((content, index) => {
          if (content.type === "paragraph") {
            return <p key={index}>{content.content}</p>;
          } else if (content.type === "link") {
            return (
              <a key={index} href={content.content}>
                {content.content}
              </a>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Enviar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment content={comment} />
        ))}
      </div>
    </article>
  );
}
