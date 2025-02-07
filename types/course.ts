export interface Chapter {
  id: number
  title: string
  content: string
}

export interface Course {
  id?: number
  uid: string
  title?: string
  type?: "Course" | "Quiz" | "Page" | "Learning Path" | "Assignment"
  progress?: number
  status?: "Not Started" | "In Progress" | "Completed"
  thumbnail?: string
  materials?: number
  chapters: Chapter[]
  questions?: number
  path?: number
  category?: string
  urgency?: "Urgent" | "Not Urgent"
  passingPoints?: number
}

