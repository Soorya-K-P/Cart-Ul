import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems:any=[]//cartitems

  grand:number=0;

  updatedgrand:number=0;

  constructor(private cart:CartService, private router:Router) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitems=data;
        console.log(this.cartitems);
        this.grand=this.cart.gettotal()
        
        
      }
    )
  }

  removecart(product:any){
    this.cart.removecart(product)
  }
  removeall(){
    this.cart.removeall()
  }

  // discounts

  discount5per(){
    let discount=(this.grand*5)/100
    this.updatedgrand=this.grand-discount
  }
  discount10per(){
    let discount=(this.grand*10)/100
    this.updatedgrand=this.grand-discount
  }
  discount50per(){
    let discount=(this.grand*50)/100
    this.updatedgrand=this.grand-discount
  }

  // proceed

  proceed(){
    alert('Your order is placed')
    this.router.navigateByUrl('')
  }



}
