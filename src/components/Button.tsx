import React from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsLink = BaseProps &
  LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    as: "link";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    as = "button",
    ...rest
  } = props as ButtonProps;

  const baseStyle =
    "cursor-pointer px-4 py-1.5 whitespace-nowrap rounded-3xl hover:scale-101 transition duration-500 ease-in-out";

  const combinedClassName = `${baseStyle} ${className}`;

  if (as === "link") {
    const { href, replace, scroll, shallow, prefetch, locale, ...anchorProps } =
      rest as ButtonAsLink;

    return (
      <Link
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        locale={locale}
      >
        <a className={combinedClassName} {...anchorProps}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
