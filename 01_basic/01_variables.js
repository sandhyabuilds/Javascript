const accountId = 144553
let accountEmail = "sandhyavishwakarma509@gmail.com"
var accountPassword = "12345"
accountCity = "Deoria"
let accountState;

//accountId = 2 // not allowed

accountEmail = "sandhya34@gmail.com"
accountPassword = "232323"
accountCity = "jaipur"

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
