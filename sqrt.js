let p=new Promise((resolve,reject)=>{
    let a=-2;
    if(a>=0){
        setInterval(resolve,1000,Math.sqrt(a));
    }
    else{
        setInterval(reject,1000,"Negative");
    }
})
p.then((res)=>{
    console.log("The square_root is "+res);
}).catch((msg)=>{
    console.log("The value is "+msg);
})
