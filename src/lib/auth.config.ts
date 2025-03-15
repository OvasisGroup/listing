import type { NextAuthConfig } from "next-auth"
import Apple from "next-auth/providers/apple"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
 
export default { 
    providers: [Google, GitHub, Apple] } satisfies NextAuthConfig