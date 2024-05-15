import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { MovieComponent } from "../movie/movie.component";
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
    selector: 'app-shop',
    standalone: true,
    template: `
    	<app-product-list 
			title=""
			subtitle=""
			[products]="products.byGroup['skill']"
		/>
		<app-product-list 
			title=""
			subtitle=""
			[products]="products.byGroup['intensive']"
		/>
		<app-product-list 
			title=""
			subtitle=""
			[products]="products.byGroup['course']"
		/>
		<!-- <app-movie />  -->
		<app-movie-list />
	`,
    imports: [ProductListComponent, MovieComponent, MovieListComponent]
})
export class ShopComponent {
  	telegram = inject(TelegramService);//inject возможо lowerCase
  	products = inject(ProductsService);

  	constructor() {
    	this.telegram.BackButton.hide();
  	}
}
