export class Service {
    
    repository = new Repository();

    constructor() {
    }

    get(index:number) : Animal{
        return this.repository.list[index];
    }

    put(animal: Animal) : number {
        return this.repository.list.push(animal);
    }

    deleteFirst() : Animal {
        return this.repository.list.shift()!;
    }

    deleteLast() : Animal {
        return this.repository.list.pop()!;
    }
}



