import { useState, useEffect, FormEvent } from "react";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Toaster } from "sonner";
import { toast } from "sonner";

import { CircleCheckSVG, CircleXSVG } from "./ui/icons";

export const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const isValidEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const isInvalidName = touched && name.trim() === "";
  const isInvalidEmail = touched && (!isValidEmail(email) || email.trim() === "");
  const isInvalidMessage = touched && message.trim() === "";

  useEffect(() => {
    if (error) {
      toast.error("Email has not been sent", {
        duration: 3500,
        icon: <CircleXSVG />,
        description: error,
      });
      setError("");
    }
  }, [error]);

  useEffect(() => {
    if (submitted) {
      toast.success("Message sent successfully!", {
        duration: 3500,
        icon: <CircleCheckSVG />,
        description: "Thank you for reaching out. I will get back to you shortly.",
      });
      setSubmitted(false);
    }
  }, [submitted]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);

    if (!name.trim() || !isValidEmail(email) || !message.trim()) {
      toast.error("Incomplete Form", {
        description: "Please fill in all required fields with a valid email.",
        icon: <CircleXSVG />,
        duration: 3500,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setTouched(false);
      } else {
        setError(data.message || "Failed to send email");
      }
    } catch (err) {
      setError("An error occurred while sending the email");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-2xl sm:text-3xl font-black text-[#141416] tracking-tight">Send a Message</h2>
      <p className="text-sm font-medium text-[#141416]/70">
        You can also get in touch directly through this form below.
      </p>
      <Input
        id="name"
        type="text"
        label="Name"
        placeholder="Your full name"
        isInvalid={isInvalidName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        errorMessage={isInvalidName ? "Please enter your name" : ""}
        classNames={{
          inputWrapper: `bg-white/90 border ${isInvalidName ? "border-[#CC3A63] ring-1 ring-[#CC3A63]" : "border-[#141416]/15 hover:border-[#CC3A63] focus-within:border-[#CC3A63]"} text-[#141416] shadow-xs transition-colors`,
          label: "text-[#141416]/80 font-bold",
          input: "text-[#141416] font-medium",
          errorMessage: "text-[#CC3A63] text-xs font-bold mt-1",
        }}
      />
      <Input
        type="email"
        name="email"
        id="email"
        label="Email"
        placeholder="you@example.com"
        isInvalid={isInvalidEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={isInvalidEmail ? (email.trim() === "" ? "Please enter your email" : "Please enter a valid email address") : ""}
        classNames={{
          inputWrapper: `bg-white/90 border ${isInvalidEmail ? "border-[#CC3A63] ring-1 ring-[#CC3A63]" : "border-[#141416]/15 hover:border-[#CC3A63] focus-within:border-[#CC3A63]"} text-[#141416] shadow-xs transition-colors`,
          label: "text-[#141416]/80 font-bold",
          input: "text-[#141416] font-medium",
          errorMessage: "text-[#CC3A63] text-xs font-bold mt-1",
        }}
      />
      <Textarea
        id="message"
        type="text"
        label="Message"
        placeholder="Write your note or project inquiry here..."
        minRows={4}
        isInvalid={isInvalidMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        errorMessage={isInvalidMessage ? "Please enter a message" : ""}
        classNames={{
          inputWrapper: `bg-white/90 border ${isInvalidMessage ? "border-[#CC3A63] ring-1 ring-[#CC3A63]" : "border-[#141416]/15 hover:border-[#CC3A63] focus-within:border-[#CC3A63]"} text-[#141416] shadow-xs transition-colors`,
          label: "text-[#141416]/80 font-bold",
          input: "text-[#141416] font-medium",
          errorMessage: "text-[#CC3A63] text-xs font-bold mt-1",
        }}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-[#141416] text-[#FFF7EB] font-black text-sm tracking-wide shadow-lg bento-btn-poppy hover:bg-[#CC3A63] transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
};
