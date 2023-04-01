import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  console.log(req.body, process.env.SENDGRID_API_KEY);
  try {
    await sendgrid.send({
      to: "slnsrn@gmail.com",
      from: "slnsrn@gmail.com",
      subject: "[Contact request from website]",
      html: `<div>You've got a mail <br/> <div>${req.body.message}</div><div>${req.body.name}</div><div>${req.body.email}</div><div>${req.body.phone}</div></div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
