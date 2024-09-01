import React, { useState } from "react";
import { Heart, Share2, MessageCircle } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  likes,
  comments,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-slate-700">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl || "/api/placeholder/400/200"}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-100 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200">
        <button
          onClick={handleLike}
          className={`flex items-center ${
            isLiked ? "text-red-500" : "text-gray-500"
          } hover:text-red-500`}
        >
          <Heart
            className="mr-1"
            size={20}
            fill={isLiked ? "currentColor" : "none"}
          />
          <span>{likeCount}</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-blue-500">
          <MessageCircle className="mr-1" size={20} />
          <span>{comments}</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-green-500">
          <Share2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
