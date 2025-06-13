"use client";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out.",
          });
          setIsOpen(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          });
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="bg-inverted text-inverted px-6 rounded-sm text-lg font-semibold py-1 transition-all ">
        Send a note
      </DialogTrigger>
      <DialogContent className="max-w-md w-full rounded-2xl shadow-xl border-0 bg-background">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-baseColor text-center mb-2">
              Get in touch
            </DialogTitle>
            <p className="text-muted text-center text-base mb-4">
              I’ll get back to you as soon as possible.
            </p>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              required
              name="user_name"
              placeholder="Your Name"
              className="border border-muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-md py-2 px-3 bg-foreground"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
            <Input
              required
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="border border-muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-md py-2 px-3 bg-foreground"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <textarea
              required
              name="message"
              placeholder="Your Message"
              className="border border-muted/30 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-md py-2 px-3 bg-foreground min-h-[96px] resize-none text-base"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button
              variant="secondary"
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-inverted hover:bg-primary/90 transition-all font-semibold py-2 rounded-md"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
