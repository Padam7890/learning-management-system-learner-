import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import type { Course } from "@/types/course"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image src={course.thumbnail || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
          <div className="absolute right-2 top-2 rounded bg-white/90 px-2 py-1 text-xs font-medium">{course.type}</div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <h3 className="font-semibold leading-none tracking-tight">{course.title}</h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              {course.materials ?? course.chapters ?? course.questions ?? course.path}{" "}
              {course.materials ? "Materials" : course.chapters ? "Chapters" : course.questions ? "Questions" : "Path"}
            </span>
            <span className={course.urgency === "Urgent" ? "text-red-500" : ""}>{course.urgency}</span>
          </div>
          {course.progress !== undefined && <Progress value={course.progress} className="h-2" />}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Progress: {course.progress ?? 0}%</span>
            <Button variant="outline" size="sm">
              {course.status === "Not Started" ? "Start" : course.status === "In Progress" ? "Continue" : "View"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

