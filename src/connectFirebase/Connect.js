import * as firebase from 'firebase';
import Categories from '../component/home/Categories';

var firebaseConfig = {
    apiKey: "AIzaSyDt2srz5_w7QItX_0AUeJAGCjPzlGH5-eY",
    authDomain: "shophoa-70eaf.firebaseapp.com",
    databaseURL: "https://shophoa-70eaf.firebaseio.com",
    projectId: "shophoa-70eaf",
    storageBucket: "shophoa-70eaf.appspot.com",
    messagingSenderId: "239719727492",
    appId: "1:239719727492:web:1c637d011cfe1ec55cddd1",
    measurementId: "G-RYMZ261QKX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var productList = [];
  var products=[]
  var i=0;
  firebase.database().ref('products').on('value',(product)=>{ product.forEach(element => {
    productList[i]=element.val();
    // console.log(productList.length);
    i++;
    // console.log(i);
    
    
});
products=productList;
//console.log(productList.length);     
});
  var categories=[];
  firebase.database().ref('categories').on('value',(category)=>{ category.forEach(element => {
    categories.push(element.val());
    
});});

 //console.log(productList.length);
  export const hoa = firebase.database();
  
  export default productList ;
