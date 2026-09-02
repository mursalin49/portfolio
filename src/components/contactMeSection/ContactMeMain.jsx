import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1200px] items-center justify-center px-4 py-28 lg:py-32"
    >
      <div className="mx-auto mb-12 lg:mb-16 max-w-[720px] text-center">
        <p className="mb-4 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-orange">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Let's build something useful together.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-lightGrey">
          I'm always open to discussing new projects, opportunities, and collaboration.
        </p>
      </div>
      <div className="flex justify-between gap-8 sm:gap-10 lg:gap-12 rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10 backdrop-blur lg:flex-row flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </section>
  );
};

export default ContactMeMain;
