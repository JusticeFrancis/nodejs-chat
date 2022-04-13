const { workerData } = require("worker_threads");
const nodeMailer = require("nodemailer")

async function main() {
    console.log(workerData.description);

    //Transporter configuration
    let transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: "cjfrancisf1@gmail.com",
          pass: "justicefrancis"
        }
    })

    var mailOptions = {
        to: workerData.email,
        subject: 'Testmail',
        //text: 'Hi'+ workerData.email+' here is your conversation ID : [' + workerData.id +']  visit link https://function on'+ workerData.date,
        
        html:`
        

          <div style="">
            <div style="padding: 2px 16px;">
                <p> here are the details for your conversation ....</p>
                <p>Date : `+workerData.date+`</p>
                <p>conversationId : [`+workerData.id+`]  <small>(keep this secreet)</small></p>
                <p>conversationLink : <a href='http://127.0.0.1:3000/start-appointment'> link</a>  </p>

                visit the converation link on the set date
            </div>
          </div>  
        `,
      };

    //Email configuration
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

main().catch(err => console.log(err))