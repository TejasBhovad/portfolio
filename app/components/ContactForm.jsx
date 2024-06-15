"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address."); // Set error message
      return; // Prevent form submission
    }
    setEmailError(""); // Clear any existing error message
    console.log({ name, email, message });
    // Proceed with form submission or further validation
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-inverted text-inverted px-6 rounded-sm text-lg font-semibold py-1 transition-all hover:scale-95 active:scale-105">
        Send a note
      </DialogTrigger>
      <DialogContent>
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
                type="email"
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
                type="text"
                placeholder="Message"
                className="w-full border-0 border-b-2 border-muted/30 outline-none ring-0 rounded-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </DialogHeader>
        {emailError && (
          <p className="text-red-400 w-full text-center">{emailError}</p>
        )}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="w-full bg-primary hover:bg-primary/90 text-inverted"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
