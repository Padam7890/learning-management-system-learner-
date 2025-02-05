export interface Course {
  id: string
  title: string
  type: "Course" | "Quiz" | "Page" | "Learning Path" | "Assignment"
  progress?: number
  status: "Not Started" | "In Progress" | "Completed"
  thumbnail: string
  materials?: number
  chapters?: number
  questions?: number
  path?: number
  category: string
  urgency: "Urgent" | "Not Urgent"
  passingPoints?: number
}

