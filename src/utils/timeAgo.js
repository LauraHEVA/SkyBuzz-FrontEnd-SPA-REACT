import React from "react";
import ReactTimeAgo from "react-time-ago";

export default function Published({ date }) {
  return (
    <div>
      Published: <ReactTimeAgo date={date} locale="en-US" />
    </div>
  );
}
