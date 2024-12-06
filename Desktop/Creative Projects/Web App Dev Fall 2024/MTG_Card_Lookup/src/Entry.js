import { useState } from "react";

export default function Entry({ action }) {
  const [content, setContent] = useState("");

  function submit(entry) {
    entry.preventDefault();
    action(content);
    setContent("");
  }

  return (
    <form className="entry" onSubmit={submit}>
      <input
        className="input"
        value={content}
        onChange={(entry) => setContent(entry.target.value)}
      />
    </form>
  );
}
