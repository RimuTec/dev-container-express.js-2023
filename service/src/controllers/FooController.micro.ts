import { FooController } from "./FooController";

describe(`FooController micro tests`, () => {
   it(`should return hello world`, async () => {
      const controller = new FooController();
      const result = await controller.get();
      const prefix = result.substring(0, `Hello, world!`.length);
      expect(prefix).toBe("Hello, world!");
   });
});
