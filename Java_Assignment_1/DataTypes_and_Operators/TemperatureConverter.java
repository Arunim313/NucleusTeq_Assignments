import java.util.Scanner;

public class TemperatureConverter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Choose conversion: 1. Celsius to Fahrenheit  2. Fahrenheit to Celsius");
        int choice = sc.nextInt();

        if (choice == 1) {
            System.out.print("Enter temperature in Celsius: ");
            double celsius = sc.nextDouble();
            System.out.println("Fahrenheit: " + ((celsius * 9 / 5) + 32));
        } else if (choice == 2) {
            System.out.print("Enter temperature in Fahrenheit: ");
            double fahrenheit = sc.nextDouble();
            System.out.println("Celsius: " + ((fahrenheit - 32) * 5 / 9));
        } else {
            System.out.println("Invalid choice.");
        }
        sc.close();
    }
}
