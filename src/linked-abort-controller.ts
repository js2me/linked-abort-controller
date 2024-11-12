export class LinkedAbortController extends AbortController {
  constructor(outerAbortSignal?: AbortSignal) {
    super();
    outerAbortSignal?.addEventListener('abort', () => {
      this.abort(outerAbortSignal.reason);
    });
  }
}
