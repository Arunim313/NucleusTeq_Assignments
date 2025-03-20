// Parent class = Student
class Student {
    String name;
    int rollNumber;
    double marks;

    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }
 
    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}

// Child class: GraduateStudent (inherits from Student)
class GraduateStudent extends Student {
    String researchTopic;
    public GraduateStudent(String name, int rollNumber, double marks, String researchTopic) {
        super(name, rollNumber, marks);
        this.researchTopic = researchTopic;
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Research Topic: " + researchTopic);
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Student s1 = new Student("Sarthak", 101, 89.5);
        System.out.println("Student Details:");
        s1.display();

        System.out.println("\nGraduate Student Details:");
        GraduateStudent g1 = new GraduateStudent("Arunim", 102, 92.3, "Machine Learning");
        g1.display();
    }
}
