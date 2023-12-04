import { Component, OnInit } from '@angular/core';
import { DbserviceService } from './services/dbservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'catalog-app';

  constructor(private service: DbserviceService) {}

  products: any = [];

  refreshProducts() {
    this.service.getProducts().subscribe((res)=> {
      this.products = res;
    })
  }

  ngOnInit() {
    this.refreshProducts();
  }

  onRefreshRate() {
    this.service.refreshRate().subscribe(
      (response: any) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onCreateMessage() {
    this.service.createMessage().subscribe(
      (response: any) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onSubmitDescription() {
    this.service.submitDescription().subscribe(
      (response: any) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onRunScan() {
    this.service.runScan().subscribe(
      (response: any) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  addProducts(name: string, description: string,imageUrl: string, price: string) {
    this.service.runScan().subscribe(
      (response: any) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.service.addProduct(name, description, imageUrl, price).then((res) => {
      console.log(res);      
      this.refreshProducts()
    });
  }

    deleteProducts(id: string) {
    this.service.deleteProduct(id).then((res) => {
      console.log(res);      
      this.refreshProducts()
    })
  }


}
