import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: "#2D2422",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          fontWeight: 900,
          letterSpacing: "-0.5px",
          border: "1px solid rgba(236, 91, 56, 0.45)",
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
