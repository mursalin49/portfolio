import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1200px] items-center justify-center px-4 py-24"
    >
      <div className="mx-auto mb-12 max-w-[720px] text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange">
          Contact
        </p>
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Let us build something useful.
        </h2>
      </div>
      <div className="flex justify-between gap-12 rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur lg:flex-row sm:flex-col md:p-8">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </section>
  );
};

export default ContactMeMain;
