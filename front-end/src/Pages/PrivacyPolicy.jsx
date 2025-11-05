
import React from 'react';



const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    <div className="text-gray-600 space-y-4 leading-relaxed">{children}</div>
  </section>
);

// Metadata for the page
export const metadata = {
  title: 'Privacy Policy - Arogyati Physiotherapy & Rehabilitation Center',
  description:
    'Arogyati Physiotherapy & Rehabilitation Center respects your privacy and is committed to protecting your personal information.',
};

/**
 * Privacy Policy Page
 * Renders the privacy policy based on the provided PDF document.
 */
const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10">
        <header className="text-center mb-10 border-b pb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Privacy Policy 
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Effective Date: September 1, 2025 
          </p>
          <p className="text-sm text-gray-500 font-medium">
            Last Updated: November 5, 2025 
          </p>
        </header>

        <Section title="1. Introduction ">
          <p>
            Arogyati Physiotherapy & Rehabilitation Center ("we," "us," or "our")
            respects your privacy and is committed to protecting your personal
            information.  This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you interact with
            our services, including communications via WhatsApp Business API.
           
          </p>
        </Section>

        <Section title="2. Information We Collect ">
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            2.1 Information You Provide 
          </h3>
          <p>
            We may collect the following information that you voluntarily
            provide to us: 
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Name and contact information (phone number, email address) </li>
            <li>Appointment scheduling information </li>
            <li>Communication preferences </li>
            <li>
              Any information you choose to share with us through WhatsApp or
              other communication channels 
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            2.2 Information Collected Automatically 
          </h3>
          <p>
            When you interact with our WhatsApp Business account, we may
            automatically collect: 
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Message delivery and read status </li>
            <li>Timestamp of communications </li>
            <li>Technical information related to message delivery </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            2.3 Healthcare Data 
          </h3>
          <p>
            We do not collect sensitive healthcare data, medical records, or
            health-related information through WhatsApp or our messaging
            systems. 
          </p>
          <p>
            Any healthcare-related discussions should be conducted through
            appropriate secure channels during in-person consultations. 
          </p>
        </Section>

        <Section title="3. How We Use Your Information ">
          <p>
            We use the information we collect for the following purposes: 
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Sending appointment reminders and confirmations </li>
            <li>
              Providing customer service and responding to inquiries 
            </li>
            <li>
              Sending promotional messages about our services (with your
              consent) 
            </li>
            <li>
              Improving our services and communication methods 
            </li>
            <li>
              Complying with legal obligations and regulatory requirements 
            </li>
          </ul>
        </Section>

        <Section title="4. Legal Basis for Processing ">
          <p>
            We process your personal information based on: 
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Your consent for promotional communications </li>
            <li>Contractual necessity for appointment management </li>
            <li>
              Legitimate business interests in providing quality healthcare
              services 
            </li>
            <li>
              Legal compliance with applicable healthcare and data protection
              regulations 
            </li>
          </ul>
        </Section>

        <Section title="5. Sharing Your Information ">
          <p>
            We do not sell, trade, or rent your personal information to third
            parties.  We may share your information only in the
            following circumstances: 
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>
              With service providers who assist us in operating our business
              (such as WhatsApp Business API providers) 
            </li>
            <li>When required by law or to comply with legal processes </li>
            <li>
              To protect our rights, property, or safety, or that of others
              
            </li>
            <li>With your explicit consent </li>
          </ul>
        </Section>

        <Section title="6. Data Retention ">
          <p>
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy and as required
            by applicable laws and regulations, including but not limited to:
            
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Healthcare regulations and standards </li>
            <li>Tax and accounting requirements </li>
            <li>Legal and regulatory obligations </li>
          </ul>
          <p>
            When your information is no longer required, we will securely delete
            or anonymize it in accordance with our data retention policies and
            applicable law. 
          </p>
        </Section>

        <Section title="7. Your Rights ">
          <p>
            Depending on your location and applicable laws, you may have the
            following rights: 
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Access to your personal information </li>
            <li>Correction of inaccurate information </li>
            <li>
              Deletion of your information (subject to legal retention
              requirements) 
            </li>
            <li>Objection to processing of your information </li>
            <li>
              Withdrawal of consent for promotional communications 
            </li>
            <li>Data portability </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the
            information provided below. 
          </p>
        </Section>

        <Section title="8. Security Measures ">
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. 
          </p>
          <p>
            However, no method of transmission over the internet or electronic
            storage is completely secure. 
          </p>
        </Section>

        <Section title="9. Third-Party Services ">
          <p>
            Our use of WhatsApp Business API means that your communications may
            be subject to WhatsApp's own privacy policies and terms of service.
            
          </p>
          <p>
            We encourage you to review Meta/WhatsApp's privacy policy. 
          </p>
        </Section>

        <Section title="10. Communication Preferences ">
          <p>
            You have the right to opt out of promotional messages at any time by:
            
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Replying "STOP" to any promotional message </li>
            <li>Contacting us directly using the information below </li>
            <li>Informing our staff during your visit </li>
          </ul>
          <p>
            Please note that you may still receive transactional messages
            related to your appointments even if you opt out of promotional
            communications. 
          </p>
        </Section>

        <Section title="11. Children's Privacy ">
          <p>
            Our services are not directed to individuals under the age of 18. We
            do not knowingly collect personal information from children. 
          </p>
          <p>
            If you are a parent or guardian and believe your child has provided
            us with personal information, please contact us. 
          </p>
        </Section>

        <Section title="12. Changes to This Privacy Policy ">
          <p>
            We may update this Privacy Policy from time to time.  We will
            notify you of any material changes by posting the new Privacy Policy
            on our premises and updating the "Last Updated" date. 
          </p>
          <p>
            Your continued use of our services after such changes constitutes
            acceptance of the updated policy. 
          </p>
        </Section>

        <Section title="13. International Data Transfers ">
          <p>
            If applicable, your information may be transferred to and processed
            in countries other than your own. 
          </p>
          <p>
            We ensure appropriate safeguards are in place to protect your
            information in accordance with this Privacy Policy. 
          </p>
        </Section>

        <Section title="14. Contact Information ">
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us: 
          </p>
          <div className="mt-2 space-y-1 not-italic">
            <p className="font-semibold">
              Arogyati Physiotherapy & Rehabilitation Center 
            </p>
            <p>
              Address: 766 E Mahalaxmi Arcade, Opp. Naik & Co., Near Wilson
              Bridge, Shahupuri Main Road, Kolhapur
            </p>
            <p>Phone: 9420294219 </p>
            <p>Email: software@arogyati.com </p>
          </div>
        </Section>

        <Section title="15. Governing Law ">
          <p>
            This Privacy Policy shall be governed by and construed in accordance
            with the laws of India, without regard to its conflict of law
            provisions. 
          </p>
        </Section>

        <footer className="mt-10 pt-6 border-t">
          <p className="font-medium text-gray-700">
            By using our services and providing your contact information, you
            acknowledge that you have read and understood this Privacy Policy.
            
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;