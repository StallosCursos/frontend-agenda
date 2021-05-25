import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/components/toast/toast.service';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/CategoriaService/categoria.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})

export class CategoryPageComponent implements OnInit {
  
  public categoria: Categoria;
  public categorias: Observable<Categoria[]>;
  public termo: string;

  constructor(private categoriaService: CategoriaService, private toastService: ToastService) { 
     this.categoria = new Categoria();
  }

  ngOnInit(): void {
     this.BuscarCategorias();
  }

  Salvar() {
    this.categoriaService.AddCategoria(this.categoria).subscribe(sucess => {
       this.toastService.SendToast("Categoria adicionada com sucesso");
       this.BuscarCategorias();
    }, error => this.toastService.SendToast("Erro ao adicionar categoria"));
  }

  Limpar() {
    this.categoria = new Categoria();
  }

  BuscarCategorias() {
    this.categorias = this.categoriaService.BuscarCategorias();
  }

  BuscarCategoriaPorTermo() {
    this.categorias = this.categoriaService.BuscarCategoriasPor(this.termo);
  }
}
