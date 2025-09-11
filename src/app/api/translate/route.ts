import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { target, texts } = body as { target?: string; texts?: string[] };

  if (!target || !texts || !Array.isArray(texts) || texts.length === 0) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Use LibreTranslate public instance by default. You can override via
  // TRANSLATE_PROVIDER_URL env var (for a self-hosted LibreTranslate instance).
  const provider =
    process.env.TRANSLATE_PROVIDER_URL || "https://libretranslate.com";

  try {
    // LibreTranslate accepts one text per request reliably; batch with Promise.all
    const results = await Promise.all(
      texts.map(async (t) => {
        const res = await fetch(`${provider}/translate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q: t, source: "auto", target }),
        });
        const data = await res.json();
        // data.translatedText or data[0].translatedText depending on provider
        return (
          data.translatedText ||
          (Array.isArray(data) && data[0]?.translatedText) ||
          ""
        );
      })
    );

    return NextResponse.json({ translations: results });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
