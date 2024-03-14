import { authenModule } from "./module/authen.module";
// import './axios.instace'
import { categoryModule } from "./module/category.module";
import { productModule } from "./module/product.module";
import { cartModule } from "./module/cart.modules";
import { receiptsModule } from "./module/receipts.module";
export const api = {

    categoryModule,
    authenModule,
    productModule,
    cartModule,
    receiptsModule,
}