import { ComponentChild } from "preact";
import { clsx } from "clsx";

export function NavItem(
  { href, children, className }: {
    href: string;
    children: ComponentChild;
    className?: string;
  },
) {
  const target = href.startsWith("http") ? { target: "_blank" } : {};
  return (
    <a
      href={href}
      className={clsx(
        "transition hover:text-teal-500 dark:hover:text-teal-400",
        className,
      )}
      {...target}
    >
      {children}
    </a>
  );
}
