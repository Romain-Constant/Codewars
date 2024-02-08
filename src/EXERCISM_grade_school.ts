export class GradeSchool {
  private _roster: Record<string, string[]> = {};
  roster() {
    // Il est important de retourner une copie profonde de l'objet _roster
    // pour éviter sa modification en dehors de la classe.
    return JSON.parse(JSON.stringify(this._roster));
  }

  add(studentName: string, studentGrade: number) {
    const grade = studentGrade.toString();
    if (this._roster.hasOwnProperty(grade)) {
      if (!this._roster[grade].includes(studentName)) {
        this._roster[grade].push(studentName);
        this._roster[grade].sort();
      }
    } else {
      this._roster[grade] = [studentName];
    }
  }
  grade(grade: number) {
    const gradeToString = grade.toString();
    if (!this._roster[gradeToString]) {
      return [];
    } else {
      return this._roster[gradeToString];
    }
  }
}
