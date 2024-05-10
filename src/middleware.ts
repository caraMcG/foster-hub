//withou a matcher, will protect all pages with next-auth
export { default } from "next-auth/middleware"

//applies next-auth only to matching routes
export const config = { matcher: ["/dashboard"] }