// Abstract Class Example
abstract class Vehicle {
    abstract void start();
}
class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car starts with a key");
    }
}

// Interface Example
interface Animal {
    void makeSound();
}
class Cat implements Animal {
    public void makeSound() {
        System.out.println("Meow Meow");
    }
}

public class Abstraction {
    public static void main(String[] args) {
        Vehicle myCar = new Car();
        myCar.start();
        
        Animal myCat = new Cat();
        myCat.makeSound();
    }
}
