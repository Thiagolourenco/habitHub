import React from "react";
import { Svg, Circle, Text as Text } from 'react-native-svg'

interface ICircularProgress {
  size: number
  progress: number
  strokeWidth: number
  color?: string
  text?: string
  isSelected?: boolean
  fontSize?: number
}

export const CircularProgress = ({ size, progress, strokeWidth, color, text, isSelected, fontSize = 12}: ICircularProgress) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressStrokeDashoffset = circumference - (progress / 100) * circumference;
  const stroke = !isSelected  ? color : ""

  return (
    <Svg width={size} height={size} style={{ marginHorizontal: 6}} >
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={isSelected ? "transparent" : "rgba(124, 145, 244, 0.3)" }
        strokeWidth={strokeWidth}
      />
      <Circle
        fill={isSelected ? "#7C91F4" : "#ffffff" }
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={progressStrokeDashoffset}
        strokeLinecap="round"
      />
      <Text
        x={size / 2}
        y={size / 2}
        fill={isSelected ? "#ffffff": "#Cccccc"}
        fontSize={fontSize}
        fontWeight={"600"}
        alignmentBaseline="middle"
        textAnchor="middle"
        >
        {text}
      </Text>
    </Svg>
  );
};
