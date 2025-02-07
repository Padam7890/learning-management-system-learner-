"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { formatDistanceToNow } from "date-fns"
import type { Comment as CommentType } from "../../types/dicussion"

interface CommentProps {
  comment: CommentType
  onReply: (commentId: string, content: string) => void
  onLike: (commentId: string) => void
}

export function Comment({ comment, onReply, onLike }: CommentProps) {
  const [isReplying, setIsReplying] = useState(false)
  const [replyContent, setReplyContent] = useState("")

  const handleSubmitReply = () => {
    if (replyContent.trim()) {
      onReply(comment.id, replyContent)
      setReplyContent("")
      setIsReplying(false)
    }
  }

  return (
    <div className="p-4 bg-muted/20 rounded-lg space-y-4">
      <div className="flex items-start gap-2">
        <Image
          src={comment.author.avatar || "/placeholder.svg"}
          alt={`${comment.author.name}'s avatar`}
          width={24}
          height={24}
          className="rounded-full"
        />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{comment.author.name}</span>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true })}
            </span>
          </div>
          <p className="text-sm">{comment.content}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Button
          variant="ghost"
          size="sm"
          className={`h-auto p-0 ${comment.isLiked ? "text-primary" : "text-muted-foreground"}`}
          onClick={() => onLike(comment.id)}
        >
          {comment.likes} Likes
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-auto p-0 text-muted-foreground"
          onClick={() => setIsReplying(!isReplying)}
        >
          {comment.replies} Replies
        </Button>
      </div>
      {isReplying && (
        <div className="space-y-2">
          <Textarea
            placeholder="Write a reply..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="min-h-[80px]"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsReplying(false)}>
              Cancel
            </Button>
            <Button size="sm" onClick={handleSubmitReply}>
              Reply
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

