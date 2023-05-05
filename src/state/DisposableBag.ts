export interface Disposable {
  dispose: () => void;
}

export type Dispose = Disposable | (() => void);

export class DisposeBag implements Disposable {
  private disposable: Dispose[] = [];

  public addDisposable<T extends Dispose>(element: T): T {
    this.disposable.push(element);
    return element;
  }

  public addDisposables<T extends Dispose>(elements: ReadonlyArray<T>): void {
    this.disposable.push(...elements);
  }

  public removeDisposable<T extends Dispose>(element: T): void {
    const index = this.disposable.indexOf(element);
    if (index > -1) {
      this.disposable.splice(index, 1);
    }
  }

  public dispose = (): void => {
    const currentDisposables = this.disposable;
    this.disposable = [];
    for (const disposable of currentDisposables) {
      if ("dispose" in disposable) {
        disposable?.dispose();
      } else {
        disposable?.();
      }
    }
  };
}
