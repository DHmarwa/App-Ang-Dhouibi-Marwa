/*    export class Produit {
        id: number | undefined;
        code: string | undefined;
        designation: string | undefined;
        prix: number | undefined;
        categorie: string | undefined;
      
        constructor() {
          this.id = undefined;
          this.code = undefined;
          this.designation = undefined;
          this.prix = undefined;
          this.categorie = undefined;
        }
      }*/
      import { Categorie } from './Categorie';

export class Produit {
  id: number | undefined;
  code: string | undefined;
  designation: string | undefined;
  prix: number | undefined;
  categorie: Categorie | undefined;
}