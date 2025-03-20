public class DataTypeExample {
    public static void main(String[] args) {
        // This is primitive data type
        int a = 10;
        int b = a; // here we copy the value
        b = 20;
        System.out.println("Primitive: a = " + a + ", b = " + b);

        // reference data type
        int[] arr1 = {1, 2, 3};
        int[] arr2 = arr1; // here we copy the reference
        arr2[0] = 10;
        System.out.println("Reference: arr1[0] = " + arr1[0]);
    }
}
