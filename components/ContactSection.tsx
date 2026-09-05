"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Eyebrow } from "./ui/Eyebrow";
import { PillButton } from "./ui/PillButton";

const CONTACT_EMAIL = "info@addistechplc.com";

function Texts() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full"
      data-name="Texts"
    >
      <Eyebrow variant="onLight">{`Let's Connect`}</Eyebrow>
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[1.3] md:leading-[1.25] min-w-full relative shrink-0 text-[#1b1464] text-[26px] md:text-[36px] w-[min-content]">{`Let's Build the Future Together`}</p>
      <p className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#959595] text-[13px] md:text-[15px] w-[min-content]">
        Ready to start your digital transformation? Our technical team is primed
        to assess and quote your project specs within 24 hours.
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0"
      data-name="Frame"
    >
      <MapPin className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function Frame26() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative"
      data-name="Frame"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1b1464] text-[12px] uppercase w-full">
        Headquarters
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#1f1f1f] text-[14px] w-full">
        Bole District, Addis Ababa, Ethiopia
      </p>
    </div>
  );
}

function HqItem() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="HQ Item"
    >
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0"
      data-name="Frame"
    >
      <Phone className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function Frame28() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative"
      data-name="Frame"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1b1464] text-[12px] uppercase w-full">
        Direct Phone
      </p>
      <a
        href="tel:+251911505992"
        className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#1f1f1f] text-[14px] w-full"
      >
        +251 911 505992 (EAT)
      </a>
    </div>
  );
}

function PhoneItem() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="Phone Item"
    >
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div
      className="bg-[#f0f0ff] content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0"
      data-name="Frame"
    >
      <Mail className="size-[20px] text-[#1B1464]" />
    </div>
  );
}

function Frame30() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative"
      data-name="Frame"
    >
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-[#1b1464] text-[12px] uppercase w-full">
        Technical RFP Inquiries
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#1f1f1f] text-[14px] w-full"
      >
        {CONTACT_EMAIL}
      </a>
    </div>
  );
}

function EmailItem() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="Email Item"
    >
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function ContactInfoDetails() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
      data-name="Contact Info Details"
    >
      <HqItem />
      <PhoneItem />
      <EmailItem />
    </div>
  );
}

function ContactInfoColumn() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start md:col-[1/span_5] md:row-1 md:justify-self-stretch md:self-start relative shrink-0 w-full"
      data-name="Contact Info Column"
    >
      <Texts />
      <ContactInfoDetails />
    </div>
  );
}

const fieldClassName =
  "w-full bg-transparent border border-[#e5e5e5] border-solid rounded-[6px] p-[12px] font-['Outfit:Regular',sans-serif] font-normal text-[14px] text-[#1f1f1f] placeholder:text-[#959595] outline-none focus:border-[#1b1464] transition-colors";

function ConsultationFormCard() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Consultation request from ${name}`);
    const body = encodeURIComponent(
      [
        `Name / Organization: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        "",
        "Project specifics / goals:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("submitted");
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="bg-white border border-[#e5e5e5] border-solid content-stretch drop-shadow-[0px_12px_20px_rgba(0,0,0,0.03)] flex flex-col gap-[20px] md:gap-[24px] items-start p-[24px] md:p-[40px] md:col-[6/span_7] md:row-1 md:justify-self-stretch md:self-start relative rounded-[16px] shrink-0 w-full"
      data-name="Consultation Form Card"
    >
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#1b1464] text-[18px] md:text-[20px] w-[min-content]">
        Request Technical Consultation
      </p>

      <div
        className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
        data-name="Inputs Section"
      >
        <div className="content-stretch flex flex-col sm:flex-row gap-[16px] items-start relative shrink-0 w-full">
          <label className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative w-full">
            <span className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">
              Full Name / Organization
            </span>
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your Name"
              className={fieldClassName}
            />
          </label>

          <label className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative w-full">
            <span className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">
              Phone Number
            </span>
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+251 9..."
              className={fieldClassName}
            />
          </label>
        </div>

        <label className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
          <span className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">
            Email Address
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="name@company.com"
            className={fieldClassName}
          />
        </label>

        <label className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
          <span className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">
            Project Specifics / Goals
          </span>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What would you like us to build?"
            className={`${fieldClassName} min-h-[100px] resize-y`}
          />
        </label>
      </div>

      {status === "submitted" ? (
        <p className="font-['Outfit:Regular',sans-serif] text-[13px] text-[#1b1464]">
          Opening your email client — please send the message to complete your
          request.
        </p>
      ) : null}

      <PillButton type="submit" label={`Book Consultation`} />
    </form>
  );
}

function ContactGrid() {
  return (
    <div
      className="flex flex-col md:grid gap-[32px] md:gap-x-[64px] md:gap-y-[64px] md:grid-cols-[repeat(12,minmax(0,1fr))] md:grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full"
      data-name="Contact Grid"
    >
      <ContactInfoColumn />
      <ConsultationFormCard />
    </div>
  );
}

export function ContactSection() {
  return (
    <div
      id="contact"
      className="content-stretch flex flex-col items-start px-[20px] md:px-12 lg:px-16 xl:px-20 py-[48px] md:py-[112px] relative shrink-0 w-full scroll-mt-[68px]"
      data-name="Contact Section"
    >
      <ContactGrid />
    </div>
  );
}
