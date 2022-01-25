import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((resp) => {
        // console.log(resp);
        setFriends(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* </div> */}
      <h1>Friends List</h1>
      {/* </div> */}
      <ul>
        {friends.map((friend) => {
          return (
            <li>
              Name: {friend.name} Age: {friend.age} Email: {friend.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
