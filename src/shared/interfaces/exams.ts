export interface Exams {
     message: string
  metadata: Metadata
  exams: Exam[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface Exam {
  _id: string
  title: string
  duration: number
  subject: string
  numberOfQuestions: number
  active: boolean
  createdAt: string
}
export interface ExamWithImage extends Exam{
   localImage: string;
}