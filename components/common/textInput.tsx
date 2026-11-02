
"use client";

import React, { useId } from "react";

type InputSize = "sm" | "md" | "lg";
type InputVariant = "default" | "filled";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: InputSize;
  variant?: InputVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-13 px-4 text-base",
};

const variantStyles: Record<InputVariant, string> = {
  default: "bg-white border border-gray-300",
  filled: "bg-gray-100 border border-transparent",
};

export default function Input({
  label,
  error,
  helperText,
  size = "md",
  variant = "default",
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  id,
  disabled,
  required,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={fullWidth ? "w-full" : "w-auto"}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {label}
        {required && (
  <span aria-hidden="true" className="ml-1 text-red-500">
    *
  </span>
)}
        </label>
      )}

      <div
        className={`
          flex items-center gap-2 rounded-lg transition-all duration-200
          focus-within:border-blue-500 focus-within:ring-2
          focus-within:ring-blue-500/20
          ${variantStyles[variant]}
          ${error ? "border-red-500" : ""}
          ${disabled ? "cursor-not-allowed opacity-60" : ""}
          ${sizeStyles[size]}
        `}
      >
        {leftIcon && <span className="shrink-0 text-gray-400">{leftIcon}</span>}

        <input
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
                ? `${inputId}-helper`
                : undefined
          }
          className={`
            h-full min-w-0 flex-1 bg-transparent outline-none
            placeholder:text-gray-400 disabled:cursor-not-allowed
            ${className}
          `}
          {...props}
        />

        {rightIcon && (
          <span className="shrink-0 text-gray-400">{rightIcon}</span>
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${inputId}-helper`} className="mt-1 text-xs text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
