import inquirer from "inquirer";

interface atmtype{
    username:string;
    pin:number;
    acctype:string;
    paymethod:string;
    quickcash:number;
    amount:number

}
let atm:atmtype = await inquirer.prompt([
    {
    type:'input',
    name:'username',
    message: 'please enter your name',
    },
    {
    type:'input',
    name:'pin',
    message: `please enter your pin`,
    },
    {
    type:'list',
    name:'acctype',
    choices:['current','saving'],
    message: 'plz choose your account type',
    },
    {
    type:'list',
    name:'paymethod',
    choices:['Fast cash','Selective cash'],
    message: 'Select your mode of payment',
    when(atm){
    return atm.acctype
    }
    },
    {
    type:'list',
    name:'amount',
    choices:[500,1000,1500,2000,5000,10000,25000],
    message: 'Select amount you want to withdraw',
    when(atm){
        return atm.paymethod == 'Fast cash'
    }
    },
    {
    type:'number',
    name:'amount',
    message: 'Enter amount you want to withdraw',
    when(atm){
        return atm.paymethod == 'Selective cash'
    }
    },
    ])
    if(atm.username == 'adeel' && atm.pin == 123 ){
        const balance = 100000;
        const selectedamount = atm.amount;
        const remaining = balance - selectedamount 
        if(selectedamount<balance){
                console.log(`you have withdrawn ${selectedamount}`)
                console.log(`your remaining balance is ${remaining}`)
            }   
            else if (selectedamount>balance) {
                console.log('Insufficient balance')}
    
            
    }
    else if(atm.username == 'chaman' && atm.pin == 321 ){
        const balance = 9000;
        const selectedamount = atm.amount;
        const remaining = balance - selectedamount 
        if(selectedamount<balance){
                console.log(`you have withdrawn ${selectedamount}`)
                console.log(`your remaining balance is ${remaining}`)
            }   
            else if (selectedamount>balance) {
                console.log('Insufficient balance')}
    
            
    }
    else if(atm.username && atm.pin ){
        const balance = 20000;
        const selectedamount = atm.amount;
        const remaining = balance - selectedamount 
        if(selectedamount<balance){
                console.log(`you have withdrawn ${selectedamount}`)
                console.log(`your remaining balance is ${remaining}`)
            }   
            else if (selectedamount>balance) {
                console.log('Insufficient balance')}
    
            
    }
    
    