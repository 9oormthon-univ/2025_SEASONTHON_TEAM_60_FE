import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const protectedPaths = ["/dashboard", "/account", "/verify", "/my-badges"];

  const { pathname } = request.nextUrl;
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtected && !token) {
    new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`,
      request.url,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/account/:path*",
    "/verify/:path*",
    "/my-badges/:path*",
  ],
};
