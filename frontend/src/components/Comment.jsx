import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faEllipsisVertical,
  faPaperPlane,
  faTrash,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Comment = () => {
  //states
  const [loading, setLoading] = useState(false);
  const [commentLen, setCommentLen] = useState(0);
  const [comments, setComments] = useState([]);
  const [countComments, setCountComments] = useState(0);
  const [comment, setComment] = useState("");
  const [popupDisplays, setPopupDisplays] = useState([]);

  const localName = localStorage.getItem("name");
  //api call (get) for comments
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fatir-port-api.vercel.app/comment", {headers: {Authorization: localName}})
      .then((res) => {
        setComments(res.data);
        setCountComments(res.data.length);
        setPopupDisplays(new Array(res.data.length).fill(false));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleMessage = (e) => {
    setComment(e.target.value);
    setCommentLen(e.target.value.length);
  };

  const sendComment = () => {
    let fixedName = localName;
    const newData = {
      fixedName,
      comment,
    };
    axios
      .post("https://fatir-port-api.vercel.app/comment", newData)
      .then(() => {
        console.log("success");
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = (index) => {
    const confirmation = confirm("you sure?");
    if (confirmation) {
      const idToDelete = comments[index].id;

      axios
        .delete(`https://fatir-port-api.vercel.app/comment/${idToDelete}`)
        .then(() => {
          console.log("success");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //comment popup control
  const handleComment = (index) => {
    const newPopupDisplays = [...popupDisplays];

    for (let i = 0; i < newPopupDisplays.length; i++) {
      if (i !== index) {
        newPopupDisplays[i] = false;
      }
    }

    newPopupDisplays[index] = !newPopupDisplays[index];
    setPopupDisplays(newPopupDisplays);
  };

  
  return (
    <div className=" mt-48 flex flex-col md:flex-row justify-center w-screen rounded-[2rem] md:rounded-none bg-gray-950">
      <div className="flex flex-col justify-center items-center md:items-end rounded-r-[2rem] md:w-1/2 bg-cyan-950 text-slate-50 px-5 md:px-10 lg:px-20 py-10">
        <div className="flex flex-col items-start w-fit">
          <h1 className="text-xl md:text-2xl font-poppins font-bold self-start">
            Comment here
          </h1>
          <label
            htmlFor="comment"
            className="mt-6 text-gray-400 font-quicksand"
          >
            Comment
          </label>
          <div className="flex justify-between items-center mt-2 bg-gray-950 px-2 py-1 rounded-xl">
            <textarea
              id="comment"
              className=" h-20 w-64 md:w-72 text-lg bg-transparent outline-none resize-none"
              value={comment}
              onChange={handleMessage}
              maxLength="150"
            ></textarea>
            <span className="text-sm text-gray-400 w-12 px-2 self-end">
              {commentLen}/150
            </span>
          </div>
          <button
            type="button"
            className="px-4 py-2 rounded-xl bg-green-700 self-end mt-6 hover:bg-green-500 duration-150 disabled:text-gray-700 disabled:hover:bg-green-700"
            onClick={sendComment}
            disabled={!comment }
          >
            <FontAwesomeIcon icon={faPaperPlane} /> Send
          </button>
        </div>
      </div>
      <div className="flex flex-col rounded-r-3xl text-white md:w-1/2 py-10 px-5 md:px-10 lg:px-28">
        <div className="flex justify-between items-center">
          <FontAwesomeIcon
            icon={faArrowsRotate}
            className="hover:text-gray-400 duration-150 h-6 cursor-pointer"
            onClick={() => location.reload()}
            title="Refresh"
          />
          <p className="font-mooli">{countComments} comments</p>
        </div>
        <div className="rounded-2xl border flex flex-col items-start bg-gray-900 h-[60vh] overflow-y-auto py-10 mt-5">
          {comments.map((comment, i) => {
            const createdAtDate = new Date(comment.createdAt);
            const formattedDate = formatDistanceToNow(createdAtDate, {
              addSuffix: true,
            });
            return (
              <div
                className={`flex w-full items-start justify-between px-7 py-5 relative ${
                  comment.name === localName ? "bg-gray-800" : ""
                }`}
                key={i}
              >
                <div>
                  <p className={` font-poppins ${comment.name === localName ? "text-blue-400" : "text-gray-300"}`}>
                    <FontAwesomeIcon icon={faUserCircle} className="h-5" />{" "}
                    {comment.name}{" "}
                    <span className="text-gray-500 text-xs">
                      {formattedDate}
                    </span>
                  </p>
                  <p className="text-gray-300 font-quicksand flex-wrap text-wrap">
                    {comment.comment}
                  </p>
                </div>
                {comment.name === localName ? (
                  <button className="cursor-pointer hover:text-gray-400 duration-150">
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      onClick={() => handleComment(i)}
                      className="h-5 w-4"
                    />
                  </button>
                ) : (
                  ""
                )}
                {popupDisplays[i] && (
                  <div className={`absolute px-4 py-2 right-16 bg-slate-50 flex items-center justify-center shadow-2xl `}>
                    <button
                      className=" hover:bg-slate-300 border border-black rounded p-2 text-red-600 font-bold font-mooli text-sm"
                      onClick={() => deleteComment(i)}
                    >
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          <span className="mt-40 text-gray-500 text-xs font-raleway self-center">
            All negative comments will be humbled real quick!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
