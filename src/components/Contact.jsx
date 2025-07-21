import {
  Contact2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitch,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hook/use-toast.js";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Success!",
        description: "thank You for your message, I will get back to you soon..",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 relative px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have any questions or would like to work together, please don't
          hesitate to contact me.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:mh116727@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    mailto:mh116727@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="mailto:mh116727@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    India ,New Delhi
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Contact Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="">
                  <Linkedin />
                </a>
                <a href="">
                  <Instagram />
                </a>
                <a href="">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"></h3>
            <form className="space-y-6" action="" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  placeholder="Enter your Name..."
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-input bg-background rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  placeholder=" Email@.com..."
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-input bg-background rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  placeholder="Enter your Message..."
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 border-input bg-background rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center gap-2 justify-center"
                )}
              >{isSubmitting ? "Sending..." : "Send Message"}
                <Send size={20} />{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
