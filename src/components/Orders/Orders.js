import './Orders.css'
import CartWithProducts from "../Cart/CartWithProducts";
import {useSelector} from "react-redux";

function Orders() {
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);
    return(
            <div>
                {
                    !isLoggedIn ? <div>Чтобы оформить заказ, нужно войти или зарегистрироваться, если вы новый пользователь </div>
                    :
                    <div>
                        <h1>Оформление заказа</h1>
                        <h2>Товары в корзине</h2>
                        <CartWithProducts/>

                    </div>
                }

            </div>

    )
}
export default Orders