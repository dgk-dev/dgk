"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { siteConfig } from "@/constants/site";

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("모든 항목을 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "문의 전송에 실패했습니다.");
      }

      toast.success("문의가 전송되었습니다. 확인 후 연락드리겠습니다.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "문의 전송에 실패했습니다.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-section-inset dark:shadow-section-inset-dark mx-auto my-6 border-y border-neutral-100 px-4 py-12 dark:border-neutral-800"
    >
      <div className="mx-auto flex max-w-lg flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            type="text"
            value={formData.name}
            placeholder="성함 또는 회사명"
            className="focus:ring-primary rounded-md px-2 py-2 text-sm shadow-[var(--shadow-aceternity)] focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            type="email"
            value={formData.email}
            placeholder="contact@company.com"
            className="focus:ring-primary rounded-md px-2 py-2 text-sm shadow-[var(--shadow-aceternity)] focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            placeholder="현재 사업 병목, 기대하는 결과, 논의하고 싶은 범위를 적어주세요."
            className="focus:ring-primary resize-none rounded-md px-2 py-1 text-sm shadow-[var(--shadow-aceternity)] focus:ring-2 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset]"
        >
          {isSubmitting ? "전송 중..." : "문의 보내기"}
        </button>
        <p className="text-xs text-neutral-500">
          메일이 바로 연결되지 않으면 {siteConfig.email}로 직접 보내셔도 됩니다.
        </p>
      </div>
    </form>
  );
};
