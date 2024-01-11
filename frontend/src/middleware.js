import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
const blockedRoutesWithoutLogin = [
  "/admin/allusers",
  "/user/ethereum",
  "/user/cosmos",
  "/user/solona",
  "/user/injective",
  "/user/quant",
  "/admin",
];
export default async function middleware(req) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: !(process.env.SECURE_COOKIE === "false"),
  });

  const auth = req.nextUrl.clone();
  auth.pathname = "/auth/login";
  const afterAuth = req.nextUrl.clone();
  const home = req.nextUrl.clone();
  home.pathname = "/home";
  afterAuth.pathname = "/home";
  // Store current request url in a custom header, which you can read later
  console.log(req.nextUrl.pathname);

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(home);
  }
  if (blockedRoutesWithoutLogin.includes(req.nextUrl.pathname)) {
    //just push
    // You could also check for any property on the session object,
    // like role === "admin" or name === "Angelo", etc.

    if (req.nextUrl.pathname === "/admin/allusers" && session && !session.admin)
      return NextResponse.redirect(home);

    if (!session) console.log("session status", session);
    if (!session) return NextResponse.redirect(auth);
    // If user is unauthenticated, continue.
  }

  if (
    req.nextUrl.pathname === "/auth/login" ||
    req.nextUrl.pathname === "/auth/signup"
  ) {
    if (session)
      //just push
      // You could also check for any property on the session object,
      // like role === "admin" or name === "Angelo", etc.
      return NextResponse.redirect(afterAuth);
    // If user is authenticated, continue.
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/admin/allusers",
    "/user/ethereum",
    "/user/cosmos",
    "/user/solona",
    "/user/injective",
    "/user/quant",
    "/admin",
    "/auth/login",
    "/auth/signup",
    "/",
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
