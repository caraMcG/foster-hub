import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider  from "next-auth/providers/credentials";
import defaultImage from "../../../assets/defaultIcon2.jpg";

export const options = {
    providers: [
        GitHubProvider({
            profile(profile){
                
                let userRole = "Github User"
                
                if(userRole == "Github User"){
                    userRole = "admin"
                }

                console.log("Github Profile: ", userRole)

                return {
                    ...profile,
                    image: profile.avatar_url,
                    role: userRole,
                };
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            profile(profile){

                let userRole = "Google User"
                console.log("Google Profile: ", userRole)

                return {
                    ...profile,
                    id: profile.sub,
                    image: profile.picture,
                    role: userRole,
                };
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username:{
                    label: "Username:",
                    type: "text",
                    placeholder: "your-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            
            async authorize(credentials){
                //typically would get this from database, hardcoding for now
                const user = { id: "5", name: "test", password: "pass", image: defaultImage.src, role: "admin"}
                console.log( defaultImage);
                //verify user credentials here
                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }
                else{
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }){
            if (user) token.role = user.role
            return token
        },
        //if using in client components
        async session({ session, token }){
            if (session?.user) session.user.role = token.role
            return session
        }
    }

}