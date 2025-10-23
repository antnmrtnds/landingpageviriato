# Quick Setup Guide - EmailJS Templates

## 📋 What You'll Create

Your contact form will send **2 emails** when someone submits:

1. **Internal Email** → Goes to `hello@viriato.com.pt` (your team)
2. **Auto-Reply Email** → Goes to the user who submitted the form

---

## 🚀 Quick Steps

### 1. Create Internal Notification Template

**In EmailJS Dashboard:**
- Template Name: `Viriato Contact Form - Internal`
- Subject: `New Contact Form Submission from {{from_name}}`
- To Email: `hello@viriato.com.pt`
- From Email: `{{from_email}}`
- From Name: `{{from_name}}`

**Content:**
```
New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Project Type: {{project_type}}

Message:
{{message}}

---
This message was sent from the Viriato website contact form.
```

✅ Save and copy the **Template ID**

---

### 2. Create Auto-Reply Template

**In EmailJS Dashboard:**
- Template Name: `Viriato Contact Form - Auto Reply`
- Subject: `Thank you for contacting Viriato - We received your inquiry`
- To Email: `{{from_email}}`
- From Email: `hello@viriato.com.pt`
- From Name: `Viriato Team`
- Reply To: `hello@viriato.com.pt`

**Content:** Copy from `auto-reply-template.html` or `simple-auto-reply.html`

**Optional:** Upload your logo as `logo.png` in Attachments

✅ Save and copy the **Template ID**

---

### 3. Update ContactForm.jsx

Open `src/components/ContactForm.jsx` and replace:

```javascript
const EMAILJS_TEMPLATE_ID = 'YOUR_INTERNAL_TEMPLATE_ID';  
// ↑ Replace with Template ID from Step 1

const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'YOUR_AUTOREPLY_TEMPLATE_ID';
// ↑ Replace with Template ID from Step 2
```

---

## 📧 Email Flow

```
User fills form
      ↓
   Submits
      ↓
    ┌──────────────────┐
    │  Your React App  │
    └──────────────────┘
      ↓            ↓
   Email 1      Email 2
      ↓            ↓
  ┌────────┐  ┌──────────┐
  │  Team  │  │   User   │
  │ (You)  │  │ (Sender) │
  └────────┘  └──────────┘
```

---

## ✅ Checklist

- [ ] Created internal notification template in EmailJS
- [ ] Copied internal template ID
- [ ] Created auto-reply template in EmailJS
- [ ] Copied auto-reply template ID
- [ ] (Optional) Uploaded logo to auto-reply template
- [ ] Updated `EMAILJS_TEMPLATE_ID` in ContactForm.jsx
- [ ] Updated `EMAILJS_AUTOREPLY_TEMPLATE_ID` in ContactForm.jsx
- [ ] Tested form submission
- [ ] Verified both emails arrive correctly

---

## 🧪 Testing

1. Run `npm run dev`
2. Fill out the contact form
3. Submit

**You should receive:**
- ✅ 1 email to `hello@viriato.com.pt` (internal notification)
- ✅ 1 email to the email you entered in the form (auto-reply)

---

## 🎨 Template Previews

### Internal Notification Email
```
Subject: New Contact Form Submission from John Doe

New contact form submission:

Name: John Doe
Email: john@example.com
Company: Example Corp
Project Type: Web Development

Message:
We're interested in building a new website...

---
This message was sent from the Viriato website contact form.
```

### Auto-Reply Email (Simple Version)
```
Subject: Thank you for contacting Viriato

[Your Logo]
────────────────────────────
Hi John Doe,

Thank you for reaching out to us! We have received 
your request: "Web Development", and we'll do our 
best to process it within 3 business days.

────────────────────────────
Best regards,
The Viriato Team
```

---

## 🆘 Need Help?

- Full documentation: See `README.md` in this folder
- Complete setup guide: See `EMAILJS_SETUP.md` in the root
- Template files: `auto-reply-template.html` and `simple-auto-reply.html`

---

## 💡 Pro Tips

1. **Test with your own email first** before going live
2. **Check spam folders** if emails don't arrive
3. **Upload a logo** to make auto-reply emails look professional
4. **Customize the message** to match your brand voice
5. **Monitor your EmailJS dashboard** for delivery status

---

## 📊 Free Tier Limits

- ✅ 200 emails/month
- ✅ 2 email services
- ✅ 2 email templates (perfect for this setup!)
- ✅ Unlimited websites

**Note:** Each form submission sends 2 emails, so you can handle **100 submissions/month** on the free tier.

---

That's it! 🎉

