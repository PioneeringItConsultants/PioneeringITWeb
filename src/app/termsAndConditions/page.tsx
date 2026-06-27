import React from "react";

const terms = [
  {
    title: "1. Use of Our Services",
    content:
      "You agree to use our services only for lawful purposes and in accordance with these Terms. You may not use our website or services in any manner that could damage, disable, or impair our servers or networks.",
  },
  {
    title: "2. Intellectual Property",
    content:
      "All content, including text, graphics, logos, and software, is the property of NexSoftDev or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content without prior written consent from us.",
  },
  {
    title: "3. User Content",
    content:
      "Any feedback, suggestions, or other content you provide becomes the property of NexSoftDev. You agree that we may use, modify, and publish such content without compensation or acknowledgment.",
  },
  {
    title: "4. Third-Party Links",
    content:
      "Our website may contain links to third-party websites or services that are not owned or controlled by NexSoftDev. We are not responsible for the content or practices of any third-party sites.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "NexSoftDev shall not be liable for any indirect, incidental, or consequential damages arising out of or related to the use of our services. We make no warranties or representations regarding the availability, accuracy, or reliability of our services.",
  },
  {
    title: "6. Termination",
    content:
      "We reserve the right to suspend or terminate your access to our services at any time, without prior notice or liability, for any reason.",
  },
  {
    title: "7. Changes to Terms",
    content:
      "We may update these Terms from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our services after the changes are posted constitutes your acceptance of the new Terms.",
  },
  {
    title: "8. Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about these Terms, please contact us at support@nexsoftdev.com.",
  },
];

const TermsAndConditions = () => {
  return (
    <div className="container py-20 max-w-3xl">
      <span className="eyebrow mb-4">Legal</span>
      <h1 className="text-4xl font-extrabold tracking-tight mb-2 mt-3">
        Terms &amp; <span className="gradient-text">Conditions</span>
      </h1>
      <p className="text-sm text-[var(--color-muted)] mb-10">
        Effective Date: August 6, 2025
      </p>
      <div className="space-y-6">
        {terms.map((term, index) => (
          <div key={index} className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">{term.title}</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              {term.content}
            </p>
          </div>
        ))}
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-[var(--color-muted)]">
            If you have any questions about these Terms, contact us at:
          </p>
          <p className="text-[var(--color-muted)] mt-2">
            Email: support@nexsoftdev.com
          </p>
          <p className="text-[var(--color-muted)]">
            Address: Dhanmondi, Dhaka, Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
