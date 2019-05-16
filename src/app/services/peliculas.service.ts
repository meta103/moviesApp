import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })

export class PeliculasService {

  private apikey: string = '750dc1e064a9852ad414a0a5c94619a4';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient) { }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeString = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDay()}`;
    let hastaString = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDay()}`;

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeString}&primary_release_date.lte=${hastaString}&api_key=${this.apikey}&language=es`;

    return this.httpClient.get(url)
      .pipe(map((data: any) => {
        return data.results
      }));
  }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    console.log('Has llamado al service')
    return this.httpClient.get(url)
      .pipe(map((data: any) => {
        return data.results
      }));
  }

  getPopularesNinos() {
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.httpClient.get(url)
      .pipe(map((data: any) => {
        return data.results
      }));
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.httpClient.get(url)
      .pipe(map((data: any) => {
        return data.results
      }));
  }

}
