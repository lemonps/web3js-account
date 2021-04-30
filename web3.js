var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider)

createAccount = (password) => {
    if(password != "" | password != null) { 
        console.log(web3.eth.accounts.create(password))
    } else {
        console.log(web3.eth.accounts.create())
    }
}

createAccount();