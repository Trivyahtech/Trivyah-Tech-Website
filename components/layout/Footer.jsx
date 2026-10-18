import { footer, site } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { Logo } from "@/components/ui/Logo";
import { SmartLink } from "@/components/ui/SmartLink";
import { TextLink } from "@/components/ui/TextLink";

function ColumnHeading({ id, children }) {
  return (
    <h2 id={id} className="font-display text-b3 font-semibold tracking-[1.4px] text-muted uppercase">
      {children}
    </h2>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-ink">
      <div className="shell">
        <div className="flex flex-col gap-16 py-16 lg:px-6 lg:py-20">
          <p
            aria-hidden="true"
            className="font-display text-[clamp(64px,11vw,160px)] leading-none font-bold text-fg/10 select-none lg:text-wordmark"
          >
            {footer.wordmark}
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-12">
            <div className="col-span-2 flex flex-col gap-[18.75px] lg:col-span-1">
              <SmartLink href="/" aria-label="Trivyah Tech home" className="flex self-start rounded-full">
                <Logo />
              </SmartLink>
              <p className="max-w-[320px] text-b3 leading-[22.75px] text-muted">{footer.blurb}</p>
            </div>

            <nav aria-labelledby="footer-services" className="flex flex-col gap-5">
              <ColumnHeading id="footer-services">Services</ColumnHeading>
              <ul className="flex flex-col gap-3">
                {footer.services.map((link) => (
                  <li key={link.label} className="flex pt-[2.5px] pb-px">
                    <TextLink href={link.href} font="display" arrow>
                      {link.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-company" className="flex flex-col gap-5">
              <ColumnHeading id="footer-company">Company</ColumnHeading>
              <ul className="flex flex-col gap-3">
                {footer.company.map((link) => (
                  <li key={link.label} className="flex pt-[2.5px] pb-[1.5px]">
                    <TextLink href={link.href}>{link.label}</TextLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
              <ColumnHeading id="footer-contact">Contact</ColumnHeading>
              <ul aria-labelledby="footer-contact" className="flex flex-col gap-[15.5px]">
                <li className="flex">
                  <TextLink href={`mailto:${site.email}`} icon="mail">
                    {site.email}
                  </TextLink>
                </li>
                <li className="flex">
                  <TextLink href={site.phoneHref} icon="phone">
                    {site.phone}
                  </TextLink>
                </li>
              </ul>
              <ul className="flex gap-3 pt-1">
                {footer.socials.map((social) => (
                  <li key={social.label} className="flex">
                    <IconButton
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      size={40}
                      tone="quiet"
                      aria-label={`Trivyah Tech on ${social.label} (opens in a new tab)`}
                    >
                      <Icon name={social.icon} size={16} />
                    </IconButton>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 pt-8 text-caption text-muted sm:flex-row sm:justify-between">
            <p>{footer.copyright}</p>
            <p>{site.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
