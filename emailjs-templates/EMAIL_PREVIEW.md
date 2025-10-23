# 📧 Email Preview - What Your Users Will See

This document shows exactly what the emails will look like when sent.

---

## 📬 Email 1: Internal Notification (To Your Team)

**Recipient:** hello@viriato.com.pt  
**From:** user@example.com (John Doe)  
**Subject:** New Contact Form Submission from John Doe

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  New contact form submission:                          │
│                                                         │
│  Name: John Doe                                        │
│  Email: john@example.com                               │
│  Company: Example Corporation                          │
│  Project Type: Web Development                         │
│                                                         │
│  Message:                                              │
│  We're interested in building a new website for our    │
│  company. We need modern design and e-commerce         │
│  functionality. When can we schedule a consultation?   │
│                                                         │
│  ---                                                   │
│  This message was sent from the Viriato website        │
│  contact form.                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Purpose:** Notifies your team about new inquiries immediately

---

## 📬 Email 2: Auto-Reply (To The User)

### Version A: Detailed Template (Recommended)

**Recipient:** john@example.com  
**From:** Viriato Team <hello@viriato.com.pt>  
**Subject:** Thank you for contacting Viriato - We received your inquiry

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  [Viriato Logo] → viriato.com.pt                      │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  Hi John Doe,                                          │
│                                                         │
│  Thank you for reaching out to us! We have received   │
│  your inquiry about "Web Development", and we'll do    │
│  our best to process it within 3 business days.       │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │ Your submission details:                        │  │
│  │                                                 │  │
│  │ Name: John Doe                                  │  │
│  │ Email: john@example.com                         │  │
│  │ Company: Example Corporation                    │  │
│  │ Project Type: Web Development                   │  │
│  │ Message:                                        │  │
│  │ We're interested in building a new website...   │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  If you have any urgent questions, please don't        │
│  hesitate to reach out to us directly at               │
│  hello@viriato.com.pt                                  │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│  Best regards,                                         │
│  The Viriato Team                                      │
│                                                         │
│  This is an automated confirmation email. Please do    │
│  not reply directly to this email.                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### Version B: Simple Template (Minimal)

**Recipient:** john@example.com  
**From:** Viriato Team <hello@viriato.com.pt>  
**Subject:** Thank you for contacting Viriato

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  [Viriato Logo] → viriato.com.pt                      │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  Hi John Doe,                                          │
│                                                         │
│  Thank you for reaching out to us! We have received   │
│  your request: "Web Development", and we'll do our     │
│  best to process it within 3 business days.           │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│  Best regards,                                         │
│  The Viriato Team                                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Purpose:** Confirms to users that their inquiry was received

---

## 🎨 Visual Elements

### Colors Used

| Element | Color | Hex Code | Purpose |
|---------|-------|----------|---------|
| Primary accent | Green | `#4CAF50` | Links, borders |
| Border lines | Light gray | `#eaeaea` | Separators |
| Background box | Light gray | `#f9f9f9` | Summary box |
| Footer text | Medium gray | `#999999` | Disclaimer |

### Typography

- **Font Family:** system-ui, sans-serif, Arial
- **Base Size:** 16px
- **Footer Size:** 12px
- **Line Height:** 1.2-1.5

---

## 📱 Mobile Responsiveness

Both templates are mobile-friendly and will display correctly on:
- ✅ Desktop email clients (Outlook, Thunderbird, etc.)
- ✅ Webmail (Gmail, Yahoo, Outlook.com)
- ✅ Mobile devices (iOS Mail, Gmail app, etc.)

The simple design ensures compatibility across all email clients.

---

## ⏱️ Email Timeline

```
User submits form (0:00)
        ↓
Internal email arrives (0:01)  ← Your team sees it first
        ↓
Auto-reply arrives (0:02)      ← User gets confirmation
```

Both emails typically arrive within seconds.

---

## 🔔 User Experience

### What the user sees:

1. **Fills out form** on your website
2. **Clicks "Send"** button
3. **Sees "Sending..."** indicator
4. **Sees success message** ✓ "Message sent successfully! We'll get back to you soon."
5. **Receives email** in their inbox within seconds
6. **Reads confirmation** and knows their inquiry was received

### Benefits:
- ✅ Builds trust with immediate confirmation
- ✅ Reduces anxiety (did my message go through?)
- ✅ Shows professionalism
- ✅ Provides your contact info if they need urgent help
- ✅ Sets expectations (3 business days)

---

## 🧪 Test Scenarios

### Scenario 1: Normal Inquiry
```
Name: Sarah Johnson
Email: sarah@techcorp.com
Company: TechCorp Solutions
Project Type: Brand Identity
Message: Looking for complete rebranding package

Result: Both emails sent ✅
```

### Scenario 2: Short Message
```
Name: Mike
Email: mike@email.com
Company: Startup Inc
Project Type: Consultation
Message: Call me

Result: Both emails sent ✅
```

### Scenario 3: Long Message
```
Name: Alexandra Rodriguez
Email: alex@company.com
Company: International Business Group Ltd
Project Type: Marketing Campaign
Message: [500+ words about detailed requirements...]

Result: Both emails sent ✅ (EmailJS handles long messages)
```

---

## 🎯 Key Features

### Internal Email (Team)
- **Fast notification** - See inquiries immediately
- **All details included** - No need to check dashboard
- **Reply directly** - Email comes from user's address
- **Simple format** - Easy to read and process

### Auto-Reply (User)
- **Professional appearance** - Branded with logo
- **Reassuring message** - Confirms receipt
- **Clear timeline** - 3 business days response time
- **Contact option** - Direct email for urgent matters
- **Summary included** - User can verify what they sent

---

## 💼 Professional Touch

The auto-reply email demonstrates:
1. **Responsiveness** - Instant acknowledgment
2. **Organization** - Structured, clear format
3. **Transparency** - Shows what you received
4. **Reliability** - Commits to response timeline
5. **Accessibility** - Provides contact options

This creates a positive first impression and professional image.

---

## 📊 Expected Results

With proper setup, you should see:

- **Delivery rate:** ~99% (both emails)
- **Arrival time:** < 5 seconds
- **Spam rate:** < 1% (with proper email configuration)
- **User satisfaction:** ↑ (immediate confirmation)

---

## 🎭 Customization Ideas

### Personal Touch
Replace "The Viriato Team" with specific person:
```
Best regards,
Maria Silva
Customer Relations Manager
Viriato
```

### Add Contact Info
```
Best regards,
The Viriato Team

📞 +351 XXX XXX XXX
📧 hello@viriato.com.pt
🌐 viriato.com.pt
```

### Add Social Links
```
Follow us:
[LinkedIn] [Instagram] [Facebook]
```

---

**These templates are ready to use!** Just copy the HTML from the template files and paste into EmailJS.

For customization help, see `README.md` →

