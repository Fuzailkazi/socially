'use client';
import React, { useState } from 'react';
// import { Post } from '@prisma/client';
import { useUser } from '@clerk/nextjs';
import { getPosts } from '@/actions/post.action';

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];
const PostCard = ({
  post,
  dbUserId,
}: {
  post: Post;
  dbUserId: string | null;
}) => {
  const { user } = useUser();
  const [newComment, setNewComment] = useState('');
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [optimisticLikes, setOptimisticLikes] = useState(post._count.likes);
  const handleLike = async () => {
    if (isLiking) return;
    try {
      setIsLiking(true);
      setHasLiked((prev) => !prev);
      setOptimisticLikes((prev) => prev + (hasLiked ? -1 : +1));
    } catch (error) {
      setOptimisticLikes(post._count.likes);
      setHasLiked(post.likes.some((like) => like.userId === dbUserId));
      console.log(error);
    }
  };
  return <div>PostCard</div>;
};

export default PostCard;
