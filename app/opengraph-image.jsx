import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          padding: "72px 80px",
          color: "#F4F4F5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.14em",
            color: "#828894",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#5AB8FF" }} />
          tejasbhovad.com
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#A0A5AF",
              lineHeight: 1.35,
              maxWidth: 900,
              letterSpacing: "-0.01em",
            }}
          >
            Creator of MC Render — Minecraft rendering in the browser, used
            by 30,000 people a month.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 22, color: "#828894" }}>
          {["Three.js", "Next.js", "C# / .NET", "Go", "WebSockets"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                border: "1px solid #26262B",
                borderRadius: 999,
                padding: "10px 22px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
