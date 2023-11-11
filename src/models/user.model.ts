export interface User {
  id: number
  username: string
  first_name: string
  last_name: string
  has_consent: boolean
  is_student: boolean
  is_teacher: boolean
  role: string
  token: string
  community_jwt: string
}
