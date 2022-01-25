import React from "react";

const AddFriends = () => {
  return (
    <div>
      <h1>Add Friends</h1>
      <form>
        <div>
          <label htmlFor='newfriendname'>New Friend Name:</label>
          <input id='friendname' />
        </div>
        <div>
          <label htmlFor='newfriendage'>New Friend Age:</label>
          <input id='friendage' />
        </div>
        <div>
          <label htmlFor='newfriendemail'>New Friend Email:</label>
          <input id='newfriendemail' />
        </div>
        <button>Submit New Friend</button>
      </form>
    </div>
  );
};

export default AddFriends;
