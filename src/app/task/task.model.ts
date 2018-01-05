export class Task {
  title: string;
  isReady: boolean;

  constructor(title: string, isReady?: boolean) {
    this.title = title;
    this.isReady = isReady || false;
  }
}
