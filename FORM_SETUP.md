# EmailJS Integration Setup Guide

This website uses **EmailJS** to handle form submissions and send emails - perfect for Vercel Hobby mode!

## Why EmailJS for Vercel Hobby?

- **200 emails/month free** (vs 50 with Formspree)
- **No backend required** - perfect for static sites
- **Professional email templates** with your branding
- **Client-side only** - works perfectly with Vercel
- **Multiple email services** (Gmail, Outlook, etc.)

## Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Free tier: 200 emails/month

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Add your email service (Gmail, Outlook, etc.)
3. Follow the setup instructions for your email provider
4. For Gmail: you'll need to use an App Password

### Step 3: Create Email Templates
You'll need two templates:

#### Contact Form Template
1. Go to "Email Templates" → "Create New Template"
2. Template name: "Contact Form"
3. Subject: `New Contact from {{from_name}}`
4. Content:
```
You have a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

#### Employer Request Template
1. Create another template named "Employer Request"
2. Subject: `Employer Request from {{company_name}}`
3. Content:
```
New employer recruitment request:

Company: {{company_name}}
Contact Person: {{contact_person}}
Email: {{email}}
Phone: {{phone}}

Position: {{job_position}}
Number of Employees Needed: {{employees_needed}}

Message:
{{message}}
```

### Step 4: Get Your Credentials
You'll need three IDs from EmailJS:
1. **Service ID** (from Email Services)
2. **Template IDs** (from Email Templates - one for each form)
3. **Public Key** (from Account → General)

### Step 5: Update the Code
Replace the placeholder IDs in the following files:

**Contact Form** (`src/pages/Contact.jsx`):
```javascript
emailjs.send(
  'YOUR_SERVICE_ID',    // Your EmailJS Service ID
  'YOUR_TEMPLATE_ID',   // Contact Form Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'     // Your EmailJS Public Key
)
```

**Employer Form** (`src/pages/Employers.jsx`):
```javascript
emailjs.send(
  'YOUR_SERVICE_ID',    // Your EmailJS Service ID
  'YOUR_TEMPLATE_ID',   // Employer Request Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'     // Your EmailJS Public Key
)
```

### Step 6: Test Your Forms
1. Run the website: `npm run dev`
2. Fill out the contact form and submit
3. Check your email for the submission
4. Test the employer form as well

## Alternative Options

### Formspree (50 submissions/month free)
- Good for form analytics and dashboard
- Lower limit than EmailJS
- Setup instructions available on request

### Formsubmit.co (Completely free)
- Unlimited submissions
- Basic functionality
- Replace with: `fetch('https://formsubmit.co/rkayemba@students.vu.ac.ug')`

## Vercel Deployment Notes
- EmailJS works perfectly with Vercel Hobby mode
- No server-side code required
- All processing happens client-side
- No additional Vercel configuration needed

## Cost Summary
- **EmailJS Free:** 200 emails/month ($0) ✅ Recommended
- **EmailJS Paid:** $5/month for 3,000 emails
- **Formspree Free:** 50 submissions/month ($0)
- **Formsubmit.co:** Unlimited ($0)

## Security Notes
- EmailJS uses encryption for data transmission
- Your Public Key is safe to expose in client-side code
- Never share your Private Key
- Consider adding reCAPTCHA for spam protection

## Troubleshooting
- If emails don't arrive, check your spam folder
- Verify your email service connection in EmailJS
- Check browser console for error messages
- Ensure template variables match form field names
