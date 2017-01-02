import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";

@Injectable()
export class LeaveProdDetailGuard implements CanDeactivate{

    canDeactivate() {
        return this.leaveProdDetail();
    }

    leaveProdDetail(): boolean {
        return confirm("Are you sure you want to leave this page?");
    }
}