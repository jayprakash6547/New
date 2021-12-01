// var  mcars={
//     "p1":"350km",
//     "gallardo":'320km',
//     "veryan" :'409km',
//     "agera" : '429km'
// }
// console.log(mcars)
// console.log(typeof(mcars))



var Agera={
    name:"Agera",
manufacturer:{
    name :"koienseige",
    location: "swedaen"
},
topspeed :429,
color :"black",
spoilers: false,
applyBreakes:function(){
    setTimeout(function(){
console.log('car Stopped');
    },5000)
}
}