"use client";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
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
  const form = useRef();
  const sendEmail = (e) => {
    console.log("Sending Email");
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out!",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
      <DialogTrigger className="bg-inverted text-inverted px-6 rounded-sm text-lg font-semibold py-1 transition-all duration-300 hover:scale-[99.05%] active:scale-100">
        Send a note
      </DialogTrigger>
      <DialogContent>
        <form className="h-full w-full" ref={form} onSubmit={sendEmail}>
          {" "}
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold text-baseColor flex gap-1">
              <span className="w-full items-center justify-center text-center">
                Get in touch
              </span>
            </DialogTitle>
            <div className="py-12 flex flex-col gap-4">
              <div className="w-full flex h-12 gap-2">
                <div className=" h-auto aspect-square flex items-end py-2 text-2xl justify-center font-semibold text-primary/50">
                  00
                </div>
                <Input
                  type="text"
                  required
                  name="user_name"
                  placeholder="Name"
                  className="w-full border-0 border-b-2 border-muted/30 outline-none ring-0 rounded-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full flex h-12 gap-2">
                <div className=" h-auto aspect-square flex items-end py-2 text-2xl justify-center font-semibold text-primary/50">
                  01
                </div>
                <Input
                  required
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="w-full border-0 border-b-2 border-muted/30 outline-none ring-0 rounded-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full flex h-12 gap-2">
                <div className=" h-auto aspect-square flex items-end py-2 text-2xl justify-center font-semibold text-primary/50">
                  02
                </div>
                <Input
                  required
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="w-full border-0 border-b-2 border-muted/30 outline-none ring-0 rounded-sm"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <Button
              variant="secondary"
              type="submit"
              value="Send"
              className="w-full bg-inverted hover:bg-inverted/90 text-inverted"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
