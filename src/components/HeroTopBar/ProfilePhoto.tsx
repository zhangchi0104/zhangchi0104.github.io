import React from "react";

const ProfilePhoto: React.FC = () => (
  <div className="flex justify-end">
    <img
      className="w-80 h-80 bg-gray-300 object-cover"
      src="/static/imgs/profile-min.png"
    />
  </div>
);

export default ProfilePhoto;
