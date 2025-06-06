import { NextResponse } from "next/server";
import authMiddleware from "./lib/middleware/auth";

export function middleware(req) {
  console.log(`🔔 Requested URL: ${req.nextUrl.pathname}`);
  const response = authMiddleware(req);
  if (response) {
    return response;
  }
  return NextResponse.next();
}

export function fallbackToPosts(req) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/posts", req.url));
  }
}