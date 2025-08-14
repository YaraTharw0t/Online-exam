
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

 //go to api 
 export interface LoginForm {

  email:string
  password:string
  
 }
 //go to api
 export interface registerForm {
  username:string
  firstName:string
  lastName:string
  email:string
  password:string
  rePassword:string
  phone:number

 }

 //come from api
 export interface forgetpass{
  message:string
  info:string

 }

 //go to api
 export interface forgetform{
  email:string
 }

 //come from api
 export interface ResetCode{
  status:string
 }

 //go to api

 export interface ResetCodeform{
  resetCode:number
 }

 export interface setpass{
  message:string
  token:string
 }

 export interface setpassform{
  email:string
  newPassword:string
 }


