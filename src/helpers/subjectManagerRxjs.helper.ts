import { Subject } from "rxjs";

export class SubjectManager {
  private subject = new Subject();

  getSubject() {
    return this.subject.asObservable();
  }

  setSubject(value: any) {
    this.subject.next(value);
  }
}
