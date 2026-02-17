import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import axiosInstance from "./axios";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github],
  session:{
    strategy: "jwt",
    maxAge:  60 * 60 * 24 * 30,//30 days
  }, 
  callbacks:{
    async signIn({profile}){
      try {
        if(!profile) return false;
        const { email, name, email_verified } = profile;
        if(!email_verified) return false;
        await axiosInstance.post("/api/auth/signin", {
          email,
          name
        });
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
      }
      return false;
    }
  }
});