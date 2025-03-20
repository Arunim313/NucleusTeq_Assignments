class Parent {
    void show(int a) {
        System.out.println("Parent class method with int: " + a);
    }
}

class Child extends Parent {
    // Overloading the method with a different parameter type
    void show(double a) {
        System.out.println("Child class method with double: " + a);
    }
    // Overriding the method from the parent class
    @Override
    void show(int a) {
        System.out.println("Overridden method in Child with int: " + a);
    }
}
public class Polymorphism {
    public static void main(String[] args) {
        Parent p = new Parent();
        p.show(10);
        Child c = new Child();
        c.show(20);
        c.show(15.5);

        Parent pc = new Child();
        pc.show(30);
    }
}
