# 🏗️ EmailJS Architecture - System Overview

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER'S BROWSER                           │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                  Landing Page Website                     │ │
│  │                                                           │ │
│  │  ┌─────────────────────────────────────────────────────┐ │ │
│  │  │         ContactForm Component (React)               │ │ │
│  │  │                                                     │ │ │
│  │  │  [Name Input]                                       │ │ │
│  │  │  [Email Input]                                      │ │ │
│  │  │  [Company Input]                                    │ │ │
│  │  │  [Project Type Input]                               │ │ │
│  │  │  [Message Textarea]                                 │ │ │
│  │  │  [Consent Checkbox]                                 │ │ │
│  │  │  [Send Button] ← User clicks here                   │ │ │
│  │  │                                                     │ │ │
│  │  └─────────────────────────────────────────────────────┘ │ │
│  │                           ↓                               │ │
│  │  ┌─────────────────────────────────────────────────────┐ │ │
│  │  │  handleSubmit() function                            │ │ │
│  │  │  • Validates form data                              │ │ │
│  │  │  • Prepares email payload                           │ │ │
│  │  │  • Calls EmailJS API                                │ │ │
│  │  └─────────────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────────┘ │
│                              ↓                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │        @emailjs/browser Library                           │ │
│  │        • emailjs.init(PUBLIC_KEY)                         │ │
│  │        • emailjs.send(SERVICE, TEMPLATE, DATA)            │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                               ↓
                    HTTPS Request (Encrypted)
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│                      EMAILJS CLOUD API                          │
│                   (dashboard.emailjs.com)                       │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  API Gateway                                              │ │
│  │  • Authenticates request (Public Key)                     │ │
│  │  • Validates payload                                      │ │
│  │  • Routes to service                                      │ │
│  └───────────────────────────────────────────────────────────┘ │
│                              ↓                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  Email Service Router                                     │ │
│  │  Service ID: service_5voxdl9                              │ │
│  └───────────────────────────────────────────────────────────┘ │
│                              ↓                                  │
│                    ┌─────────┴─────────┐                       │
│                    ↓                   ↓                       │
│  ┌──────────────────────────┐  ┌──────────────────────────┐   │
│  │ Template 1: Internal     │  │ Template 2: Auto-Reply   │   │
│  │ template_xxx123          │  │ template_yyy456          │   │
│  │                          │  │                          │   │
│  │ • Merge variables        │  │ • Merge variables        │   │
│  │ • Generate HTML          │  │ • Generate HTML          │   │
│  │ • Prepare email          │  │ • Prepare email          │   │
│  └──────────────────────────┘  └──────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                    ↓                   ↓
            SMTP Connection     SMTP Connection
                    ↓                   ↓
┌─────────────────────────────────────────────────────────────────┐
│              EMAIL SERVICE PROVIDER (Gmail/Outlook)             │
│                                                                 │
│  Sends via authenticated SMTP connection                        │
│  • SPF/DKIM verification                                        │
│  • Spam filtering                                               │
│  • Delivery optimization                                        │
└─────────────────────────────────────────────────────────────────┘
                    ↓                   ↓
         ┌──────────────────┐  ┌──────────────────┐
         ↓                  │  │                  ↓
┌─────────────────┐         │  │         ┌─────────────────┐
│  TEAM INBOX     │         │  │         │  USER INBOX     │
│                 │         │  │         │                 │
│ hello@          │         │  │         │ user@           │
│ viriato.com.pt  │         │  │         │ example.com     │
│                 │         │  │         │                 │
│ ┌─────────────┐ │         │  │         │ ┌─────────────┐ │
│ │ Internal    │ │         │  │         │ │ Auto-Reply  │ │
│ │ Notification│ │         │  │         │ │ Confirmation│ │
│ │ Email       │ │         │  │         │ │ Email       │ │
│ └─────────────┘ │         │  │         │ └─────────────┘ │
│                 │         │  │         │                 │
│ From:           │         │  │         │ From:           │
│ user@...        │         │  │         │ hello@...       │
│                 │         │  │         │                 │
│ Contains:       │         │  │         │ Contains:       │
│ • Name          │         │  │         │ • Greeting      │
│ • Email         │         │  │         │ • Confirmation  │
│ • Company       │         │  │         │ • Summary       │
│ • Project Type  │         │  │         │ • Timeline      │
│ • Message       │         │  │         │ • Contact info  │
└─────────────────┘         │  │         └─────────────────┘
                            │  │
                    ← Delivery Confirmation →
