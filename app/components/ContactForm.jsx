"use client";

import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const fieldClass =
  "w-full rounded-md border border-line bg-base px-3 py-2.5 text-sm text-baseColor placeholder:text-faint focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25";

const ContactForm = () => {
  const { toast } = useToast();
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
            title: "Message sent",
            description: "Thanks for reaching out — I'll reply soon.",
          });
          setIsOpen(false);
          form.current?.reset();
        },
        (error) => {
          toast({
            title: "Couldn't send that",
            description: "Something went wrong. Try email instead?",
            variant: "destructive",
          });
          console.error(error?.text ?? error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-inverted px-5 py-2.5 text-sm font-medium text-inverted transition-opacity hover:opacity-90"
      >
        Send a note
        <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      </button>

      <DialogContent className="w-full max-w-md rounded-lg border border-line bg-surface p-6">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <DialogHeader className="text-left">
            <DialogTitle className="text-h3 text-baseColor">Get in touch</DialogTitle>
            <DialogDescription className="text-sm text-muted">
              Drop a line and I&apos;ll get back to you as soon as I can.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="text-label text-faint">Name</span>
              <input
                type="text"
                required
                name="user_name"
                autoComplete="name"
                placeholder="Ada Lovelace"
                className={fieldClass}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-label text-faint">Email</span>
              <input
                type="email"
                required
                name="user_email"
                autoComplete="email"
                placeholder="ada@example.com"
                className={fieldClass}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-label text-faint">Message</span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="What are you building?"
                className={`${fieldClass} min-h-[112px] resize-none`}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-inverted py-2.5 text-sm font-medium text-inverted transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send message"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
