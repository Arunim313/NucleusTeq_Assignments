import java.util.Scanner;
public class AreaCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Choose a shape (circle, rectangle, triangle): ");
        String shape = sc.next().toLowerCase();
        switch (shape) {
            case "circle":
                System.out.print("Enter the radius: ");
                double radius = sc.nextDouble();
                System.out.println("Area of Circle: " + (Math.PI * radius * radius));
                break;
            case "rectangle":
                System.out.print("Enter length and width: ");
                double length = sc.nextDouble();
                double width = sc.nextDouble();
                System.out.println("Area of Rectangle: " + (length * width));
                break;
            case "triangle":
                System.out.print("Enter base and height: ");
                double base = sc.nextDouble();
                double height = sc.nextDouble();
                System.out.println("Area of Triangle: " + (0.5 * base * height));
                break;
            default:
                System.out.println("Invalid shape!");
        }
        sc.close();
    }
}