```

---

## Data Flow Sequence

### Step-by-Step Process

```
1. USER ACTION
   └─→ User fills form and clicks "Send"

2. CLIENT-SIDE VALIDATION
   └─→ React validates required fields
       └─→ Consent checkbox checked?
           └─→ All fields filled?

3. DATA PREPARATION
   └─→ Create emailData object:
       {
         from_name: "John Doe",
         from_email: "john@example.com",
         company: "Example Corp",
         project_type: "Web Development",
         message: "Looking for...",
         to_email: "hello@viriato.com.pt"
       }

4. EMAILJS INITIALIZATION
   └─→ emailjs.init(PUBLIC_KEY)
       └─→ Authenticates with EmailJS API

5. FIRST EMAIL SEND
   └─→ emailjs.send(SERVICE_ID, TEMPLATE_ID_INTERNAL, emailData)
       └─→ Sends to EmailJS API
           └─→ EmailJS processes Template 1
               └─→ Merges variables
                   └─→ Sends via SMTP to hello@viriato.com.pt

6. SECOND EMAIL SEND (Parallel or Sequential)
   └─→ emailjs.send(SERVICE_ID, TEMPLATE_ID_AUTOREPLY, emailData)
       └─→ Sends to EmailJS API
           └─→ EmailJS processes Template 2
               └─→ Merges variables
                   └─→ Sends via SMTP to user's email

7. SUCCESS HANDLING
   └─→ Both emails sent successfully
       └─→ Show success message to user
           └─→ Reset form
               └─→ Re-enable submit button

8. DELIVERY
   └─→ Internal email arrives at team inbox (1-5 seconds)
   └─→ Auto-reply arrives at user inbox (1-5 seconds)
```

---

## Component Breakdown

### ContactForm.jsx Structure

```javascript
ContactForm Component
├── State Management
│   ├── formData (user input)
│   ├── isSubmitting (loading state)
│   └── submitStatus (success/error)
│
├── Event Handlers
│   ├── handleChange() - Updates form data
│   └── handleSubmit() - Processes submission
│       ├── Validates credentials
│       ├── Initializes EmailJS
│       ├── Sends email 1 (internal)
│       ├── Sends email 2 (auto-reply)
│       ├── Handles success
│       └── Handles errors
│
└── UI Components
    ├── Form inputs
    ├── Submit button
    └── Status messages
```

---

## Configuration Structure

### EmailJS Configuration Hierarchy

```
EmailJS Account
│
├── Services (1)
│   └── service_5voxdl9 (Gmail/Outlook)
│       └── Connected to email provider
│
├── Templates (2)
│   ├── Template 1: Internal Notification
│   │   ├── ID: template_xxx123
│   │   ├── To: hello@viriato.com.pt
│   │   └── Variables: {{from_name}}, {{from_email}}, etc.
│   │
│   └── Template 2: Auto-Reply
│       ├── ID: template_yyy456
│       ├── To: {{from_email}}
│       └── Variables: {{from_name}}, {{project_type}}, etc.
│
└── Account Settings
    └── Public Key: Tl46IR2VPN0keTgDU
```

---

## Security Model

```
┌─────────────────────────────────────────────────────────┐
│                  CLIENT-SIDE (Browser)                  │
│                                                         │
│  ✓ Public Key (safe to expose)                         │
│  ✓ Service ID (safe to expose)                         │
│  ✓ Template IDs (safe to expose)                       │
│  ✗ NO private keys                                     │
│  ✗ NO email passwords                                  │
│                                                         │
│  Note: Rate limiting prevents abuse                    │
└─────────────────────────────────────────────────────────┘
                         ↓
              HTTPS (Encrypted)
                         ↓
┌─────────────────────────────────────────────────────────┐
│                   EMAILJS SERVER                        │
│                                                         │
│  • Authenticates using Public Key                      │
│  • Rate limiting per account                           │
│  • Validates templates                                 │
│  • Checks service permissions                          │
│                                                         │
│  ✓ Private email credentials stored here (secure)      │
│  ✓ SMTP passwords (never exposed to client)            │
└─────────────────────────────────────────────────────────┘
                         ↓
              SMTP (Authenticated)
                         ↓
