public class VowelCounter {
    public static int countVowels(String str) {
        int count = 0;
        str = str.toLowerCase();
        for (char c : str.toCharArray()) {
            if ("aeiou".indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String str = "ArunIM MalvIya";
        System.out.println("Number of vowels: " + countVowels(str));
    }
}
