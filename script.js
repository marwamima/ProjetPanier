function sommeproduit(){
var a=0,b=0,c=0;;
var total=0;
     var numberproduit=document.querySelectorAll('.sum').length; 
       
      for (i=0;i<numberproduit;i++){
          a[i]=document.querySelectorAll('.price')[i]; 
          b[i]=document.querySelectorAll('.qty')[i].value;
          c[i]=a[i]*b[i];  //la somme de  chaque produit :quantité*prix
          document.querySelectorAll('.sum')[i]=c[i];
          return total+=c[i]; // la somme total de tout les produits 

        
       } 
      document.querySelector('#total')==total;
}
    sommeproduit();
