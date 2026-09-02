import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const getEmailErrorMessage = (error) => {
  const details = error?.text || error?.message || "";
  const configHint = `Service: ${emailServiceId || "missing"}, Template: ${
    emailTemplateId || "missing"
  }`;

  return details
    ? `Message could not be sent: ${details} (${configHint})`
    : `Message could not be sent. Please try again. (${configHint})`;
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ message: "", type: "success" });
  const [isSending, setIsSending] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setStatus({
        message: "Email service is not configured yet.",
        type: "error",
      });
      return;
    }

    setIsSending(true);
    setStatus({ message: "", type: "success" });

    try {
      await emailjs.sendForm(emailServiceId, emailTemplateId, form.current, {
        publicKey: emailPublicKey,
      });
      setEmail("");
      setName("");
      setMessage("");
      setStatus({ message: "Message sent successfully.", type: "success" });
    } catch (error) {
      console.log("FAILED...", error?.text || error);
      setStatus({
        message: getEmailErrorMessage(error),
        type: "error",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      {status.message ? (
        <p className={status.type === "error" ? "text-orange" : "text-cyan"}>
          {status.message}
        </p>
      ) : null}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input type="hidden" name="title" value="Portfolio Contact Message" />
        <input type="hidden" name="to_name" value="Mursalin Nirob" />
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 sm:h-13 rounded-lg border border-white/10 bg-black/35 px-4 text-sm sm:text-base text-white outline-none transition-colors duration-300 placeholder:text-lightGrey focus:border-cyan focus:ring-2 focus:ring-cyan/20"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 sm:h-13 rounded-lg border border-white/10 bg-black/35 px-4 text-sm sm:text-base text-white outline-none transition-colors duration-300 placeholder:text-lightGrey focus:border-cyan focus:ring-2 focus:ring-cyan/20"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg border border-white/10 bg-black/35 p-4 text-sm sm:text-base text-white outline-none transition-colors duration-300 placeholder:text-lightGrey focus:border-cyan focus:ring-2 focus:ring-cyan/20"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          disabled={isSending}
          className="h-12 w-full rounded-lg border border-cyan bg-cyan text-base sm:text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:border-orange hover:bg-orange hover:shadow-lg hover:shadow-cyan/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
