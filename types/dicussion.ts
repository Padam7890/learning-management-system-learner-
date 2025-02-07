export interface Comment {
    id: string
    content: string
    author: {
      name: string
      avatar: string
    }
    likes: number
    replies: number
    timestamp: string
    isLiked?: boolean
  }
  
  export interface Reply {
    id: string
    content: string
    author: {
      name: string
      avatar: string
    }
    parentId: string
    timestamp: string
  }
  
  