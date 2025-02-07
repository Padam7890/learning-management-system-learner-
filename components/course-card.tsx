import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import type { Course } from "@/types/course"
import Link from "next/link"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image src={course.thumbnail || "/placeholder.svg"} alt={course.title!} fill className="object-cover" />
          <div className="absolute right-2 top-2 rounded bg-white/90 px-2 py-1 text-xs font-medium">{course.type}</div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <h3 className="font-semibold leading-none tracking-tight">{course.title}</h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="bg-primary-foreground px-3 py-2 rounded-full">
              {/* {course.materials ?? course.chapters ?? course.questions ?? course.path}{" "} */}
              {course.materials ? "Materials" : course.chapters ? "Chapters" : course.questions ? "Questions" : "Path"}
            </span>
            <span className={course.urgency === "Urgent" ? "text-red-500 bg-primary-foreground px-3 py-2 rounded-full" : "rounded-muted-bg"}>{course.urgency}</span>
          </div>
          {course.progress !== undefined && <Progress value={course.progress} className="h-2" />}
          <div className="flex items-center justify-between">
            <div>
            <span className="text-sm text-muted-foreground">Progress: {course.progress ?? 0}%</span>
            <p className=" text-sm font-bold"> 20 <span className=" text-muted-foreground">pts</span> </p>
            </div>
            <Button variant="outline" size="sm">
              <Link href={`course/${course.uid}`}>
              {course.status === "Not Started" ? "Start" : course.status === "In Progress" ? "Continue" : "View"}

              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

