import {Routes, RouterModule} from "@angular/router";
import HomeComponent from "./components/home/home";
import ProductDetailComponent from "./components/product-detail/product-detail";
import {LeaveProdDetailGuard} from "./guards/LeaveProdDetailGuard";
import {VisitProdDetailGuard} from "./guards/VisitProdDetailGuard";

const routes: Routes = [
    {path: '',                    component: HomeComponent},
    {path: 'products/:productId', component: ProductDetailComponent, canActivate: [VisitProdDetailGuard],
        canDeactivate: [LeaveProdDetailGuard],
    }
];

export const router = RouterModule.forRoot(routes);