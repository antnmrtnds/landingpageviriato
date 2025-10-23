# EmailJS Template Files for Viriato

This folder contains the HTML templates for EmailJS email notifications.

## Templates

### 1. `auto-reply-template.html` (Recommended)
**Purpose:** Sends an automatic confirmation email to users who submit the contact form.

**Features:**
- Professional design with logo
- Personalized greeting
- Summary of their submission
- 3 business day response time commitment
- Contact information for urgent matters

**Use this template for:** User-facing auto-reply emails

---

### 2. `simple-auto-reply.html`
**Purpose:** A simpler version that matches the standard EmailJS design exactly.

**Features:**
- Clean, minimal design
- Simple acknowledgment
- Quick confirmation message

**Use this template for:** Minimal auto-reply preference

---

## How to Set Up These Templates

### Step 1: Create the Auto-Reply Template

1. Log in to [EmailJS Dashboard](https://dashboard.emailjs.com/admin/templates)
2. Click **"Create New Template"**
3. Configure the template:

   **Template Settings:**
   - **Template Name:** `Viriato Contact Form - Auto Reply`
   - **Subject:** `Thank you for contacting Viriato - We received your inquiry`
   - **To email:** `{{from_email}}`
   - **From email:** `hello@viriato.com.pt` or `noreply@viriato.com.pt`
   - **From name:** `Viriato Team`
   - **Reply to:** `hello@viriato.com.pt`

4. Copy the HTML content from `auto-reply-template.html` (or `simple-auto-reply.html`) and paste it into the **Content** section
5. Click **"Save"**
6. Copy the **Template ID** (e.g., `template_abc123`)

### Step 2: Add Logo Image (Optional)

The templates reference `cid:logo.png`. To add your logo:

1. In the EmailJS template editor, look for the **"Attachments"** section
2. Upload your Viriato logo as `logo.png`
3. The template will automatically display it

**Note:** If you don't upload a logo, you can:
- Remove the `<img>` tag from the template, OR
- Replace `src="cid:logo.png"` with a direct URL: `src="https://yourdomain.com/logo.png"`

### Step 3: Update ContactForm.jsx

After creating the auto-reply template, you now need to send TWO emails:
1. One to `hello@viriato.com.pt` (internal notification) - Already configured
2. One to the user (auto-reply) - New template

You'll need to update your `ContactForm.jsx` to send both emails.

---

## Variable Mapping

The templates use these variables from your contact form:

| Template Variable | Form Field          | Description                    |
|------------------|---------------------|--------------------------------|
| `{{from_name}}`  | `formData.name`     | User's full name               |
| `{{from_email}}` | `formData.email`    | User's email address           |
| `{{company}}`    | `formData.company`  | User's company name            |
| `{{project_type}}`| `formData.projectType` | Type of project/inquiry    |
| `{{message}}`    | `formData.message`  | User's message                 |

---

## Testing Your Template

1. Go to your EmailJS template in the dashboard
2. Click **"Test It"**
3. Fill in sample values for all variables
4. Send a test email to yourself
5. Verify:
   - Logo displays correctly
   - All variables are replaced with actual values
   - Formatting looks good on desktop and mobile
   - Links work properly

---

## Production Checklist

- [ ] Template created in EmailJS dashboard
- [ ] Logo uploaded (or image URL updated)
- [ ] Template ID copied
- [ ] Test email sent and received successfully
- [ ] All variables display correctly
- [ ] Links tested and working
- [ ] Mobile display verified
- [ ] ContactForm.jsx updated with new template ID
- [ ] Both emails (internal + auto-reply) sending successfully

---

## Customization Tips

### Change Response Time
Replace `within 3 business days` with your preferred timeframe.

### Add Social Media Links
Add this before the closing `</div>`:
```html
<p style="margin-top: 20px; text-align: center;">
  <a href="https://linkedin.com/company/viriato" style="margin: 0 10px;">LinkedIn</a>
  <a href="https://instagram.com/viriato" style="margin: 0 10px;">Instagram</a>
</p>
```

### Change Brand Colors
The template uses `#4CAF50` (green). Replace with your brand color:
```html
border-left: 4px solid #YOUR_COLOR;
color: #YOUR_COLOR;
```

---

## Troubleshooting

**Logo not displaying?**
- Make sure you uploaded the logo in the EmailJS template editor
- Or use a direct URL instead of `cid:logo.png`

**Variables showing as {{variable_name}}?**
- Check that variable names in template match exactly with your form submission
- Variables are case-sensitive

**Email not sending?**
- Verify Template ID is correct in ContactForm.jsx
- Check EmailJS dashboard for error logs
- Ensure `{{from_email}}` has a valid email address

---

For more help, see the main [EMAILJS_SETUP.md](../EMAILJS_SETUP.md) file.

