public class Operators {
    public static void main(String[] args) {
        int a = 10, b = 5;
        
        // Arithmetic Operators
        System.out.println("Arithmetic Operators:");
        System.out.println("Sum: " + (a + b));
        System.out.println("Difference: " + (a - b));
        System.out.println("Product: " + (a * b));
        System.out.println("Quotient: " + (a / b));
        System.out.println("Remainder: " + (a % b));

        // Relational Operators
        System.out.println("\nRelational Operators:");
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("a >= b: " + (a >= b));
        System.out.println("a <= b: " + (a <= b));

        // Logical Operators
        boolean x = true, y = false;
        System.out.println("\nLogical Operators:");
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));

        // Bitwise Operators
        System.out.println("\nBitwise Operators:");
        System.out.println("a & b: " + (a & b));
        System.out.println("a | b: " + (a | b));
        System.out.println("a ^ b: " + (a ^ b));
        System.out.println("~a: " + (~a));
        System.out.println("b << 1: " + (b << 1));
        System.out.println("b >> 1: " + (b >> 1));

        // Assignment Operators
        System.out.println("\nAssignment Operators:");
        int c = 10;
        c += 5;
        System.out.println("c += 5: " + c);
        c -= 3;
        System.out.println("c -= 3: " + c);
        c *= 2;
        System.out.println("c *= 2: " + c);
        c /= 4;
        System.out.println("c /= 4: " + c);
        c %= 3;
        System.out.println("c %= 3: " + c);

        // Unary Operators
        int d = 5;
        System.out.println("\nUnary Operators:");
        System.out.println("++d: " + (++d));
        System.out.println("d++: " + (d++));
        System.out.println("d after post-increment: " + d);
        System.out.println("--d: " + (--d));
        System.out.println("d--: " + (d--));
        System.out.println("d after post-decrement: " + d);

        // Ternary Operator
        System.out.println("\nTernary Operator:");
        int min = (a < b) ? a : b;
        System.out.println("Smaller number: " + min);
    }
}
