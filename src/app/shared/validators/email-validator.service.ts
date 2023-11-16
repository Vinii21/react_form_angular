import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log({email})

    const httpObservable = new Observable<ValidationErrors | null>((subscriber)=>{
      console.log({email})
      if(email === "vini@gmail.com") {
        subscriber.next({emailTaken: true});
        subscriber.complete();
      }
      subscriber.next(null);
      subscriber.complete();
    }).pipe(
      delay(5000)
    )

    return httpObservable;

  }

 /*  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log({email})

    return of({
      emailTaken: true
    })

  } */

}
