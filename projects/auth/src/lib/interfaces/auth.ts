export interface Auth {
     message: string
  token: string
  user: User
}


export interface User {
  username: string
  firstName: string
  lastName: string
  email: string
  phone: string
  _id: string
}

