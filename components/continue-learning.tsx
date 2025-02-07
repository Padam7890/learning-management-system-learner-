import { CourseCard } from "@/components/course-card"
import { allCourses } from "@/data/coursedata"
import type { Course } from "@/types/course"



export function ContinueLearning() {
  return (
    <section className="space-y-6 py-8">
      <h2 className="text-2xl font-semibold tracking-tight">Continue Learning</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

