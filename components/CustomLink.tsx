import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function CustomLink({ href, ...props }: CustomLinkProps) {
  return (
    <Link href={href} legacyBehavior>
      <a {...props} />
    </Link>
  );
}
