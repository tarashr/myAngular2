import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";

@Injectable()
export class VisitProdDetailGuard implements CanActivate{

    canActivate() {
        return this.visitProdDetail();
    }

    visitProdDetail(): boolean {
        return confirm("Are you sure you want to view product details?");
    }
}