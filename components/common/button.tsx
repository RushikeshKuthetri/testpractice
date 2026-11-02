
"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-blue-600/20",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-100 active:bg-gray-200",
  danger:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-red-600/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-5 py-2.5 text-sm rounded-lg",
  lg: "px-7 py-3 text-base rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        font-medium transition-all duration-200 ease-in-out
        hover:-translate-y-0.5 hover:shadow-lg
        active:translate-y-0 active:scale-95
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-blue-500 focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        disabled:transform-none disabled:shadow-none
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="inline-flex">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
