// import propductList, {hoa} from '../connectFirebase/Connect';
// var redux = require('redux');

// const noteInitialState = {
//     products: [],
//     product: 'aaa'
// }
// const allReducer = (state = noteInitialState, action) => {
//     switch (action.type) {
//         case 'ADD_PRODUCT':
//             console.log(JSON.stringify(action.getItem) );
//             hoa.ref('product').push(action.getItem);
//             return state
//         case 'GET_PRODUCT':
//             var productlist = [];
//             hoa.ref('products').on('value',(products)=>{
//                 products.forEach(element => {
//                     productlist.push(element.val());
                    
//                 });
//                 // console.log(productlist);
//                 // state.products = productlist;
//                 // console.log(state.products);

//           return{...state,products : productlist}
//             // console.log(state.products);

//            })
        
//         // case 'UPDATE_PRODUCT':
//         //     return {...state,isAdd : false}
//         // case 'ADD_PRODUCT':
//         //     return {...state,isAdd : true}
//         // case 'DELETE_PRODUCT':
           
//         //     return {...state,AlertShow : false}
//         // case 'ADD_USER':
//         //     return {...state,AlertShow : true,alertContent:action.alertContent,alertType:action.alertType}
//         // case 'ADD_ADMIN':
//         //     return {...state,editItem : action.editObject}
//         // case 'DELETE_ADMIN':
//         //     return {...state,editItem : action.editObject}
//         // case 'UPDATE_ADMIN':
//         //     return {...state,editItem : action.editObject}
//         // case 'DELETE_USER':
//         //     console.log(action.deleteId);
//         //     noteData.child(action.deleteId).remove();
//         //     return state
//         // case 'UPDATE_USER':
//         //     noteData.child(action.getItem.id).update({
//         //         noteTitle : action.getItem.noteTitle,
//         //         noteContent : action.getItem.noteContent
//         //     })
//         //     console.log('cap nhap du lieu  :'+JSON.stringify(action.getItem)+ 'thanh cong');
//         //     return {...state,editItem : {}}
//         // case 'GET_BILL':
//         //     console.log(action.deleteId);
//         //     noteData.child(action.deleteId).remove();
//         //     return state
                
//         // case 'ADD_BILL':
//         //     console.log(action.deleteId);
//         //     noteData.child(action.deleteId).remove();
//         //     return state
                
//         // case 'DELETE_BILL':
//         //     console.log(action.deleteId);
//         //     noteData.child(action.deleteId).remove();
//         //     return state
                
               
         
//         default:
//             return state
//     }

// }
// var store = redux.createStore(allReducer);


//     // var productlist = [];
//     // hoa.ref('products').on('value',(products)=>{
//     //     products.forEach(element => {
//     //         productlist.push(element.val());
            
//     //     });
//     //     console.log(productlist);
//     //     store.getState().products = productlist;
//     //     console.log(store.getState().products.length);});


// export default store;