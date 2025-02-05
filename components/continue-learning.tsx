import { CourseCard } from "@/components/course-card"
import type { Course } from "@/types/course"

const inProgressCourses: Course[] = [
  {
    id: "1",
    title: "Creating Engaging Learning Journeys: UI/UX Best Practices",
    type: "Course",
    progress: 60,
    status: "In Progress",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lms%20design-HOB97hHk2DOzhcMWSuAvL5DTRUoNs3.png",
    materials: 12,
    category: "UI/UX Design",
    urgency: "Not Urgent",
  },
  {
    id: "2",
    title: "The Art of Blending Aesthetics and Functionality in UI/UX Design",
    type: "Course",
    progress: 30,
    status: "In Progress",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lms%20design-HOB97hHk2DOzhcMWSuAvL5DTRUoNs3.png",
    materials: 12,
    category: "UI/UX Design",
    urgency: "Not Urgent",
  },
]

export function ContinueLearning() {
  return (
    <section className="space-y-6 py-8">
      <h2 className="text-2xl font-semibold tracking-tight">Continue Learning</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {inProgressCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

