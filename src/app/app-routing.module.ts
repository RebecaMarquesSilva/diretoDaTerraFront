import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [

  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'contato', component: ContatoComponent},
  
  

  {path: 'produto-delete/:id', component: ProdutoDeleteComponent}, 


  {path: 'produto', component: ProdutoComponent},
  // {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  // {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},
  // {path: 'produto-edit/:id', component: ProdutoEditComponent},
  // {path: 'produto-delete/:id', component: ProdutoDeleteComponent},
  // {path: 'user-edit/:id', component: UserEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
