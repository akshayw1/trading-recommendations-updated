import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { compare } from "bcrypt";

const handler = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      console.log(account?.provider);
      return true;
    },
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        password: {
          label: "Password",
          type: "password",
        },
        email: {
          label: "Email",
          type: "text",
        },
      },

      async authorize(credentials) {
        await connectMongoDB();
        const user =
          credentials?.email !== " "
            ? await User.findOne({
                email: credentials?.email.toUpperCase(),
              })
            : null;

        if (!user) {
          console.log("Invalid Email");
          throw new Error("Wrong credentials");
        }

        if (
          user.password !== " " &&
          (await compare(credentials!.password, user.password))
        ) {
          if (user.isVerifiedUser) {
            console.log("user logged");
            return user;
          } else {
            throw new Error("Unverified User");
          }
        } else {
          console.log("Invalid Password");
          throw new Error("Wrong credentials");
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
