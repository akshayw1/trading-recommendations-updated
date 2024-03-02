"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { Editor } from "primereact/editor";
import NextImage from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BlogCreatorPost() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [tagsArray, setTagsArray] = useState([]);
  const [eventImg, setEventImg] = useState(null);
  const [errors, setErrors] = useState({});

  const uploadImage = async (e) => {
    const errorsNow = {};
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const file = e.target.files?.[0];
    const maxSizeMB = 2;
    const maxWidth = 800;
    const maxHeight = 400;

    if (!file || !file.type.startsWith("image/")) {
      errorsNow.eventImg = ["Please select an image."];
    } else {
      if (!allowedTypes.includes(file.type)) {
        errorsNow.eventImg = ["Only JPEG, PNG, or GIF images are allowed."];
      }

      if (file.size / 1024 / 1024 > maxSizeMB) {
        errorsNow.eventImg = [`The image must be smaller than ${maxSizeMB}MB.`];
      }

      try {
        await new Promise((resolve, reject) => {
          const imageElement = new Image();
          imageElement.onload = function () {
            if (
              imageElement.width > maxWidth ||
              imageElement.height > maxHeight
            ) {
              errorsNow.eventImg = [
                `The image must be smaller than ${maxWidth}x${maxHeight} pixels.`,
              ];
              reject();
            } else {
              resolve();
            }
          };
          imageElement.onerror = function () {
            errorsNow.eventImg = ["Error loading the image."];
            reject();
          };
          imageElement.src = URL.createObjectURL(file);
        });
      } catch (error) {}
    }

    if (Object.values(errorsNow).length === 0) {
      setEventImg(file || null);
    } else {
      toast.warning(Object.values(errorsNow)[0][0]);
      removeSelectedImage();
    }
    setErrors(errorsNow);
  };
  const removeSelectedImage = () => {
    let fileInput = document.getElementById("eventPhoto");

    if (fileInput instanceof HTMLInputElement) {
      fileInput.value = "";
      fileInput.dispatchEvent(new Event("change"));
    }

    setEventImg(null);
  };
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
  const submitEvent = async () => {
    const errorsNow = {};

    if (title === "") {
      errorsNow.title = [...(errorsNow.title || []), "Title can't be empty"];
    }
    if (author === "") {
      errorsNow.author = [...(errorsNow.author || []), "Author can't be empty"];
    }
    if (text === "") {
      errorsNow.text = [...(errorsNow.text || []), "Text Blog can't be empty"];
    }
    if (eventImg === null) {
      errorsNow.eventImg = [
        ...(errorsNow.eventImg || []),
        "Please upload event image",
      ];
    }
    if (tagsArray.length === 0) {
      errorsNow.tags = [...(errorsNow.tags || []), "Post needs at least 1 tag"];
    }

    if (Object.values(errorsNow).length === 0) {
      console.log("yo");
      try {
        const data = new FormData();
        data.set("image", eventImg);
        data.set("title", title);
        data.set("text", text);
        data.set("author", author);
        tagsArray.forEach((tag) => {
          data.append("tags", tag);
        });

        const res = await fetch("/api/blog", {
          method: "POST",
          body: data,
        });
        if (res.ok) {
          return true;
        } else {
          const data = await res.json();
          return (errorsNow.form = [...(errorsNow.form || []), data.error]);
        }
      } catch (error) {
        toast.warning("Something go wrong, try again");
        return (errorsNow.form = [
          ...(errorsNow.form || []),
          "Something go wrong, try again",
        ]);
      }
    } else {
      toast.warning(Object.values(errorsNow)[0][0]);
    }
    setErrors(errorsNow);
  };
  return (
    <main className={styles.main}>
      <div
        className={`${styles.eventPhotoBox} ${
          eventImg ? "" : "cursor-pointer"
        }`}
      >
        {eventImg ? (
          <div className="relative h-full w-full">
            <NextImage
              className="h-full object-cover w-full"
              src={URL.createObjectURL(eventImg)}
              alt="Event Image"
              width={800}
              height={500}
            />
            <div className="relative w-full">
              <div
                onClick={removeSelectedImage}
                className="cursor-pointer p-[.5rem] rounded-[50%] absolute flex justify-center items-center right-[15px] bottom-[15px] w-[3rem] h-[3rem] bg-red-500"
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <>
            <label
              className={styles.labelEventImage}
              htmlFor="eventPhoto"
            ></label>
            <svg
              className="fill-white text-[3.5rem]"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
            >
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
            </svg>
            <p>Click here to upload post hero image</p>
            <p>PNG, JPG or GIF(MAX. 800x500px)</p>
          </>
        )}
      </div>
      <input
        accept="image/png, image/gif, image/jpeg"
        className={styles.inputEventPhoto}
        type="file"
        name="eventPhoto"
        id="eventPhoto"
        onChange={uploadImage}
      />
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
      <div className={styles.tagsBox}>
        <div className="input1">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter" && inputTag !== "") {
                setTagsArray((prev) => [...prev, inputTag]);
                setInputTag("");
              }
            }}
            onChange={(e) => setInputTag(e.target.value)}
            value={inputTag}
            type="text"
            required
          ></input>
          <label>Tag</label>
        </div>
        <div
          onClick={(e) => {
            if (inputTag !== "") {
              setTagsArray((prev) => [...prev, inputTag]);
              setInputTag("");
            }
          }}
          className={styles.createBlogButton}
        >
          Add Tag
        </div>
        <p className="">Tags:</p>
        {tagsArray.map((tag, tagIndex) => (
          <div
            key={tag}
            onClick={() =>
              setTagsArray((prevItems) =>
                prevItems.filter((item, index) => index !== tagIndex)
              )
            }
            className={styles.categoryLabel}
          >
            {tag}
          </div>
        ))}
      </div>
      <Editor
        headerTemplate={header}
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
        style={{
          minHeight: "420px",
        }}
      />
      <div onClick={submitEvent} className={styles.createBlogButton}>
        Create New Post
      </div>
    </main>
  );
}
