# Form Integration Setup Guide

This website uses **Formspree** to handle form submissions and send emails with minimal cost.

## Setup Instructions

### Step 1: Create a Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Free tier includes 50 submissions/month

### Step 2: Create Your Forms
You'll need to create two forms:

#### Contact Form (for general inquiries)
1. In Formspree dashboard, click "New Form"
2. Form name: "Contact Form"
3. Copy the Form ID (looks like: `xvbpzqdb`)

#### Employer Request Form (for recruitment requests)
1. Create another form named "Employer Request"
2. Copy the Form ID

### Step 3: Update the Code
Replace `YOUR_FORMSPREE_ID` in the following files with your actual Form IDs:

**Contact Form** (`src/pages/Contact.jsx`):
```javascript
fetch('https://formspree.io/f/YOUR_CONTACT_FORM_ID', {
```

**Employer Form** (`src/pages/Employers.jsx`):
```javascript
fetch('https://formspree.io/f/YOUR_EMPLOYER_FORM_ID', {
```

### Step 4: Configure Email Notifications
1. In Formspree dashboard, go to your form settings
2. Add your email: `rkayemba@students.vu.ac.ug`
3. Customize email notifications if needed

## Alternative Free Options

### Formsubmit.co (Completely Free)
Replace the fetch URL with:
```javascript
fetch('https://formsubmit.co/rkayemba@students.vu.ac.ug', {
```

### EmailJS (200 emails/month free)
1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create email template
3. Install SDK: `npm install emailjs-com`
4. Integrate with the forms

## Testing Your Forms
After setup:
1. Run the website: `npm run dev`
2. Fill out the forms and submit
3. Check your email for submissions
4. Verify in Formspree dashboard

## Cost Summary
- **Formspree Free:** 50 submissions/month ($0)
- **Formspree Paid:** Starts at $8/month for unlimited
- **Formsubmit.co:** Completely free
- **EmailJS Free:** 200 emails/month ($0)

## Security Notes
- Formspree includes spam protection
- You can add reCAPTCHA if needed
- All submissions are encrypted
