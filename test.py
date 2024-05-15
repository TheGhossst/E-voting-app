class Student:
    global d
    d = {}

    def __init__(self):
        self.name = ""
        self.marks = []

    def insert(self, name, marks):
        self.name = name
        self.marks = marks
        if self.name not in d.keys():
            d[self.name] = self.marks
            print("\nStudent added successfully.")
        else:
            print("\nStudent with the name already exists")

    def max_marks(self):
        max_marks = 0
        max_name = ""
        for name, marks in d.items():
            total_marks = sum(marks)
            if total_marks > max_marks:
                max_marks = total_marks
                max_name = name
        print(f"The student with the highest marks is {max_name} with a total of {max_marks} marks.")

if __name__ == "__main__":
    while True:
        print("\nStudent System\n...............\n")
        print("1. Add new students")
        print("2. Display student with highest marks")
        print("3. Exit")
        choice = int(input("Enter your choice: "))

        if choice == 1:
            name = input("Enter the student's name: ")
            num_subjects = int(input("Enter the number of subjects: "))
            marks = []
            for i in range(num_subjects):
                mark = int(input(f"Enter mark for subject {i+1}: "))
                marks.append(mark)
            student = Student()
            student.insert(name, marks)

        elif choice == 2:
            student = Student()
            student.max_marks()

        elif choice == 3:
            print("Exiting...")
            break

        else:
            print("Invalid choice!")