┌─────────────────────────────────────────────────────────┐
│              EMAIL SERVICE PROVIDER                     │
│                                                         │
│  • Receives emails from authenticated EmailJS          │
│  • Applies SPF/DKIM verification                       │
│  • Delivers to recipients                              │
└─────────────────────────────────────────────────────────┘
```

---

## Template Processing Flow

### How Templates Work

```
1. TEMPLATE DEFINITION (in EmailJS Dashboard)
   ┌──────────────────────────────────────┐
   │ Subject: Thank you {{from_name}}     │
   │                                      │
   │ Content:                             │
   │ Hi {{from_name}},                    │
   │ We received your inquiry about       │
   │ "{{project_type}}".                  │
   └──────────────────────────────────────┘

2. DATA FROM FORM
   ┌──────────────────────────────────────┐
   │ {                                    │
   │   from_name: "John Doe",             │
   │   project_type: "Web Development"    │
   │ }                                    │
   └──────────────────────────────────────┘

3. VARIABLE MERGING (by EmailJS)
   ┌──────────────────────────────────────┐
   │ Subject: Thank you John Doe          │
   │                                      │
   │ Content:                             │
   │ Hi John Doe,                         │
   │ We received your inquiry about       │
   │ "Web Development".                   │
   └──────────────────────────────────────┘

4. FINAL EMAIL
   ┌──────────────────────────────────────┐
   │ From: Viriato Team                   │
   │ To: john@example.com                 │
   │ Subject: Thank you John Doe          │
   │                                      │
   │ Hi John Doe,                         │
   │ We received your inquiry about       │
   │ "Web Development".                   │
   └──────────────────────────────────────┘
```

---

## Error Handling Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    ERROR SCENARIOS                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 1. CLIENT-SIDE ERRORS                                   │
│    ├─→ Invalid credentials                             │
│    │   └─→ Show: "EmailJS not configured"              │
│    ├─→ Network error                                   │
│    │   └─→ Show: "Failed to send. Check connection"    │
│    └─→ Validation error                                │
│        └─→ Show: "Please fill all required fields"     │
│                                                         │
│ 2. EMAILJS API ERRORS                                   │
│    ├─→ Invalid service ID                              │
│    │   └─→ Console: Error details                      │
│    ├─→ Invalid template ID                             │
│    │   └─→ Console: Error details                      │
│    ├─→ Rate limit exceeded                             │
│    │   └─→ Show: "Too many requests. Try later"        │
│    └─→ Service temporarily down                        │
│        └─→ Show: "Service unavailable. Try later"      │
│                                                         │
│ 3. SMTP ERRORS (rare)                                   │
│    ├─→ Recipient email invalid                         │
│    │   └─→ EmailJS dashboard shows error               │
│    └─→ Email service down                              │
│        └─→ EmailJS retries automatically               │
│                                                         │
└─────────────────────────────────────────────────────────┘

All errors logged to:
• Browser console (developer info)
• EmailJS dashboard (delivery status)
• User UI (friendly messages)
```

---

## Performance Metrics

### Expected Performance

```
Action                          | Expected Time
─────────────────────────────────────────────────
User clicks "Send"              | 0 ms
Form validation                 | < 10 ms
EmailJS API request             | 100-300 ms
Template processing             | 50-100 ms
SMTP delivery (Email 1)         | 1-3 seconds
SMTP delivery (Email 2)         | 1-3 seconds
Total user wait (UI feedback)   | 100-400 ms
Total email delivery            | 1-5 seconds

Bandwidth Usage:
• Request payload: ~500 bytes - 2 KB
• Response: ~200 bytes
• Total per submission: < 5 KB
```

---

## Scalability Considerations

### Current Setup (Free Tier)

```
Capacity: 200 emails/month
Usage: 2 emails per submission
Result: 100 form submissions/month

Daily average: ~3 submissions/day
Hourly average: ~0.13 submissions/hour

Recommended for:
✓ Small business websites
✓ Portfolio sites
✓ Startup landing pages
✓ Low-traffic contact forms
```

### Scaling Path

