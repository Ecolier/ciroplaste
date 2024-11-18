import crypto from "crypto";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {

  console.log(process.env, process.env.CMS_SECRET, process.env["CMS_SECRET"], process.env.NODE_PATH, process.env.VERCEL_REGION, process.env.NEXT_PUBLIC_CONTENT_BASE_URL)

  try {
    const text = await request.text();

    

    const key = Buffer.from(process.env.CMS_SECRET || "", "hex");

    const signature = crypto
      .createHmac("sha256", key)
      .update(text)
      .digest("hex");

    const trusted = Buffer.from(`sha256=${signature}`, "ascii");
    const untrusted = Buffer.from(
      request.headers.get("x-hub-signature-256") || "",
      "ascii"
    );

    if (!crypto.timingSafeEqual(trusted, untrusted)) {
      console.log("[Next.js] Invalid signature.", {
        trusted: trusted.toString("hex"),
        untrusted: untrusted.toString("hex"),
      });
      return new Response("Invalid signature.", {
        status: 400,
      });
    }

    const payload = JSON.parse(text);
    const { locale, story } = payload;

    console.log(`[Next.js] Revalidating /${locale}/explore`);
    revalidatePath(`/${locale}/explore`);

    if (story) {
      console.log(`[Next.js] Revalidating /${locale}/explore/${story}`);
      revalidatePath(`/${locale}/explore/${story}`);
    }
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
