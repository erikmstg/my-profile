import Button from "./Button";
import ContactContent from "./contact/ContactContent";
import Field from "./contact/Field";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  return (
    <section
      className="container mx-auto px-10 xl:px-16 lg:px-0 md:px-0 sm:px-0"
      id="contact"
    >
      <div className="bg-gray-background rounded-lg flex flex-wrap">
        <div className="md:w-6/12 w-full md:border-r border-b border-gray-line">
          <div className="lg:py-16 lg:px-20 md:p-14 p-4">
            <SectionTitle left>Contact</SectionTitle>
            <SectionSubTitle left>You can reach me at</SectionSubTitle>
            <ContactContent
              icon="/icon/mail.svg"
              label="Mail"
              value="erikmikaelstg@gmail.com"
              className="mt-8"
            />
            <ContactContent
              icon="/icon/phone.svg"
              label="Phone"
              value="081808253226"
            />
            <ContactContent
              icon="/icon/twitter.svg"
              label="Twitter"
              value="@Bartolomeong"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form className="lg:py-16 lg:px-20 sm:py-16 sm:px-14 p-4">
            <div className=" -mx-4 lg:flex sm:grid">
              <div className="lg:w-6/12 px-4 sm:w-full">
                <Field name="name" label="Name" type="text" />
              </div>
              <div className="lg:w-6/12 px-4 sm:w-full">
                <Field name="email" label="Email" type="text" />
              </div>
            </div>
            <Field name="subject" label="Subject" type="text" />
            <Field
              name="message"
              label="Message"
              type="textarea"
              className="h-36"
            />
            <div className="text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
