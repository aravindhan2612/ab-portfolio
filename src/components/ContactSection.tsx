import { LocateIcon, Mail, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSquareLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import TrackedLink from "./TrackedLinkComponent";
import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";

interface ContactCard {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  eventName: string;
  stagger: string;
}

export const ContactSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const contactCards: ContactCard[] = [
    {
      icon: <Mail className="h-5 w-5" style={{ color: "var(--android-green)" }} />,
      label: "Email",
      value: "aravindhan2612@gmail.com",
      href: "mailto:aravindhan2612@gmail.com",
      eventName: "contact_email_clicked",
      stagger: "stagger-1",
    },
    {
      icon: <Phone className="h-5 w-5" style={{ color: "var(--android-green)" }} />,
      label: "Phone",
      value: "+91 9551387971",
      href: "tel:+919551387971",
      eventName: "contact_phone_clicked",
      stagger: "stagger-2",
    },
    {
      icon: <LocateIcon className="h-5 w-5" style={{ color: "var(--android-green)" }} />,
      label: "Location",
      value: "Chennai, India",
      href: "",
      eventName: "location_clicked",
      stagger: "stagger-3",
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 px-4 relative"
      style={{ backgroundColor: "var(--surface-elevated)" }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className={cn("reveal", inView && "reveal-visible")}>
          <div className="mono-label text-center mb-3">Get In Touch</div>
          <h2 className="section-heading">
            Let's <span style={{ color: "var(--android-green)" }}>Connect</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Thank you for visiting my portfolio. Feel free to reach out — I'm always open
            to discussing new opportunities.
          </p>
        </div>

        {/* Contact cards */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {contactCards.map(card => (
            <div
              key={card.label}
              className={cn("group md-card p-5 flex items-start gap-4 reveal cursor-default", card.stagger, inView && "reveal-visible")}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 4px 8px 3px rgba(0,0,0,0.2)";
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = "rgba(61,220,132,0.3)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--border)";
              }}
            >
              {/* Icon container */}
              <div
                className="p-3 rounded-lg flex-shrink-0 transition-colors duration-200"
                style={{ backgroundColor: "var(--android-container)" }}
              >
                {card.icon}
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>
                  {card.label}
                </h4>
                {card.href ? (
                  <TrackedLink
                    to={card.href}
                    eventName={card.eventName}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "var(--foreground-muted)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--android-green)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground-muted)"; }}
                  >
                    {card.value}
                  </TrackedLink>
                ) : (
                  <span className="text-sm" style={{ color: "var(--foreground-muted)" }}>
                    {card.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className={cn("text-center reveal stagger-4", inView && "reveal-visible")}>
          <h4 className="font-medium text-sm mb-5" style={{ color: "var(--foreground-muted)" }}>
            Connect With Me
          </h4>
          <div className="flex space-x-5 justify-center">
            <TrackedLink
              to="https://www.linkedin.com/in/aravindhan-baskaran-mobile-developer"
              target="_blank"
              eventName="contact_linked_in_clicked"
              className="inline-block transition-all duration-200"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--android-green)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground-muted)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              }}
            >
              <FontAwesomeIcon size="xl" icon={faSquareLinkedin} />
            </TrackedLink>
            <TrackedLink
              to="https://www.instagram.com/aravindhan_baskaran_26"
              target="_blank"
              eventName="contact_instagram_clicked"
              className="inline-block transition-all duration-200"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--android-green)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground-muted)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              }}
            >
              <FontAwesomeIcon size="xl" icon={faInstagram} />
            </TrackedLink>
            <TrackedLink
              to="https://x.com/Aravindhan2612"
              target="_blank"
              eventName="contact_twitter_clicked"
              className="inline-block transition-all duration-200"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--android-green)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground-muted)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              }}
            >
              <FontAwesomeIcon size="xl" icon={faXTwitter} />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
};
