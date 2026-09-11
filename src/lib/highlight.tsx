import React from "react";

/**
 * Regex matching "metric-like" phrases we want to visually emphasize in body
 * copy — percentages, "500+" counts, "2-person" style prefixes, and numbers
 * followed by a common unit noun. Deliberately conservative so plain numbers
 * (e.g. "1 of the projects") are not bolded.
 */
const METRIC_RE =
  /(\d[\d,]*(?:\.\d+)?%|\d[\d,]*\+|\d[\d,]*x|\d[\d,]*-\w+|\d[\d,]*\s+(?:days?|hours?|hrs?|weeks?|years?|teams|users|records|documents|images|samples|sources|clusters|VMs?))/gi;

/**
 * Returns the text with metric phrases wrapped in a `<strong>` for emphasis.
 * Safe for use in Server Components — returns plain React nodes with no state.
 */
export function highlightMetrics(text: string): React.ReactNode {
  const parts = text.split(METRIC_RE);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part}
        </strong>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
