module.exports.signUpErrors=(err)=>{
    let errors={pseudo:"",email:'',password:'mauvais '}
    if (err.message.includes('pseudo'))
    errors.pseudo='Pseudo incorrect'

    if (err.message.includes('email'))
    errors.email='Email incorrect'

    if (err.message.includes('password'))
    errors.password='Le mot de passe doit avoir un minimum de 6 caractéres'

    if(err.code == 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
    errors.pseudo="Ce pseudo est déja enregistré"

    if(err.code == 11000 && Object.keys(err.keyValue)[0].includes('email'))
    errors.email="Cet email est déja enregistré"

    return errors
}


module.exports.SignInErrors=(err)=>{
    let errors={email:'',password:''}

    if (err.message.includes('email'))
    errors.email='Email incorrect';

    if (err.message.includes('password'))
    errors.password='Mot de passe incorrect'


    return errors
}