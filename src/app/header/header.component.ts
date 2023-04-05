import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from '../services/categories/categories.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) {}

  categories: any[] = [];
  categoryNames: string[] = [];
  title = 'Shopify';
  categoryControl = new FormControl('');

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.categoryNames = this.categories.map(category => category.name);
      console.log(this.categoryNames);
    });
  }


}



