# EmailJS Setup Guide for Viriato Contact Form

Follow these steps to connect your contact form to **hello@viriato.com.pt**

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Once logged in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Select your email provider (recommended: **Gmail** or **Outlook**)
4. Follow the authentication steps to connect your email account
5. **Important:** Make sure to use the email account that has access to **hello@viriato.com.pt**
6. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Templates

You need to create **TWO templates**:
1. **Internal Notification** - Sends form submissions to your team
2. **Auto-Reply** - Confirms receipt to the user who submitted the form

### Template 1: Internal Notification (to hello@viriato.com.pt)

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template configuration:

**Template Settings:**
- **Template Name:** Viriato Contact Form - Internal
- **Subject:** New Contact Form Submission from {{from_name}}

**Email Content:**
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

4. In the **"To email"** field, enter: `hello@viriato.com.pt`
5. In the **"From email"** field, use: `{{from_email}}`
6. In the **"From name"** field, use: `{{from_name}}`
7. Click **"Save"**
8. Copy the **Template ID** (e.g., `template_xyz123`) - You'll need this

### Template 2: Auto-Reply (to the user)

1. Click **"Create New Template"** again
2. Use this configuration:

**Template Settings:**
- **Template Name:** Viriato Contact Form - Auto Reply
- **Subject:** Thank you for contacting Viriato - We received your inquiry
- **To email:** `{{from_email}}`
- **From email:** `hello@viriato.com.pt` or `noreply@viriato.com.pt`
- **From name:** `Viriato Team`
- **Reply to:** `hello@viriato.com.pt`

**Email Content:** See `emailjs-templates/auto-reply-template.html` for the full HTML code

3. Copy the HTML from `emailjs-templates/auto-reply-template.html` (or use `simple-auto-reply.html` for a minimal version)
4. Paste it into the **Content** section
5. (Optional) Upload your logo as `logo.png` in the Attachments section
6. Click **"Save"**
7. Copy the **Template ID** (e.g., `template_abc456`) - You'll need this too

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **Public Key** (it looks like: `abc123XYZ_4567890`)
3. Copy this key

## Step 5: Update Your ContactForm.jsx

Open `src/components/ContactForm.jsx` and replace these values:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';           // Your Public Key from Step 4
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';           // Your Service ID from Step 2
const EMAILJS_TEMPLATE_ID = 'YOUR_INTERNAL_TEMPLATE_ID'; // Internal notification template
const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'YOUR_AUTOREPLY_TEMPLATE_ID'; // Auto-reply template
```

Then update the email sending logic to send BOTH emails:

```javascript
try {
  emailjs.init(EMAILJS_PUBLIC_KEY);

  // Send internal notification to your team
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      project_type: formData.projectType,
      message: formData.message,
      to_email: 'hello@viriato.com.pt'
    }
  );

  // Send auto-reply to the user
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_AUTOREPLY_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      project_type: formData.projectType,
      message: formData.message
    }
  );

  setSubmitStatus('success');
  // ... rest of success handling
} catch (error) {
  // ... error handling
}
```

**Real Example:**
```javascript
const EMAILJS_PUBLIC_KEY = 'Tl46IR2VPN0keTgDU';
const EMAILJS_SERVICE_ID = 'service_5voxdl9';
const EMAILJS_TEMPLATE_ID = 'template_internal123';      // Internal notification
const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'template_auto456'; // Auto-reply to user
```

## Step 6: Test Your Form

1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out and submit a test message
4. Check **hello@viriato.com.pt** for the email
5. Also check the EmailJS dashboard for delivery status

## Troubleshooting

### Emails not arriving?
- Check your EmailJS dashboard for error messages
- Verify that the Service ID, Template ID, and Public Key are correct
- Make sure your email service is properly authenticated
- Check your spam/junk folder

### Rate Limits
- Free EmailJS accounts allow **200 emails/month**
- If you need more, consider upgrading to a paid plan

### Email Variables Not Showing?
- Make sure the variable names in your template match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Variables are case-sensitive

## Free Tier Limits

- ✓ 200 emails per month
- ✓ 2 email services
- ✓ 2 email templates
- ✓ Unlimited websites

## Alternative: Environment Variables (Recommended for Production)

For better security, store your EmailJS credentials in environment variables:

1. Create a `.env` file in your project root:
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

2. Update ContactForm.jsx to use these variables:
```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    // ... rest of configuration
  }
);
```

3. Don't forget to add `.env` to your `.gitignore` file!

## Support

If you encounter any issues:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**That's it!** Your contact form is now connected to hello@viriato.com.pt 🎉

