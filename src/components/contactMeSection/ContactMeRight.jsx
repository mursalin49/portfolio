import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:min-w-[340px]">
      <img
        src="/images/email-image.png"
        alt="Contact illustration"
        className="max-w-[260px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
