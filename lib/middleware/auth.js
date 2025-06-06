import { NextResponse } from "next/server";

export default function authMiddleware(req) {
  if (!req.nextUrl.pathname.startsWith("/register")
      && !req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/register", req.url));
  }
  return NextResponse.next();
}