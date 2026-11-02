
import React from "react";

type TitleVariant = "default" | "gradient" | "muted";
type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps {
  children: React.ReactNode;
  as?: TitleLevel;
  size?: TitleSize;
  variant?: TitleVariant;
  weight?: "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  color?: string;
  className?: string;
  subtitle?: string;
}

const sizeStyles: Record<TitleSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
};

const variantStyles: Record<TitleVariant, string> = {
  default: "text-gray-900",
  gradient: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
  muted: "text-gray-500",
};

const weightStyles = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export default function Title({
  children,
  as: Tag = 2,
  size = "2xl",
  variant = "default",
  weight = "bold",
  align = "left",
  color,
  className = "",
  subtitle,
}: TitleProps) {
  const HeadingTag = `h${Tag}` as const;

  return (
    <div className={`space-y-1 text-${align}`}>
      <HeadingTag
        className={`
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${weightStyles[weight]}
          ${className}
        `}
        style={color ? { color } : undefined}
      >
        {children}
      </HeadingTag>

      {subtitle && (
        <p className="text-sm font-normal text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}
