import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any[] = []

  checkoutForm = this.formBuilder.group({
    name: '',
    price: 0
  });

  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.findAll()
  }

  save() {
    console.log(this.checkoutForm.value)

    this.productService.save(this.checkoutForm.value).subscribe(product => {
      console.log('product save!');
      console.log(product);

      this.findAll()
      this.resetForm()
    })
  }

  findAll(){
    this.productService.findAll().subscribe(products => {
      console.log('Products received!')
      console.log(products)

      this.products = products;
    })
  }

  delete(id: number){
    this.productService.delete(id).subscribe(() => {
      console.log('Product deleted!')

      this.findAll()
    })
  }

  resetForm(){
    this.checkoutForm.setValue({
      name: '',
      price: 0
    });
  }
}
