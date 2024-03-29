"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react"; //1. Import TinyMCE Editor
import { TinyMCE } from "tinymce";
import { any } from "zod";


declare global {
  interface Window {
    tinymce: TinyMCE;
  }
}

const AddPost = (props: any) => {
  //const [articles, setArticles] = useState(Post[]);
 
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [authorid, setAuthorid] = useState("");

  


  const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  const addArticle = () => {

  
    


    const stringToHTML = window.tinymce
    .get("content")
    .getContent({ format: "html" }); //Set up a constant that gets the TinyMCE text area content for use in the CMS demo
    console.log(stringToHTML);
    
    setContent(stringToHTML);
    
    setAuthorid('clrkrkwzv0000j00v3ofmhdj1');

   

   const post = JSON.stringify({title:title, subtitle:subtitle, excerpt:excerpt, content:stringToHTML, authorId: authorid});


   console.log(post);
   


// Agregar contenido en la BD


    fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
           
            'Content-Type': 'application/json',
        },
        body:  post ,
       
    })
        .then((response) => response.json())
        .then((data) => console.log(data));



    setTitle("");
    setSubtitle("");
    setExcerpt("");

    setContent(window.tinymce.activeEditor.setContent(""));


    
  };

  return (
    <div>
     <div className="about-area-2 de-padding">
        <div className="mb-100">
        </div>
        <div className="container">
          <h1 className="h2 mb-4">Submit Post</h1>
          <div className="form-group">
            <div className="row">
              <div className="col col-md-8">
                <div className="col md-4">
                  <label htmlFor="name">Title</label>
                </div>
                <div className="col md-8">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col col-md-8">
                <label htmlFor="name">SubTitle</label>
                <input
                  type="text"
                  className="form-control"
                  id="subtitle"
                  placeholder="Subtitle"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col col-md-8">
                <label htmlFor="name">Excerpt</label>
                <input
                  type="text"
                  className="form-control"
                  id="excerpt"
                  placeholder="Excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-md-left">
            <div className="col-md-12 col-lg-8">
              <label>Content</label>
              <div className="form-group">
                {/* <textarea
                id="editor"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea> */}

                <Editor
                  tinymceScriptSrc={
                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                  }
                  //apiKey={process.env.TINYMCE_APIKEY }
                  apiKey="vnlr8o1xihx7x1v7a2pe4xbuurvswh3n1h4e1nlsrjl0qgv1"
                  id="content" //Add the content id back in
                  // onChange={(e) => setContent(e.target.value)}
                  // value={content}
                  init={{
                    height: 300,
                    plugins: [
                      "a11ychecker advcode advlist advtable anchor autocorrect autosave editimage image link linkchecker lists media mediaembed pageembed powerpaste searchreplace table template tinymcespellchecker typography visualblocks wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify lineheight | removeformat | link ",
                    menubar: false,
                    block_formats:
                      "Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3",
                    content_style: `
            body {
              font-family: Arial, sans-serif;
              margin: 12px;
            }
            h1, h2, h3, p {
              color: #4D66CB;
              margin: 10px;
            }
            `,
                  }}
                  onEditorChange={props.handleOnEditorChange}
                  initialValue="Welcome to TinyMCE!"
                />
              </div>
              <button
                onClick={addArticle}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
