function calculatePercent(percent, num){
    return (percent / 100) * num;
}

com=0
m=prompt("enter the commision")
      if(m<5000){
        com += calculatePercent(2, m)
        

      }
      if(m>5000 && m<10000){
        com+=calculatePercent(5, m)

      }  
      if(m>10001 && m<20000){
        com+=calculatePercent(7, m)

      }  
      if(m>20000){
        com+=calculatePercent(10, m)

      }    
      console.log(com)