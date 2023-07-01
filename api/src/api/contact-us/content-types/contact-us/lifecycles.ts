export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: process.env.SENDGRID_EMAIL_FROM,
        from: process.env.SENDGRID_EMAIL_TO,
        replyTo: result.email,
        subject: `Email from ${result.email}`,
        text: result.message,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
          <head>
            <meta charset="utf-8">
          
            <title>The HTML5 Herald</title>
            <meta name="description" content="The HTML5 Herald">
            <meta name="author" content="Chromelot">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
          
            <link rel="stylesheet" href="css/styles.css?v=1.0">
          
          </head>
          
          <body>
            <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                  </div>
                  <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3>You've got a new mail from ${result.lastName} ${", "} ${
          result.firstName
        }, their email is: ✉️${result.email}
                  </h3>
                  <div style="font-size: 16px;">
                  <p>Message:</p>
                  <p>${result.message}</p>
                  <br>
                  </div>
                  
                </div>
          </body>
        </html>`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
