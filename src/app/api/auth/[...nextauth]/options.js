import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider  from "next-auth/providers/credentials";
import connectDB from "../../../../libs/mongodb";
import User from "../../../../models/User";

export const options = {
    providers: [
        // GitHubProvider({
        //     profile(profile){
                
        //         let userRole = "Github User"
                
        //         if(userRole == "Github User"){
        //             userRole = "admin"
        //         }

        //         console.log("Github Profile: ", userRole)

        //         return {
        //             ...profile,
        //             image: profile.avatar_url,
        //             role: userRole,
        //         };
        //     },
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        // }),
        // GoogleProvider({
        //     profile(profile){

        //         let userRole = "Google User"
        //         console.log("Google Profile: ", userRole)

        //         return {
        //             ...profile,
        //             id: profile.sub,
        //             image: profile.picture,
        //             role: userRole,
        //         };
        //     },
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET,
        // }),

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
                await connectDB();
                try{
                    //look for user
                    const user = await User.findOne({ username: credentials?.username });
                    //if no user, return null
                    if(!user){
                        return null;
                    }
                    //verify user 
                    if(credentials?.password === user.password_hash && credentials?.username === user.username){
                        return { id: user._id, username: user.username, image: user.image, role: user.role, first_name: user.first_name};
                        // return user;
                    }else{
                        return null;
                    }

                }catch(error){
                    console.error("Error authorizing user:", error);
                    return null;
                }

                // const defaultImage = "/assets/defaultIcon6.jpg";
                // //typically would get this from database, hardcoding for now
                // const user = { id: "5", name: "test", password: "pass", image: defaultImage, role: "admin"}
                // //verify user credentials here
                // if(credentials?.username === user.name && credentials?.password === user.password){
                //     return user
                // }
                // else{
                //     return null
                // }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }){
            if (user){
                token.id = user.id;
                token.username = user.username;
                token.first_name = user.first_name;
                token.role = user.role;
            }
            return token
        },
        //if using in client components
        async session({ session, token }){
            if (session?.user) {
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.first_name = token.first_name;
                session.user.role = token.role;
            }
            return session
        }
    }

}