```
Stage 1: Free Tier (current)
└─→ 100 submissions/month
    └─→ When exceeding: Upgrade to...

Stage 2: Personal Plan ($10/month)
└─→ 1,000 emails = 500 submissions/month
    └─→ When exceeding: Upgrade to...

Stage 3: Professional Plan ($30/month)
└─→ 5,000 emails = 2,500 submissions/month
    └─→ Alternative: Move to custom backend

Stage 4: Custom Solution
└─→ Own email server
    └─→ Unlimited capacity
        └─→ Higher maintenance
```

---

## Monitoring & Observability

### What to Monitor

```
┌─────────────────────────────────────────────────────────┐
│                   MONITORING POINTS                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 1. CLIENT-SIDE (Browser Console)                        │
│    • Form submission attempts                           │
│    • Validation errors                                  │
│    • API call success/failure                           │
│    • Response times                                     │
│                                                         │
│ 2. EMAILJS DASHBOARD                                    │
│    • Email delivery status                              │
│    • Monthly usage (X / 200 emails)                     │
│    • Error logs                                         │
│    • Rate limit warnings                                │
│                                                         │
│ 3. EMAIL INBOXES                                        │
│    • Internal emails arriving                           │
│    • Auto-replies arriving                              │
│    • Spam folder checks                                 │
│    • Delivery delays                                    │
│                                                         │
│ 4. USER FEEDBACK                                        │
│    • "I didn't receive confirmation" reports            │
│    • Form submission issues                             │
│    • Email display problems                             │
│                                                         │
└─────────────────────────────────────────────────────────┘

Check weekly:
✓ EmailJS usage stats
✓ Error rate
✓ Delivery success rate

Check monthly:
✓ Approaching rate limits?
✓ Need to upgrade plan?
✓ Template performance
```

---

## Backup & Recovery

### What Happens If...

```
Scenario: EmailJS service is down
└─→ Form shows error message
    └─→ User sees: "Email us at hello@viriato.com.pt"
        └─→ Alternative contact method provided

Scenario: Email delivery fails
└─→ EmailJS retries automatically (3 attempts)
    └─→ If still fails: logged in dashboard
        └─→ Manual follow-up required

Scenario: Template accidentally deleted
└─→ Recreate from files:
    └─→ auto-reply-template.html
        └─→ simple-auto-reply.html
            └─→ COPY_PASTE_TEMPLATE.txt

Scenario: Credentials compromised
└─→ Regenerate Public Key in EmailJS dashboard
    └─→ Update ContactForm.jsx
        └─→ Redeploy website

Scenario: Rate limit exceeded
└─→ Form disabled until next month
    └─→ OR upgrade EmailJS plan
        └─→ OR implement queue system
```

---

## Dependencies

```
┌─────────────────────────────────────────────────────────┐
│                   TECHNOLOGY STACK                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Frontend:                                               │
│ ├── React 18+                                           │
│ ├── Vite (build tool)                                   │
│ └── Motion (animations)                                 │
│                                                         │
│ Email Service:                                          │
│ ├── @emailjs/browser (npm package)                      │
│ ├── EmailJS API (cloud service)                         │
│ └── Gmail/Outlook (SMTP provider)                       │
│                                                         │
│ Configuration:                                          │
│ ├── Public Key: Tl46IR2VPN0keTgDU                       │
│ ├── Service ID: service_5voxdl9                         │
│ ├── Template ID 1: (to be configured)                   │
│ └── Template ID 2: (to be configured)                   │
│                                                         │
│ External Services:                                      │
│ ├── EmailJS (https://emailjs.com)                       │
│ └── Email Provider (Gmail/Outlook)                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Future Enhancements

### Potential Additions

```
Phase 1 (Current): Basic dual-email system ✓

Phase 2 (Future):
├── Add email tracking (open rates)
├── Implement A/B testing for templates
├── Add attachment support
└── Create email scheduling

Phase 3 (Advanced):
├── Integrate with CRM system
├── Add analytics dashboard
├── Implement email sequences
└── Create automated follow-ups

Phase 4 (Enterprise):
├── Move to dedicated email service
├── Custom email infrastructure
├── Advanced personalization
└── Machine learning optimization
```

---

**This architecture supports a robust, scalable email notification system for your contact form!** 🏗️


