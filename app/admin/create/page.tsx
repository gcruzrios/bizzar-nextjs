import React, { useState } from "react";
import AddPost from "./AddPost";

interface Post {
  title: String;
  subtitle: String;
  excerpt: String;
  content: String;
}

const CreatePost = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  const articles: Post[] = await res.json();

  return (
    <main className="main">
      <AddPost/>
      <div className="container">
      <h2>Articles:</h2>
      {/* Lista de articulos */}
      <div>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
      </div>

      {/* <script>
   tinymce.init({
    selector: 'textarea#editor',
    skin: 'bootstrap',
    plugins: 'lists, link, image, media',
    toolbar: 'h1 h2 bold italic strikethrough blockquote bullist numlist backcolor | link image media | removeformat help',
    menubar: false,
  });
</script>  */}
    </main>
  );
};

export default CreatePost;
