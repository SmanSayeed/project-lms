import React from "react";

export default function MainLogo({
  width,
  height,
}: {
  width: string;
  height: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 172 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle fill="#FF9800" cx="12" cy="12" r="12" />
      <circle fill="#F44336" cx="60" cy="30" r="12" />
      <path fill="#4CAF50" d="M63,42H36v18h18v12h18V51C72,46,68,42,63,42z" />
      <path fill="#2196F3" d="M9,24c-5,0-9,4-9,9v33h18V42h18V24H9z" />
      <text
        transform="translate(82.85 59.18)"
        style={{
          fontSize: 38,
          fontWeight: 700,
          fill: "var(--text-color)",
        }}
      >
        <tspan x="0" y="0">
          শিক্ষা
        </tspan>
      </text>
    </svg>
  );
}
