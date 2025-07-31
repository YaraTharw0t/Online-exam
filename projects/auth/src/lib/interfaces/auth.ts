
// interface for data form API
export interface Auth {
     message: string
  token: string
  user: User
}

// interface for data form API

export interface User {
  username: string
  firstName: string
  lastName: string
  email: string
  phone: string
  _id: string
}

// interface for method adapt bec don't use any 

export interface AuthResponse {
     message: string
  token: string
  email:string
}


 export interface LoginForm {

  email:string
  password:string
  
 }
 export interface registerForm {
  username:string
  firstName:string
  lastName:string
  email:string
  password:string
  rePassword:string
  phone:number

 }

