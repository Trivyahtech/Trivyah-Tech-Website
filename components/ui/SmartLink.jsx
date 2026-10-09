import Link from "next/link";

/** Client-side navigation for internal routes ("/…"); a plain anchor for hashes, mailto:, tel: and external URLs. */
export function SmartLink({ href, ...props }) {
  if (href?.startsWith("/")) return <Link href={href} {...props} />;
  return <a href={href} {...props} />;
}
