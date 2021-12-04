var mlist=[1,2,3,4,5];
var pos;
for(pos=0;pos<mlist.length;pos++){
console.log('position =>' +pos+'value=>'+mlist[pos])
}


//break keyword
var pos;
for(pos=0;pos<mlist.length;pos++){
    // if(pos==3)break
    if(pos%2==0)continue
    console.log('position =>' +pos+'value=>'+mlist[pos])
}