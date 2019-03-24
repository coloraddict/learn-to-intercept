import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {

    constructor(private http: HttpClient){}

    login(data){
        data = {email: 'admin', password: 'admin'};
        return this.http.post('https://jsonplaceholder.typicode.com/posts?userId=1', data);
    }

    getCustomerDetails(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}