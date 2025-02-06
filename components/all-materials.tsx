"use client"

import { useState } from "react"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Filter, LayoutGrid, List, Search } from "lucide-react"
import type { Course } from "@/types/course"

const allCourses: Course[] = [
  {
    id: "3",
    title: "5 Steps Optimizing User Experience",
    type: "Quiz",
    status: "Not Started",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lms%20design-HOB97hHk2DOzhcMWSuAvL5DTRUoNs3.png",
    questions: 20,
    category: "UI/UX Design",
    urgency: "Urgent",
    passingPoints: 20,
  },
  // Add more courses here...
]

const statusFilters = ["All Status", "Not Started", "In Progress", "Completed"]

export function AllMaterials() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [selectedStatus, setSelectedStatus] = useState("All Status")

  return (
    <section className="space-y-6 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-center">
          All Materials
          <span className="ml-2 text-base text-muted-foreground bg-slate-200 p-1 rounded-md">27</span>
        </h2>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {statusFilters.map((status) => (
            <Button
              key={status}
              variant={selectedStatus === status ? "default" : "outline"}
              onClick={() => setSelectedStatus(status)}
              size="sm"
              className="rouned-full"
            >
              {status}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex w-full max-w-sm items-center">
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-full pl-8 sm:w-[300px]" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <div className="flex items-center rounded-md border">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setView("grid")}
              className={view === "grid" ? "bg-muted" : ""}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setView("list")}
              className={view === "list" ? "bg-muted" : ""}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className={view === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4" : "space-y-4"}>
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

