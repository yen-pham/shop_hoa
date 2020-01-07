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
var products = [];
var i = 0;

const getData = {
  getProducts : function() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('products').on('value', (product) => {
        console.log(product)
        product.forEach(element => {
          productList[i] = element.val();
          // console.log(productList.length);
          i++;
          // console.log(i);
          // ở đây lấy dữ liệu firebase về lưu vô productList
  
        });
        resolve(productList)
        // products=productList;
        console.log(productList, productList.length)     // t console khi nó con trong hàm nj  
      })
    })
  
  }
  
}


var categories = [];
firebase.database().ref('categories').on('value', (category) => {
  category.forEach(element => {
    categories.push(element.val());

  });
});
// setTimeout(() => { console.log(productList, productList.length); }, 6000)
// ra ngoài

console.log(products);
export const hoa = firebase.database();

export default products;
