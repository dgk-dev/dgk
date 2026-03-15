import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "이름, 이메일, 문의 내용을 모두 입력해 주세요." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 주소를 입력해 주세요." },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "문의 내용은 조금 더 구체적으로 적어 주세요." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL || "dgk@dgk.kr";

    if (!apiKey || !from) {
      return NextResponse.json(
        {
          error:
            "메일 전송이 아직 연결되지 않았습니다. 현재는 dgk@dgk.kr로 직접 보내주시면 됩니다.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[dgk.kr] ${name}님의 AX 문의`,
      html: `
        <div style="font-family: Pretendard, Arial, sans-serif; line-height: 1.7; color: #111827;">
          <h2 style="margin-bottom: 16px;">새 문의가 도착했습니다</h2>
          <p><strong>이름</strong><br />${escapeHtml(name)}</p>
          <p><strong>이메일</strong><br />${escapeHtml(email)}</p>
          <p><strong>문의 내용</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            "문의 전송 중 문제가 발생했습니다. dgk@dgk.kr로 직접 보내주시면 가장 빠릅니다.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      {
        error:
          "문의 전송 중 문제가 발생했습니다. dgk@dgk.kr로 직접 보내주시면 가장 빠릅니다.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
