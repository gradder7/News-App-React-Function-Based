import React from "react";
import classNames from "classnames";

export default function NewsItem(props) {
  //we can also take props like in object
  //usinf destructuring
  // let { title, description } = props;
  const classnames = classNames({
    warning: props.colorSource === "business",
    success: props.colorSource === "entertainment",
    danger: props.colorSource === "general",
    info: props.colorSource === "health",
    secondary: props.colorSource === "science",
    dark: props.colorSource === "sports",
    primary: props.colorSource === "technology",
  });
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className={`badge rounded-pill bg-${classnames}`}>
            {props.source}
          </span>
        </div>
        <img
          src={
            props.imgUrl
              ? props.imgUrl
              : "https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=1024x1024&w=is&k=20&c=OQpfeXBSwFZZ-OI08FautEpYI-3iUAJHlZTOTxRS3xE="
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}... </h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {props.author ? props.author : "Unknown"} on
              {new Date(props.date).toUTCString()}
            </small>{" "}
          </p>
          {/* to open a link in new tab use taget="_blank"*/}
          <a
            rel="noreferrer"
            href={props.newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
