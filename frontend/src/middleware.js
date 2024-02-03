import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
const blockedRoutesWithoutLogin = [
  "/admin/allusers",
  "/user/ethereum",
  "/user/cosmos",
  "/user/avalaunch",
  "/user/solona",
  "/user/sui",
  "/user/avalaunch",
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
  home.pathname = "/";
  afterAuth.pathname = "/";
  // Store current request url in a custom header, which you can read later
  if (req.nextUrl.pathname.startsWith("/user")) {
    const res = await fetch(
      process.env.NEXTAUTH_URL +
        "/api/OiBlock/" +
        req.nextUrl.pathname.replace("/user/", ""),
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    const data = await res.json();

    if (data.blocked) {
      if (!session) return NextResponse.redirect(auth);
    }
    // If user is unauthenticated, continue.
  }
  if (req.nextUrl.pathname.startsWith("/admin") && session && !session.admin) {
    //just push
    // You could also check for any property on the session object,
    // like role === "admin" or name === "Angelo", etc.
    return NextResponse.redirect(home);
  }

  if (req.nextUrl.pathname.includes("auth")) {
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
    "/user/:path*",
    "/admin/:path*",
    "/auth/:path*",
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
