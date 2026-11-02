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
      <h2 className="text-[30px] font-extrabold leading-none" style={{ fontFamily: "var(--font-display)" }}>Send a Message</h2>
      <p className="text-[15px] text-[#4A5566]">
        You can also get in touch directly through this form below.
      </p>
      <Input
        radius="none"
        id="name"
        type="text"
        label="Name"
        placeholder="Your full name"
        isInvalid={isInvalidName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        errorMessage={isInvalidName ? "Please enter your name" : ""}
        classNames={{
          inputWrapper: `rounded-none bg-[#F7F8F6] border-[1.5px] shadow-none ${isInvalidName ? "border-[#B42318]" : "border-[#1B2430] hover:border-[#C43F1A] group-data-[focus=true]:border-[#C43F1A]"} text-[#1B2430] transition-colors`,
          label: "text-[#4A5566] font-bold",
          input: "text-[#1B2430] font-medium placeholder:text-[#6B7585]",
          errorMessage: "text-[#B42318] text-xs font-bold mt-1",
        }}
      />
      <Input
        radius="none"
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
          inputWrapper: `rounded-none bg-[#F7F8F6] border-[1.5px] shadow-none ${isInvalidEmail ? "border-[#B42318]" : "border-[#1B2430] hover:border-[#C43F1A] group-data-[focus=true]:border-[#C43F1A]"} text-[#1B2430] transition-colors`,
          label: "text-[#4A5566] font-bold",
          input: "text-[#1B2430] font-medium placeholder:text-[#6B7585]",
          errorMessage: "text-[#B42318] text-xs font-bold mt-1",
        }}
      />
      <Textarea
        radius="none"
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
          inputWrapper: `rounded-none bg-[#F7F8F6] border-[1.5px] shadow-none ${isInvalidMessage ? "border-[#B42318]" : "border-[#1B2430] hover:border-[#C43F1A] group-data-[focus=true]:border-[#C43F1A]"} text-[#1B2430] transition-colors`,
          label: "text-[#4A5566] font-bold",
          input: "text-[#1B2430] font-medium placeholder:text-[#6B7585]",
          errorMessage: "text-[#B42318] text-xs font-bold mt-1",
        }}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[50px] px-6 border-2 border-[#1B2430] bg-[#1B2430] text-white font-bold text-[17px] hover:bg-[#C43F1A] hover:border-[#C43F1A] transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
