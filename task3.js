var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'srivaishnavi.suddapalli15@gmail.com',
        pass:'pivv pojr husf hwpu',
    }

    });
    var mailOptions={
        from:'srivaishnavi.suddapalli15@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'sending mail from 20A21A6413',
        text:'Exam',
    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log('error');
        }
        else{
            console.log('email sent :'+info.response);
        }
    })


