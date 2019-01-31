 import { Product } from './product'
import { OnInit } from '@angular/core';
//import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from './product-service';

@Component({
    selector:'product-list',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent implements OnInit{
    products:Product[];
    constructor(private ps:ProductService){
        
    }
ngOnInit(){
/*
 let p1 = new Product(11,"jan",1000,2);
 let p2 = new Product(22,"feb",2000,4);
 let p3 = new Product(33,"march",5000,5);
 let p4 = new Product(44,"jun",1000,2);
 let p5 = new Product(55,"jul",1000,2);
// this.products=[p1,p2,p3,p4,p5];*/
 //this.products=this.ps.retriveFromServer();
}

loadProducts(){
    this.products=this.ps.retriveFromServer();
}
}