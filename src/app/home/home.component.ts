import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { trendingMovies } from '../../assets/data/trending-movies';
import { theaterMovies } from '../../assets/data/theater-movies';
import { popularMovies } from '../../assets/data/popular-movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  getTrendingMovies = trendingMovies
  getTheaterMovies = theaterMovies
  getPopularMovies = popularMovies

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.getTrendingMovies
    this.getTheaterMovies
    this.getPopularMovies
  }
  
  goToMovie(type: string, id: number){
    this.router.navigate(['movie', type, id])
  }
}
