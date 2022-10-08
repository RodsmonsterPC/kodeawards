const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const {jwtDecode} = require('jwt-decode');

async function googleValidator(token='') {
    console.log('IN googleVALIDATOR')
    console.log(token);

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,  
    });

    console.log('ticket',ticket);
    const {name,picture,email} = ticket.getPayload();
  
    return{
        name,
        picture,
        email
    }
}

module.exports = {
    googleValidator
}