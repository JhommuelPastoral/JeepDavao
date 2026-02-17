import { auth } from "@/lib/auth";
 
export const proxy = auth((req) => {
  
  const { pathname } = req.nextUrl;
  
  const publicPages = ["/", "/login", "/register"];
  
  if (!req.auth && !publicPages.includes(pathname)) {
    return Response.redirect(new URL("/", req.nextUrl.origin));
  }
  
  if (req.auth && publicPages.includes(pathname)) {
    return Response.redirect(new URL("/dashboard", req.nextUrl.origin));
  }
  
})


export const config = {
  matcher: ["/", "/dashboard/:path*"],
};