function saturdayFun(activity = 'roller-skate') {
    console.log(`This Saturday, I want to ${activity}!`)
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bathe my dog");



function mondayWork(activity = 'go to the office') {
    console.log(`This Monday, I will ${activity}.`)
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home");


function wrapAdjective(decoration="*") {
    return function(adjective="special"){
       return `You are ${decoration}${adjective}${decoration}!`
    }
}
