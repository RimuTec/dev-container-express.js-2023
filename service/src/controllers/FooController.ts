import { Controller, Get, Route } from "tsoa";

@Route('foo')
export class FooController extends Controller {
   @Get()
   public async get(): Promise<string> {
      return `Hello, world! It's now ${Date.now().toLocaleString()}`;
   }
}
