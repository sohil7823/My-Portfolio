import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Wraps children and applies a scroll-reveal animation once the element
 * enters the viewport. `type` controls the animation style so different
 * sections can reveal in different, purposeful directions instead of
 * everything fading up identically.
 */
export default function Reveal({
  children,
  type = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
}) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${type} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
