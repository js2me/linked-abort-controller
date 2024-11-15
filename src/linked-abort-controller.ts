export class LinkedAbortController extends AbortController {
  constructor(...outerAbortSignals: (AbortSignal | undefined)[]) {
    super();
    outerAbortSignals.forEach((outerAbortSignal) => {
      outerAbortSignal?.addEventListener('abort', () => {
        this.abort(outerAbortSignal.reason);
      });
    });
  }
}
