const aMan=
{
    city:'Kazan',
    name:'Rudolf',
}
const added=(obj,addedtime = 'none') =>({
    ...obj,
addedtime,
})

console.log(added(aMan,Date()));