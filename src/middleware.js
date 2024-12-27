import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

//without a matcher, will protect all pages with next-auth
// export { default } from "next-auth/middleware";

export default withAuth (function middleware(req){

    if(req.nextauth.token.role != "admin" && req.nextUrl.pathname.startsWith("/admin")){

        console.log("oof wrong place for you");
        return NextResponse.rewrite(new URL("/denied", req.url));

    }
    // Protect admin API routes
    if (req.nextUrl.pathname.startsWith("/api/admin") && req.nextauth.token.role !== "admin") {
        return NextResponse.rewrite(new URL("/denied", req.url));
    }
},
{
    callbacks:{
        authorized: ({token}) => !!token
    }
});

//applies next-auth only to matching routes
export const config = { matcher: ["/dashboard", "/admin", "/userprofile", "/requests", "/denied", "/api/:path*"] };
//"/api/:path*"