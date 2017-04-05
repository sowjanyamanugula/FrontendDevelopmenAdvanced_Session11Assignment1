import { Injectable } from '@angular/core';

@Injectable()
export class AddresssService {

  constructor() { }
   getAddresses(){
     return[
       {"name":"sowjanya","dob":"6th oct","email":"msow@g.com","status":"active","enroltest":"ok"},
        {"name":"saranya","dob":"1st oct","email":"ysar@g.com","status":"active","enroltest":"ok"},
          {"name":"sneha","dob":"19th aug","email":"ksne@g.com","status":"active","enroltest":"ok"},
            {"name":"navya","dob":"4th nov","email":"knav@g.com","status":"active","enroltest":"ok"}
     ]
   }
}
