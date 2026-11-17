import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contacto {
    idContacto: number;
    nombre: string;
    estatus?: number;
    instagram: string;
    facebook: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContactoService{
    private apiUrl='http://192.168.0.71:8080/contactos';

    constructor(private http: HttpClient) {}
    getContactoFrailes (): Observable<Contacto>{
    return this.http.get<Contacto>(`${this.apiUrl}/3`);
    }
}