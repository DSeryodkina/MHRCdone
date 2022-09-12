import {Recipe} from "./recipe.model";
import { Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import { Subject} from "rxjs";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Critical Jewel 2',
      'Extends the weapon sharpness gauge. However, it will not increase the gauge past its maximum.',
      'https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/handicraft_jewel_3-monster-hunter-rise-wiki-guide.png',
      [
        new Ingredient('Zenny', 4000),
        new Ingredient('Lazurite Jewel', 5),
        new Ingredient('Apex Blaze Sac', 2),
        new Ingredient('Magnamalo Horn+', 4),
        new Ingredient('Almudron Plate', 1),
      ]),
    new Recipe(
      'Mastery Jewel 2',
      'Prevents your weapon from losing sharpness during critical hits.',
      'https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/mastery-jewel-2-decoration-monster-hunter-rise-wiki-guide-new.png',
      [
        new Ingredient('Zenny', 4000),
        new Ingredient('Lazurite Jewel', 8),
        new Ingredient('Fire Dragon Scale+', 6),
        new Ingredient('Teostra Mane', 4),
        new Ingredient('Goss Harag Bile', 1),
      ]),
    new Recipe(
      'Handicraft Jewel 3',
      'Extends the weapon sharpness gauge. However, it will not increase the gauge past its maximum.',
      'https://monsterhunterrise.wiki.fextralife.com/file/Monster-Hunter-Rise/handicraft_jewel_3-monster-hunter-rise-wiki-guide.png',
      [
        new Ingredient('Zenny', 4000),
        new Ingredient('Lazurite Jewel', 8),
        new Ingredient('Daora Dragon Scale+', 6),
        new Ingredient('Daora Horn+', 4),
        new Ingredient('Purple Magna Orb', 1),
      ]),

  ];

  /*private recipes: Recipe[] = [];*/

  constructor(private slService: ShoppingListService) {}

 setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
 }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

