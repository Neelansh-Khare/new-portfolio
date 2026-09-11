"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CopyableValueProps {
  /** Value written to the clipboard. */
  value: string;
  /** Anchor href — typically `mailto:` or `tel:` — matching the value. */
  href: string;
  /** Accessible label used in the copy button's aria-label (e.g. "email"). */
  label: string;
  /** Optional display string when it differs from `value`. */
  displayValue?: string;
  className?: string;
}

/**
 * Renders `value` as a link plus a "copy to clipboard" icon button.
 * Falls back gracefully if the clipboard API is unavailable — the link still
 * works and the button becomes a no-op.
 */
export function CopyableValue({
  value,
  href,
  label,
  displayValue,
  className,
}: CopyableValueProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    if (!navigator?.clipboard) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Silent fail — user can still use the link directly.
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <a
        href={href}
        className="text-foreground hover:text-primary transition-colors break-all"
      >
        {displayValue ?? value}
      </a>
      <button
        type="button"
        onClick={onCopy}
        aria-label={copied ? `Copied ${label}` : `Copy ${label}`}
        aria-live="polite"
        className={cn(
          "shrink-0 p-1 rounded transition-colors",
          "text-muted-foreground hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
        )}
      >
        {copied ? (
          <Check className="w-3.5 h-3.5" aria-hidden="true" />
        ) : (
          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
