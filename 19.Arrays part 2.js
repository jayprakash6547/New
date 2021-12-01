myFriends=['shaw','Dina','Piya','manveer','Jacob']
myFriends.splice(2,0,'Donna','ponna')
console.log(myFriends)

myFriends.splice(4,1)
console.log(myFriends)
myFriends.splice(0,2)
console.log(myFriends)

//concatenation
var mOfficeFriends=['nina','piyush','manohar','kancha']
var Allfriends=myFriends.concat(mOfficeFriends)
console.log(Allfriends)

Allfriends.sort()
console.log(Allfriends);
Allfriends.reverse()
console.log(Allfriends)