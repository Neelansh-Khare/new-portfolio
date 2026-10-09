export function PostTags({
  tags,
  className = "",
}: {
  tags?: string[];
  className?: string;
}) {
  if (!tags || tags.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Topics">
      {tags.map((tag) => (
        <li
          key={tag}
          className="px-2.5 py-0.5 rounded-full border border-gray-800 text-xs text-gray-400"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
