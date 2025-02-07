"use client";

import { useState, useEffect } from "react";
import { X, Clock, Mic, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Comment } from "./Comment";
import type { Comment as CommentType } from "../../types/dicussion";

export function DiscussionPanel({ chapterId }: { chapterId: number }) {
  const [comments, setComments] = useState<CommentType[]>(() => [
    {
      id: `${chapterId}-1`,
      content: `Comment for Chapter ${chapterId}: This chapter provides great insights!`,
      author: {
        name: "User 1",
        avatar: "/placeholder.svg",
      },
      likes: 12,
      replies: 1,
      timestamp: new Date().toISOString(),
    },
    {
      id: `${chapterId}-2`,
      content: `Question about Chapter ${chapterId}: Can you elaborate more on this principle?`,
      author: {
        name: "User 2",
        avatar: "/placeholder.svg",
      },
      likes: 3,
      replies: 1,
      timestamp: new Date(Date.now() - 1000 * 60 * 42).toISOString(),
    },
  ]);

  useEffect(() => {
    setComments([
      {
        id: `${chapterId}-1`,
        content: `Comment for Chapter ${chapterId}: This chapter provides great insights!`,
        author: {
          name: "User 1",
          avatar: "/placeholder.svg",
        },
        likes: 12,
        replies: 1,
        timestamp: new Date().toISOString(),
      },
      {
        id: `${chapterId}-2`,
        content: `Question about Chapter ${chapterId}: Can you elaborate more on this principle?`,
        author: {
          name: "User 2",
          avatar: "/placeholder.svg",
        },
        likes: 3,
        replies: 1,
        timestamp: new Date(Date.now() - 1000 * 60 * 42).toISOString(),
      },
    ]);
  }, [chapterId]);

  const [newComment, setNewComment] = useState("");
  const [attachedFile, setAttachedFile] = useState<string | null>(
    "Screenshot-02042023-18.jpg"
  );

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: CommentType = {
        id: `${chapterId}-${Date.now()}`,
        content: newComment,
        author: {
          name: "You",
          avatar: "/placeholder.svg",
        },
        likes: 0,
        replies: 0,
        timestamp: new Date().toISOString(),
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setAttachedFile(null);
    }
  };

  const handleLike = (commentId: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
              isLiked: !comment.isLiked,
            }
          : comment
      )
    );
  };

  const handleReply = (commentId: string, content: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies + 1,
            }
          : comment
      )
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <Input
          placeholder="'Trust in the product' example?"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-4"
        />
        {attachedFile && (
          <div className="flex gap-2 items-center">
            <Badge variant="secondary" className="flex items-center gap-1">
              <ImageIcon className="h-3 w-3" />
              {attachedFile}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0"
                onClick={() => setAttachedFile(null)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          </div>
        )}
        <div className="flex items-center gap-2 mt-4">
          <Button variant="ghost" size="icon">
            <Clock className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <span className="text-lg">😊</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Mic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Button className="ml-auto" onClick={handleAddComment}>
            Send
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onReply={handleReply}
            onLike={handleLike}
          />
        ))}
      </div>
    </div>
  );
}
