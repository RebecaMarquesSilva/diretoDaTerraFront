import { Categoria } from "./categoria";
import { Usuario } from "./Usuario";




export class Produto{
  public id: number;
  public nome: string;
  public preco: number;
  public disponibilidade: string;
  public produtor: string;
  public quantidade: number;
  public categoria: Categoria;
  public usuario: Usuario;
  
  }
