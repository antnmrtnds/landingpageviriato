# EmailJS Templates for Viriato - File Index

This folder contains everything you need to set up EmailJS email notifications for your contact form.

## 📁 Files Overview

### 🚀 Start Here
- **`QUICK_SETUP.md`** - Fast setup guide with checklist (5 minutes)
- **`COPY_PASTE_TEMPLATE.txt`** - Ready-to-copy HTML templates

### 📧 Template Files
- **`auto-reply-template.html`** - Full-featured auto-reply template (Recommended)
- **`simple-auto-reply.html`** - Minimal auto-reply template

### 📖 Documentation
- **`README.md`** - Complete documentation with customization tips
- **`INDEX.md`** - This file

### 🔗 Related Files
- **`../EMAILJS_SETUP.md`** - Main setup guide (in project root)
- **`../src/components/ContactForm.jsx`** - Contact form component (already updated)

---

## 🎯 What Do I Need?

### If you're setting up EmailJS for the first time:
1. Read `../EMAILJS_SETUP.md` (main setup guide)
2. Follow the steps to create your EmailJS account
3. Come back here for the template code

### If you already have EmailJS set up:
1. Open `QUICK_SETUP.md` for a fast overview
2. Copy templates from `COPY_PASTE_TEMPLATE.txt`
3. Paste into EmailJS dashboard
4. Update template IDs in `ContactForm.jsx`

### If you want to customize the templates:
1. Read `README.md` for customization options
2. Edit `auto-reply-template.html` or `simple-auto-reply.html`
3. Test your changes in EmailJS dashboard

---

## 🔄 Email Flow

```
┌─────────────────────────────────────────────────────────┐
│                    User fills form                       │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────┐
│              Form submits via EmailJS                    │
└──────┬───────────────────────────────────────────┬──────┘
       │                                           │
       ↓                                           ↓
┌─────────────────┐                      ┌────────────────┐
│ Internal Email  │                      │ Auto-Reply     │
│                 │                      │                │
│ To: hello@...   │                      │ To: user@...   │
│ Template: 1     │                      │ Template: 2    │
└─────────────────┘                      └────────────────┘
```

---

## 📋 Quick Checklist

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Template 1 (Internal) created and ID copied
- [ ] Template 2 (Auto-reply) created and ID copied
- [ ] Logo uploaded (optional)
- [ ] ContactForm.jsx updated with both template IDs
- [ ] Tested form submission
- [ ] Both emails received successfully

---

## 🎨 Template Comparison

| Feature | Simple Template | Detailed Template |
|---------|----------------|-------------------|
| Logo | ✅ Yes | ✅ Yes |
| Personalized greeting | ✅ Yes | ✅ Yes |
| Thank you message | ✅ Yes | ✅ Yes |
| Submission summary | ❌ No | ✅ Yes |
| Contact info | ❌ No | ✅ Yes |
| Professional styling | Basic | Enhanced |
| File size | Smaller | Larger |
| **Best for** | Minimal design | Professional business |

---

## 🔧 Template IDs You'll Need

After creating templates in EmailJS, you'll have:

```javascript
// In src/components/ContactForm.jsx

const EMAILJS_TEMPLATE_ID = 'template_xxxxxx';  // Internal notification
const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'template_yyyyyy';  // Auto-reply
```

Find these IDs in your EmailJS dashboard under "Email Templates".

---

## 🆘 Troubleshooting

**Templates not sending?**
→ Check template IDs are correct in ContactForm.jsx

**Variables showing as {{variable_name}}?**
→ Ensure variable names match exactly (case-sensitive)

**Logo not displaying?**
→ Upload logo.png in template Attachments, or use direct URL

**Only one email arriving?**
→ Check both template IDs are configured correctly

**Emails going to spam?**
→ Add SPF/DKIM records (see EmailJS documentation)

---

## 📊 Stats

- **Templates:** 2 (internal + auto-reply)
- **Variables used:** 5 (from_name, from_email, company, project_type, message)
- **Free tier limit:** 200 emails/month (= 100 form submissions)
- **Setup time:** ~10 minutes

---

## 🚦 Status Indicators

When form is submitted:

- ⏳ **Sending...** - Both emails being sent
- ✅ **Success** - Both emails sent successfully
- ❌ **Error** - At least one email failed to send

Check browser console and EmailJS dashboard for detailed error messages.

---

## 💡 Next Steps

1. **Test thoroughly** - Submit test forms with different data
2. **Monitor EmailJS dashboard** - Check delivery rates
3. **Customize templates** - Match your brand identity
4. **Set up monitoring** - Track form submissions
5. **Consider upgrading** - If you exceed 100 submissions/month

---

## 📞 Support

- EmailJS docs: https://www.emailjs.com/docs/
- Template customization: See `README.md`
- General setup: See `../EMAILJS_SETUP.md`

---

**Ready to go?** Start with `QUICK_SETUP.md` →

