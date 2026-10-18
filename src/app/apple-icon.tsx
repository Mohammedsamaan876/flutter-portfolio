import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 82,
          background: "#2D2422",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 42,
          fontWeight: 900,
          letterSpacing: "-3px",
          border: "4px solid rgba(236, 91, 56, 0.45)",
        }}
      >
        <span style={{ color: "#FCF2E5" }}>MS</span>
        <span style={{ color: "#EC5B38" }}>J</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
