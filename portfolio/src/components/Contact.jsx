import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import SendIcon from "@mui/icons-material/SendOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { profile } from "../data/profile";
import "../styles/Contact.css";

const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(profile.contactEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.code === 200) {
        setStatus("sent");
        setForm(empty);
      } else {
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="section contact-section reveal" aria-labelledby="contact-title">
      <div className="contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="section-title">Let's talk</h2>
          <p className="section-lead">
            Hiring for a full-stack role, or have a project in mind? Send a note
            and I'll get back to you within a couple of days.
          </p>
          <ul className="contact-links">
            <li>
              <EmailIcon aria-hidden="true" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <LinkedInIcon aria-hidden="true" />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <TextField
            label="Name"
            name="name"
            autoComplete="name"
            required
            fullWidth
            value={form.name}
            onChange={update("name")}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            required
            fullWidth
            value={form.email}
            onChange={update("email")}
          />
          <TextField
            label="Message"
            name="message"
            required
            fullWidth
            multiline
            minRows={5}
            value={form.message}
            onChange={update("message")}
          />
          <div aria-live="polite">
            {status === "sent" && (
              <Alert severity="success">Thanks! Your message is on its way.</Alert>
            )}
            {status === "error" && (
              <Alert severity="error">
                {error} You can also email me directly at {profile.email}.
              </Alert>
            )}
          </div>
          <Button
            type="submit"
            variant="contained"
            disableElevation
            size="large"
            endIcon={<SendIcon />}
            disabled={status === "sending"}
            sx={{ alignSelf: "flex-start" }}
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
