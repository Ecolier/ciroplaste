import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");
  const locale = request.nextUrl.searchParams.get("locale");
  if (!path || !locale) {
    return Response.json({
      revalidated: false,
    });
  }
  revalidatePath(`/${locale}${path}`);
  return Response.json({
    revalidated: true,
  });
}
