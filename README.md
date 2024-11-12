# LinkedAbortController    

```ts
export class WithAbortController {
  protected abortController: AbortController;
  protected abortSignal: AbortSignal;

  protected constructor(abortSignal?: AbortSignal) {
    this.abortController = new AbortController();
    this.abortSignal = this.abortController.signal;

    if (abortSignal) {
      abortSignal.addEventListener('abort', () =>
        this.abortController.abort(abortSignal.reason),
      );
    }
  }
}
```
