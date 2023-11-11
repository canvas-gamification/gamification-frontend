import { type Course } from '@/models/course.model'
import { useQuery } from './use-query'

export const useCourses = () => {
  return useQuery<Course[]>({
    url: 'course/',
  })
}
