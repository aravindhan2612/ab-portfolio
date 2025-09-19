import { LocateIcon, Mail, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import TrackedLink from "./TrackedLinkComponent";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Thank you for visiting my portfolio. Feel free to reach out. I'm
          always open to discussing new opportunities
        </p>
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="justify-center mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div className="bg-card p-4 rounded-lg flex items-start card-hover gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow px-2">
                  <h4 className="font-bold">Email</h4>
                  <TrackedLink
                    to="mailto:aravindhan2612@gmail.com"
                    eventName="contact_email_clicked"
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    aravindhan2612@gmail.com
                  </TrackedLink>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg flex items-start card-hover gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold">Phone</h4>
                  <TrackedLink
                    to="tel:+919551387971"
                    eventName="contact_phone_clicked"
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9551387971
                  </TrackedLink>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg flex items-start card-hover gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <LocateIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold">Location</h4>
                  <TrackedLink
                    eventName="location_clicked"
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    Chennai, India
                  </TrackedLink>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <TrackedLink
                to="https://www.linkedin.com/in/aravindhan-baskaran-mobile-developer"
                target="_blank"
                eventName="contact_linked_in_clicked"
              >
                <FontAwesomeIcon size="2xl" icon={faSquareLinkedin} />
              </TrackedLink>
              <TrackedLink
                to="https://www.instagram.com/i_am_ns_boy"
                target="_blank"
                eventName="contact_instagram_clicked"
              >
                <FontAwesomeIcon size="2xl" icon={faInstagram} />
              </TrackedLink>
              <TrackedLink
                to="https://x.com/Aravindhan2612"
                target="_blank"
                eventName="contact_twitter_clicked"
              >
                <FontAwesomeIcon size="2xl" icon={faXTwitter} />
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
