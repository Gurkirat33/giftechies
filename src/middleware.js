import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/backend")) {
    const accessToken = request.cookies.get("accessToken");

    if (!accessToken) {
      console.log("reaching here..");
      return NextResponse.redirect(new URL("/backend/signin", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/backend"],
};
