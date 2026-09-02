import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 w-full lg:flex-1">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
