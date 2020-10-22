import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const urlBase = 'http://localhost:3000';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'com-backend';

  produtos: Produto[] = [];
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    preco: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Produto[]>(`${urlBase}/produtos`).subscribe((dados) => {
      this.produtos = dados;
    });
  }

  addProduct() {
    const product = this.form.value;
    this.httpClient
      .post<Produto>(`${urlBase}/produtos`, product)
      .subscribe((newProduct) => {
        this.produtos = [...this.produtos, newProduct];
      });
  }

  delProduct(produto: Produto) {
    this.httpClient
      .delete(`${urlBase}/produtos/${produto.id}`)
      .subscribe(() => {
        const index = this.produtos.indexOf(produto);
        this.produtos = [
          ...this.produtos.slice(0, index),
          ...this.produtos.slice(index + 1),
        ];
        // this.produtos.splice(index, 1);
      });
  }
}
