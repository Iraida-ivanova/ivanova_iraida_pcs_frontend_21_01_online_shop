import {createSlice} from "@reduxjs/toolkit";



export const cartSlice = createSlice(
    {
        name: 'cartItems',
        initialState: {
            cartItems: [],
            totalSum:0,


        },
        reducers: {


            addToCart: (state, action) => {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);

                state.cartItems.push({...action.payload,
                    quantity: 1,
                    totalPrice:Number(action.payload.price.split('р')[0]),


                })

            },
            setIsAdded: (state, action)=>{
                state.cartItems.map((item)=>{if(action.payload===item.id){item.isAdded=!item.isAdded}})
            },
            removeItemFromCart: (state, action) => {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);

            },
            increment: (state,action) => {state.cartItems.map((item)=> {if(action.payload.id===item.id){item.quantity += 1}})},
            decrement:(state,action) => {state.cartItems.map((item)=> {if(action.payload.id===item.id){item.quantity -= 1}})},
            getTotalPrice: (state, action) => {
                state.cartItems.map((item)=>{const price = item.price.split('р');
                    if(action.payload.id===item.id){
                        item.totalPrice = Number(price[0]) * item.quantity;

                        // state.cartItems = {...state.cartItems, quantity: item.quantity,totalPrice:item.totalPrice }
                    }
                })
            },
            getResult: (state ) => {
                state.totalSum = state.cartItems.reduce((sum,item)=>sum + item.totalPrice,0)
            }
        },
    }
)
export const {addToCart,removeItemFromCart,increment,decrement,getTotalPrice,getResult,setIsAdded} = cartSlice.actions;
export default cartSlice.reducer