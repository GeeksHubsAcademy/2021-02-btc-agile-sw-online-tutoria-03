import { RepositoryImpl } from './../src/es/geekshubs/academy/kata3/repository/RepositoryImpl';
import { Repository } from './../src/es/geekshubs/academy/kata3/repository/Repository';
import { Animal } from "../src/es/geekshubs/academy/kata3/model/animal/Animal";
import { AnimalImpl } from "../src/es/geekshubs/academy/kata3/model/animal/AnimalImpl";
import { HorseImpl } from "../src/es/geekshubs/academy/kata3/model/horse/HoreImpl";
import { Horse } from "../src/es/geekshubs/academy/kata3/model/horse/Horse";
import { Snake } from "../src/es/geekshubs/academy/kata3/model/snake/Snake";
import { SnakeImpl } from "../src/es/geekshubs/academy/kata3/model/snake/SnakeImpl";
import { Builder } from '../src/es/geekshubs/academy/kata3/bulider/Builder';

describe('Testing', function (){

    test('Animal src name', function () {
        //Arrange
        var expected = "Animal-1";
        //Act
        var result = new AnimalImpl("Animal-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Animal api name', function () {
        //Arrange
        var expected = "Animal-1";
        //Act
        var result : Animal = new AnimalImpl("Animal-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Horse src name', function () {
        //Arrange
        var expected = "Horse-1";
        //Act
        var result = new HorseImpl("Horse-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Horse api name', function () {
        //Arrange
        var expected = "Galloping...Horse-1 moved 45m.";
        //Act
        var result : Horse = new HorseImpl("Horse-1");
        //Assert
        expect(result.move()).toBe(expected);
    });

    test('Snake src name', function () {
        //Arrange
        var expected = "Snake-1";
        //Act
        var result = new SnakeImpl("Snake-1");
        //Assert
        expect(result.getName()).toBe(expected);
    });

    test('Snake api name', function () {
        //Arrange
        var expected = "Slithering...Snake-1 moved 30m.";
        //Act
        var result: Snake = new SnakeImpl("Snake-1");
        //Assert
        expect(result.move()).toBe(expected);
    });


    test('Repository api getList', function () {
        //Arrange
        var expected = new Builder().list;
        //Act
        var result : Repository  = new RepositoryImpl(new Builder().list);
        //Assert
        expect(result.getList()).toEqual(expected);
    });


});
