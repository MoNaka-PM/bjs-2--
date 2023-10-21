function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const student1 = new Student("Maya", "Женский", 23);
const student2 = new Student("Alex", "Мужской", 27);
const student3 = new Student("Ivan", "Мужской", 21);


Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
   if (this.marks !== undefined) {
      if (Array.isArray(marks)) {
        this.marks = this.marks.concat(marks);
      } else {
        console.log("Оценки должны быть представлены в виде массива.");
      }
    } else {
      console.log("Студент отчислен и не имеет доступ к добавлению оценок.");
    }
}

Student.prototype.getAverage = function () {
   if (!this.marks || this.marks.length === 0) {
      return 0;
    }
    const sum = this.marks.reduce((total, mark) => total + mark, 0);
    return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
   delete this.subject;
   delete this.marks;
   this.excluded = reason;
}
