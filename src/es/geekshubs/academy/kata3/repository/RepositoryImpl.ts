import { Animal } from "../model/animal/Animal";
import { AnimalImpl } from "../model/animal/AnimalImpl";
import { HorseImpl } from "../model/horse/HoreImpl";
import { SnakeImpl } from "../model/snake/SnakeImpl";
import { Repository } from "./Repository";

export class RepositoryImpl implements Repository {

    constructor(public list: Array<Animal>) {}

    getList() : Array<Animal> {
        return this.list;
    }
}