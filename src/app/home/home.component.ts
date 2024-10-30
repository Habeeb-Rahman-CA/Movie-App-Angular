import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { trendingMovies } from '../../assets/data/trending-movies';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  getTrendingMovies = trendingMovies

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getTrendingMovies
    console.log(this.getTrendingMovies);
  }
  
}
