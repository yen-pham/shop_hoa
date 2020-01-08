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
var categoryList =[];
var userList =[];
var products = [];
var i = 0;

function getProductsa() {
  return new Promise((resolve, reject) => {
    firebase.database().ref('products').on('value', (product) => {
     // console.log(product)
     const productList = [];
      product.forEach(element => {
        productList[i] = element.val();
        productList[i].key = element.key;
        i++;

      });
      console.log(productList);
      resolve(productList)
    })
  })

}
function getCategories() {
  return new Promise((resolve, reject) => {
    firebase.database().ref('categories').on('value', (category) => {
      category.forEach(element => {
        categoryList.push(element.val()) ;
      });
      console.log(categoryList);
      resolve(categoryList)
    })
  })

}
function getUsers() {
  return new Promise((resolve, reject) => {
    firebase.database().ref('users').on('value', (user) => {
      user.forEach(element => {
        userList.push(element.val()) ;
      });
      resolve(userList)
    })
  })

}


const hoa = firebase.database();

export { hoa , getProductsa , getCategories , getUsers };

