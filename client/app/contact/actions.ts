"use server";

export type FormState = { ok: boolean; message: string };

export async function submitContactForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in your name, email, and message." };
  }

  // TODO: wire up real email delivery (e.g. Resend / AWS SES) here.
  // For now, the submission is just logged on the server.
  console.log("Contact form submission:", { name, email, company, message });

  return {
    ok: true,
    message: "Thanks — we'll be in touch within 24 hours.",
  };
}
