"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { Editor } from "primereact/editor";

export default function BlogCreatorPost() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
      </span>
    );
  };

  const header = renderHeader();

  return (
    <main className={styles.main}>
      <div className={styles.topBox}>
        <div className="input1">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            required
          ></input>
          <label>Post Title</label>
        </div>
        <div className="input1">
          <input
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            type="text"
            required
          ></input>
          <label>Post Author</label>
        </div>
      </div>

      <Editor
        headerTemplate={header}
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
        style={{
          minHeight: "420px",
        }}
      />
    </main>
  );
}
