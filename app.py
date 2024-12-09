from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# Email configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "recouriercom@gmail.com"  # Replace with your email
SENDER_PASSWORD = "akkd tvwa zkvq shtb"   # Replace with your app password
RECEIVER_EMAIL = "info@re-courier.com"   # Replace with receiver's email

@app.get("/", response_class=HTMLResponse)
async def read_form(request: Request):
    return templates.TemplateResponse("Contact.html", {"request": request})

@app.post("/submit")
async def submit_form(
    name: str = Form(...),
    phone: str = Form(...),
    email: str = Form(...),
    company: str = Form(...),
    job: str = Form(...),
    city: str = Form(...),
    message: str =Form(...),
):
    # Create email content
    subject = "New User Registration"
    body = f"""
    New user registration details:
    
    Name: {name}
    Email: {email}
    Phone: {phone}
    Company: {company}
    Job: {job}
    City: {city}
    Message: {message}
    """

    # Setup email
    msg = MIMEMultipart()
    msg['From'] = SENDER_EMAIL
    msg['To'] = RECEIVER_EMAIL
    msg['Subject'] = subject

    msg.attach(MIMEText(body, 'plain'))

    try:
        # Create SMTP session
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        
        # Send email
        text = msg.as_string()
        server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, text)
        server.quit()
        
        return {"message": "Form submitted successfully! Email sent."}
    except Exception as e:
        return {"message": f"An error occurred: {str(e)}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)