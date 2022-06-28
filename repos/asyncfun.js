// async function  hello(){

// }

const login = async (username,password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password ==="qwerty") return 'Welcome'
    throw 'Invalid Password'
}

login('asdfgh','qwerty ')
.then(msg =>{
    console.log('Logged In')
    console.log(msg)
})
.catch(err=>{
    console.log('Login Unsuccessful')
    console.log(err)
})