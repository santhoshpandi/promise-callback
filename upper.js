function display(ans) {
  setTimeout(function(){
console.log(ans)
},3000)
}

function remove_upper(str,myCallback){
  var str1 = "";

  for(var i=0;i<str.length;i++)
  {
    if(str.charCodeAt(i)>96)
    {
      str1=str1+str.charAt(i);
    }

  }
  myCallback(str1);
}

remove_upper("ItiSmOLe",display);