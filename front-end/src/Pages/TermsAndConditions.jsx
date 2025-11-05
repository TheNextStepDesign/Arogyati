
const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    <div className="text-gray-600 space-y-4 leading-relaxed">{children}</div>
  </section>
);


/**
 * Terms and Conditions Page
 * Renders the terms and conditions based on the provided PDF document.
 */

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10">
        <header className="text-center mb-10 border-b pb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Effective Date: September 1, 2025
          </p>
          <p className="text-sm text-gray-500 font-medium">
            Last Updated: November 5, 2025
          </p>
        </header>

        <Section title="1. Acceptance of Terms">
          <p>
            By engaging with Arogyati Physiotherapy & Rehabilitation Center
            ("we," "us," or "our") and using our services, including receiving
            communications via WhatsApp Business API, you agree to be bound by
            these Terms and Conditions.
          </p>
          <p>
            If you do not agree to these terms, please discontinue use of our
            services.
          </p>
        </Section>

        <Section title="2. Description of Services">
          <p>
            Arogyati Physiotherapy & Rehabilitation Center provides physiotherapy
            and rehabilitation services.
          </p>
          <p>
            As part of our service delivery, we utilize WhatsApp Business API
            for:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Appointment reminders and confirmations</li>
            <li>Service updates and announcements</li>
            <li>Promotional messages regarding our services</li>
            <li>General customer communication and support</li>
          </ul>
        </Section>

        <Section title="3. WhatsApp Communication">
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            3.1 Consent to Communicate
          </h3>
          <p>
            By providing your phone number to us, you consent to receive
            messages from Arogyati Physiotherapy & Rehabilitation Center via
            WhatsApp.
          </p>
          <p>
            This includes transactional messages (appointment reminders) and
            promotional messages (service offers and updates).
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            3.2 Opt-Out Rights
          </h3>
          <p>
            You may opt out of promotional messages at any time by:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Replying "STOP" to any promotional message</li>
            <li>Contacting our center directly</li>
            <li>Informing our staff in person</li>
          </ul>
          <p>
            Transactional messages related to confirmed appointments may still be
            sent even after opting out of promotional communications.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            3.3 Third-Party Platform
          </h3>
          <p>
            Communications via WhatsApp are subject to Meta/WhatsApp's Terms of
            Service and Privacy Policy.
          </p>
          <p>
            We are not responsible for any issues arising from the WhatsApp
            platform itself.
          </p>
        </Section>

        <Section title="4. Appointment Policy">
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            4.1 Scheduling
          </h3>
          <p>
            Appointments can be scheduled through phone calls, in-person visits,
            or other designated channels.
          </p>
          <p>
            WhatsApp messages serve as reminders and do not constitute confirmed
            appointments unless explicitly confirmed by our staff.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            4.2 Cancellation and Rescheduling
          </h3>
          <p>
            Patients must provide reasonable notice for cancellation or
            rescheduling of appointments.
          </p>
          <p>
            Specific cancellation policies will be communicated at the time of
            booking.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            4.3 No-Show Policy
          </h3>
          <p>
            Failure to attend scheduled appointments without prior notice may
            result in charges or restrictions on future bookings, as per our
            center's policies.
          </p>
        </Section>

        <Section title="5. Privacy and Confidentiality">
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            5.1 Patient Information
          </h3>
          <p>
            We are committed to maintaining the privacy and confidentiality of
            your personal information in accordance with our Privacy Policy and
            applicable healthcare regulations.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            5.2 Limitations of WhatsApp Communication
          </h3>
          <p>
            WhatsApp should not be used to discuss sensitive medical
            information, diagnoses, treatment details, or personal health data.
           
          </p>
          <p>
            Such discussions should occur during in-person consultations or
            through secure, approved healthcare communication channels.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            5.3 Security
          </h3>
          <p>
            While we implement reasonable security measures, you acknowledge that
            communication via WhatsApp or any internet-based platform carries
            inherent risks.
          </p>
        </Section>

        <Section title="6. Professional Services">
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            6.1 Healthcare Services
          </h3>
          <p>
            All physiotherapy and rehabilitation services are provided by
            qualified professionals in accordance with applicable healthcare
            standards and regulations.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            6.2 No Medical Advice via WhatsApp
          </h3>
          <p>
            Information shared via WhatsApp is for administrative and general
            informational purposes only and does not constitute medical advice,
            diagnosis, or treatment. Always seek professional medical
            advice for health concerns.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            6.3 Patient Responsibility
          </h3>
          <p>
            Patients are responsible for providing accurate and complete
            information about their health conditions, following treatment
            plans, and attending scheduled appointments.
          </p>
        </Section>

        <Section title="7. Intellectual Property">
          <p>
            All content, trademarks, logos, and materials related to Arogyati
            Physiotherapy & Rehabilitation Center are our property or the
            property of our licensors.
          </p>
          <p>
            You may not use, reproduce, or distribute any such materials without
            our express written permission.
          </p>
        </Section>

        <Section title="8. Fees and Payment">
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            8.1 Service Fees
          </h3>
          <p>
            Fees for services will be communicated at the time of booking or
            service delivery. All fees are subject to change without
            prior notice.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            8.2 Payment Terms
          </h3>
          <p>
            Payment is due at the time of service unless other arrangements have
            been made. Accepted payment methods will be communicated
            by our staff.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            8.3 Refund Policy
          </h3>
          <p>
            Refunds, if applicable, will be handled in accordance with our refund
            policy, which can be obtained by contacting our center.
          </p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>
            To the fullest extent permitted by law:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>
              We are not liable for any indirect, incidental, consequential, or
              punitive damages arising from your use of our services
            </li>
            <li>
              We are not responsible for issues arising from the WhatsApp
              platform, including message delivery failures, delays, or security
              breaches
            </li>
            <li>
              Our total liability shall not exceed the amount paid by you for the
              specific service giving rise to the claim
            </li>
          </ul>
        </Section>

        <Section title="10. Disclaimer of Warranties">
          <p>
            Our services are provided "as is" without warranties of any kind,
            either express or implied.
          </p>
          <p>
            We do not guarantee uninterrupted or error-free communication
            services.
          </p>
        </Section>

        <Section title="11. Indemnification">
          <p>
            You agree to indemnify and hold harmless Arogyati Physiotherapy &
            Rehabilitation Center, its staff, and affiliates from any claims,
            damages, or expenses arising from your violation of these Terms and
            Conditions or misuse of our services.
          </p>
        </Section>

        <Section title="12. Compliance with Laws">
          <p>
            You agree to comply with all applicable local, state, national, and
            international laws and regulations in connection with your use of
            our services.
          </p>
        </Section>

        <Section title="13. Modifications to Terms">
          <p>
            We reserve the right to modify these Terms and Conditions at any
            time. Changes will be effective immediately upon posting.
          </p>
          <p>
            Your continued use of our services after such modifications
            constitutes acceptance of the updated terms.
          </p>
        </Section>

        <Section title="14. Severability">
          <p>
            If any provision of these Terms and Conditions is found to be invalid
            or unenforceable, the remaining provisions shall remain in full
            force and effect.
          </p>
        </Section>

        <Section title="15. Entire Agreement">
          <p>
            These Terms and Conditions, together with our Privacy Policy,
            constitute the entire agreement between you and Arogyati
            Physiotherapy & Rehabilitation Center regarding the use of our
            communication services.
          </p>
        </Section>

        <Section title="16. Governing Law and Jurisdiction">
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of India.
          </p>
          <p>
            Any disputes arising under these terms shall be subject to the
            exclusive jurisdiction of the courts located in Kolhapur.
          </p>
        </Section>

        <Section title="17. Contact Information">
          <p>
            For questions, concerns, or requests regarding these Terms and
            Conditions, please contact us:
          </p>
          <div className="mt-2 space-y-1 not-italic">
            <p className="font-semibold">
              Arogyati Physiotherapy & Rehabilitation Center
            </p>
            <p>
              Address: 766 E Mahalaxmi Arcade, Opp. Naik & Co., Near Wilson
              Bridge, Shahupuri Main Road, Kolhapur
            </p>
            <p>Phone: 9420294219</p>
            <p>Email: software@arogyati.com</p>
          </div>
        </Section>

        <Section title="18. Acknowledgment">
          <p>
            By using our services and providing your contact information, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms and Conditions.
          </p>
        </Section>

        <footer className="mt-10 pt-6 border-t">
          <p className="text-sm text-gray-500">
            Note: These Terms and Conditions are effective as of the date stated
            above and apply to all users of Arogyati Physiotherapy &
            Rehabilitation Center's services and communication channels.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;