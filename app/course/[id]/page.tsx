"use client";

import { ArrowLeft, X, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { DiscussionPanel } from "../../../components/courseview/discussion-panel";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { Course, Chapter } from "../../../types/course";
import { useRouter, useSearchParams } from "next/navigation";
import { allCourses } from "@/data/coursedata";

export default function CourseViewer() {
  const searchParams = useSearchParams();
  const navigate = useRouter();

  const chapterIdFromQuery = parseInt(searchParams.get("chapterId") || "1", 10);
  const course = allCourses[0]; 

  const [activeTab, setActiveTab] = useState<"content" | "discussion">("content");
  const [currentChapter, setCurrentChapter] = useState<Chapter>(
    course.chapters.find((chapter) => chapter.id === chapterIdFromQuery) || course.chapters[0]
  );
  const [isFullSize, setIsFullSize] = useState(false);

  useEffect(() => {
    navigate.replace(`?chapterId=${currentChapter.id}`);
  }, [currentChapter, navigate]);

  const goToNextChapter = () => {
    const currentIndex = course.chapters.findIndex((chapter) => chapter.id === currentChapter.id);
    if (currentIndex < course.chapters.length - 1) {
      setCurrentChapter(course.chapters[currentIndex + 1]);
      setActiveTab("content");
    }
  };

  const goToPreviousChapter = () => {
    const currentIndex = course.chapters.findIndex((chapter) => chapter.id === currentChapter.id);
    if (currentIndex > 0) {
      setCurrentChapter(course.chapters[currentIndex - 1]);
      setActiveTab("content");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center h-16">
            <Button onClick={() => navigate.back()} variant="ghost" size="icon" className="mr-2 lg:hidden">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2 text-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design%20this%20course%20vieweing%20-C4M8GlZn8WXw6TLIIgiRRVLZanN2xq.png"
                alt="Course icon"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="hidden sm:inline">{course.title}</span>
              <span className="sm:hidden">UI Heuristics</span>
            </div>
          </div>
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "content" | "discussion")}
            className="lg:hidden"
          >
            <TabsList className="h-10">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>

      {/* Main Content and Sidebar */}
      <div
        className={`flex-grow flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 ${
          isFullSize ? "lg:max-w-full lg:px-0" : ""
        }`}
      >
        <main
          className={`flex-1 py-6 lg:pr-6 ${
            activeTab === "discussion" && !isFullSize ? "hidden lg:block" : "block"
          } relative`}
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute top-0 -right-2 hidden lg:block"
            onClick={() => setIsFullSize(!isFullSize)}
          >
            <ArrowLeftRight className="h-4 w-4 mx-auto" />
          </Button>
          <div className="overflow-y-auto max-h-[calc(100vh-8rem)]">
            <div className="mb-6">
              <div className="text-sm text-muted-foreground mb-1">
                Section 1 • Chapter {currentChapter.id} of {course.chapters.length}
              </div>
              <h1 className="text-2xl font-semibold">{currentChapter.title}</h1>
            </div>

            <div className="aspect-video bg-pink-50 rounded-lg mb-6 p-4 lg:p-8">
              <div className="space-y-6">
                <div className="bg-white rounded px-3 py-2 flex items-center justify-between w-64 max-w-full">
                  <span className="text-sm">Item added to your cart</span>
                  <X className="h-4 w-4" />
                </div>

                <div className="w-64 max-w-full">
                  <Progress value={75} className="h-2" />
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-black text-white">
                    Sneakers
                  </Badge>
                  <Badge variant="outline">Slippers</Badge>
                  <Badge variant="outline">Boots</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>{currentChapter.content}</p>
              <div className="flex items-center gap-2 p-4 bg-muted/20 rounded-lg">
                <span className="text-amber-500">💡</span>
                <p>
                  <strong>Remember:</strong> When a design is predictable, it builds trust in the product.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar / Discussion Panel */}
        <aside
          className={`w-full lg:w-80 lg:border-l lg:pl-6 bg-white ${
            activeTab === "discussion" && !isFullSize ? "block" : "hidden lg:block"
          } ${isFullSize ? "lg:hidden" : ""}`}
        >
          <div className="py-6 h-[calc(100vh-7.5rem)] lg:h-[calc(100vh-4rem)] overflow-y-auto">
            <DiscussionPanel chapterId={currentChapter.id} />
          </div>
        </aside>
      </div>

      {/* Footer */}
      <div className="border-t bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button variant="ghost" className="text-sm">
            Report An Issue
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={goToPreviousChapter} disabled={currentChapter.id === 1}>
              Previous
            </Button>
            <Button onClick={goToNextChapter} disabled={currentChapter.id === course.chapters.length}>
              Next Chapter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
