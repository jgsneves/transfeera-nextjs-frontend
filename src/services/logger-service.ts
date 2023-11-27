export class LoggerService {
  public static log(payload: any) {
    console.log({
      timestamp: new Date().toISOString(),
      payload,
    });
  }
}
