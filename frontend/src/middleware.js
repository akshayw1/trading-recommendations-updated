import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const blockedRoutesWithoutLogin = [
    "/user/ethereum",
    "/user/cosmos",
    "/user/solona",
    "/user/injective",
    "/user/quant",
    "/admin/allusers",
  ];
  const auth = req.nextUrl.clone();
  auth.pathname = "/autg/login";
  const afterAuth = req.nextUrl.clone();
  afterAuth.pathname = "/";
  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", req.url);

  if (blockedRoutesWithoutLogin.includes(req.nextUrl.pathname)) {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    //just push
    // You could also check for any property on the session object,
    // like role === "admin" or name === "Angelo", etc.
    if (!session) return NextResponse.redirect(auth);
    // If user is unauthenticated, continue.
  }

  if (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signup") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });

    if (session)
      //just push
      // You could also check for any property on the session object,
      // like role === "admin" or name === "Angelo", etc.
      return NextResponse.redirect(afterAuth);
    // If user is authenticated, continue.
  }

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
}
