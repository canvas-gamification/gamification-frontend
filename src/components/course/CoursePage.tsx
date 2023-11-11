'use client'
import { useCourses } from '@/hooks/api/use-courses'

export const CoursePage = () => {
  const { data, isLoading, error } = useCourses()

  if (error) return <div>failed to load</div>
  if (isLoading || !data) return <div>loading...</div>

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {data.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  )
}
