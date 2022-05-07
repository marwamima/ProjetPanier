function sommeproduit(){
var a=0,b=0,c=0;;
var total=0;
     var numberproduit=document.querySelectorAll('.sum').length; 
       
      for (i=0;i<numberproduit;i++){
          a[i]=document.querySelectorAll('.price')[i]; 
          b[i]=document.querySelectorAll('.qty')[i].value;
          c[i]=a[i]*b[i];
          return total+=c[i];

        
       } 
      document.querySelector('#total')==total;
}
    sommeproduit();
