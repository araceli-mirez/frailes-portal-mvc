import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContactoService, Contacto } from './services/contacto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {

  contactoFrailes: Contacto | null = null;

  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    this.obtenerDatosContacto();
  }

  obtenerDatosContacto(): void {
    this.contactoService.getContactoFrailes().subscribe({
      next: (data) => {
        this.contactoFrailes = {
          ...data,
          instagram: 'https://www.instagram.com/frailesbasketball?srtk=ODhxdmFpbmIxbTJ2',
          facebook: 'https://www.facebook.com/share/1Woi2vPbRn/'
        };

        console.log('Datos cargados del backend con éxito', data);
      },

      error: (err) => {
        console.warn('Backend aún no disponible. Usando datos locales.', err);

        this.contactoFrailes = {
          idContacto: 3,
          estatus: 1,
          nombre: 'Frailes Básquetbol',
          instagram: 'https://www.instagram.com/frailesbasketball?srtk=ODhxdmFpbmIxbTJ2',
          facebook: 'https://www.facebook.com/share/1Woi2vPbRn/'
        };
      }
    });
  }
}