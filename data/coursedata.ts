import { Course } from "@/types/course";

export const allCourses: Course[] = [
  {
    id: 3,
    uid: "5f4a71927779900000906385",

    title: "5 Steps Optimizing User Experience",
    type: "Quiz",
    status: "Not Started",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lms%20design-HOB97hHk2DOzhcMWSuAvL5DTRUoNs3.png",
    questions: 20,
    category: "UI/UX Design",
    urgency: "Urgent",
    passingPoints: 20,
    progress: 60,
    materials: 12,
    chapters: [
      {
        id: 1,
        title: "Visibility of system status",
        content: `The first principle is about keeping users informed about their actions and what's happening at a given interaction. When users are informed of the current system status, they learn the results of their past interactions, so they can better determine what their next steps will be.
    
    What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    
    Where does it come from?
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      },
      {
        id: 2,
        title: "Match between system and the real world",
        content:
          "The system should speak the users' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms. Follow real-world conventions, making information appear in a natural and logical order.",
      },
    ],
  },
  // Add more courses here...

  {
    id: 4,
    uid: "5f4a71927779900000906386",
    title: "Advanced CSS Techniques",
    type: "Course",
    status: "In Progress",
    thumbnail:
      "https://example.com/advanced-css-thumbnail.png",
    materials: 15,
    category: "Web Development",
    urgency: "Not Urgent",
    progress: 45,
    chapters: [
      {
        id: 1,
        title: "CSS Grid Layout",
        content: `CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns, and you have control over both the rows and columns at the same time. This makes it a powerful tool for creating complex layouts.`,
      },
      {
        id: 2,
        title: "Flexbox",
        content:
          "Flexbox is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces. It is a great tool for creating responsive designs.",
      },
    ],
  },
  {
    id: 5,
    uid: "5f4a71927779900000906387",
    title: "JavaScript ES6 and Beyond",
    type: "Course",
    status: "Completed",
    thumbnail:
      "https://example.com/js-es6-thumbnail.png",
    materials: 10,
    category: "Programming",
    urgency: "Urgent",
    progress: 100,
    chapters: [
      {
        id: 1,
        title: "Introduction to ES6",
        content: `ES6, also known as ECMAScript 2015, introduced many new features to JavaScript. These include let and const, arrow functions, template literals, and more. This chapter covers the basics of these new features.`,
      },
      {
        id: 2,
        title: "Advanced ES6 Features",
        content:
          "In this chapter, we dive deeper into ES6 features such as classes, modules, and promises. These features help you write cleaner and more maintainable code.",
      },
    ],
  }

];
