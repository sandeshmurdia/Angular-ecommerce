import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import {randomerror} from 'src/api/randomerror';
import {randomfrontenderror} from 'src/api/randomfrontenderror';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    randomerror();
    randomfrontenderror();
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    randomerror();
    
    this.cartService.removeAllCart();
  }

  checkout(){
    randomfrontenderror();
    randomerror();
  }
}
