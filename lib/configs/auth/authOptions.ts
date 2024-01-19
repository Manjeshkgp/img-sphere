import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'


const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
      CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials: any) {
          await connectMongoDB();
          try {
            const user = await User.findOne({ email: credentials.email });
            if (user) {
              const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
              );
              if (isPasswordCorrect) {
                return user;
              }
            }
          } catch (err: any) {
            throw new Error(err);
          }
        },
      }),
      // GithubProvider({
      //   clientId: process.env.GITHUB_ID ?? "",
      //   clientSecret: process.env.GITHUB_SECRET ?? "",
      // }),
      // ...add more providers here
    ],
    callbacks: {
      // async signIn({ user, account }: { user: AuthUser; account: Account }) {
      //   if (account?.provider == "credentials") {
      //     return true;
      //   }
  
      // },
      async signIn({user,account}) {
        if(account?.provider == "credentials"){
          return true;
        }else{
          return false;
        }
      },
    },
    secret: process.env.NEXT_AUTH_SECRET
  };
export default authOptions;