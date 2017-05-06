//Load required modules
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

//Fill out SMTP credentials
var transport = nodemailer.createTransport(smtpTransport({
	service: 'Gmail',
	host : 'smtp.gmail.com',
	secureConnection: true,
	port : 465,
	auth:{
		user : "@gmail.com",     //username
		pass : ""                //password
	}
}));

//
var msg = {
	transport :  transport,
	text : "U got a mail from Node.js" ,   //Message
	from : "<@gmail.com>",                 //From
	subject : "Node Mail Testing"          //Subject
};

// List of Receivers 
var maillist = [
	'<@gmail.com>'
]



transport.verify(function(error, success) {  //Verify the conncetion
   if (error) {
        console.log(error);
   }
   else {
        console.log('Server is ready to take our messages');
		maillist.forEach(function(to,i){
			msg.to = to;
			transport.sendMail(msg,function(err){   //Mail 
				if(err){
					console.log("not send");
					return;
				}
				console.log('Send to ' + to);
			});
		});
   }
});


