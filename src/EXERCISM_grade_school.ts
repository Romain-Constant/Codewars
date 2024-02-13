//class

export class GradeSchool {
  private _roster: Record<string, string[]> = {};
  roster(): Record<string, string[]> {
    return this.deepCopy(this._roster);
  }

  add(studentName: string, grade: number): void {
    const gradeStr = grade.toString();

    this.removeStudentFromAllGrades(studentName);

    if (!this._roster[gradeStr]) {
      this._roster[gradeStr] = [];
    }

    this._roster[gradeStr].push(studentName);
    this._roster[gradeStr].sort();
  }

  grade(grade: number): string[] {
    return this.deepCopy(this._roster[grade.toString()] || []);
  }

  private removeStudentFromAllGrades(studentName: string): void {
    Object.values(this._roster).forEach((students) => {
      const index = students.indexOf(studentName);
      if (index !== -1) {
        students.splice(index, 1);
      }
    });
  }

  private deepCopy(object: any): any {
    return JSON.parse(JSON.stringify(object));
  }
}
