import {FormControl} from '@angular/forms';

export class CustomValidators {

    public static passwordsMatch(password : string, confirmedPassword : string) {

        return(control : FormControl) : {
        [s: string]: boolean
        } => {
            if (password !== confirmedPassword) {
                return {'passwordMismatch': true}
            } else {
                return {'passwordMismatch': false};
            }
        }
    }
}
