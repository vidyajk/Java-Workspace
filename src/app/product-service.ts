import { Product } from './product';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable()//dipendence injection
export class ProductService{
    products: Product[];
    constructor(private http:HttpClient)
    {

    }    
    sendToServer(product:Product){
    //our code to communicate with the server
    //be here  
    }
    retriveFromServer():Product[]{
    //our code to communicate with the server will be here
    
    let url = 'http://localhost:9090/pagination-json-ajax/vanaja';
       this.http.get<Product[]>(url).subscribe(
    data=> {
     this.products = data;
    });
    
    return this.products;
     /*let p1 = new Product(11,"jan",1000,2);
    let p2 = new Product(22,"feb",2000,4);
    let p3 = new Product(33,"march",5000,5);
    let p4 = new Product(44,"jun",1000,2);
    let p5 = new Product(55,"jul",1000,2);
    let products=[p1,p2,p3,p4,p5];
    return products;*/
}
    
}