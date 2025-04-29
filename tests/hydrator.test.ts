import { describe, expect, it } from "vitest";
import { Hydrator } from "../src/hydrator";

class User extends Hydrator<User> {
  constructor(model?: Partial<User>) {
    super(model);
  }
  id: number;
  name: string;
}


class Order extends Hydrator<Order> {
  constructor(model?: Partial<Order>) {
    super(model);
    if (model?.user) model.user = new User(model.user);
  }
  id: number;
  user: User;
}

const userData = {
  id: 1,
  name: 'John Doe'
};

const orderData = {
  id: 2,
  user: userData
};

describe('Hydrator', () => {
  it('should hydrate simple object', () => {
    const user = new User(userData);

    expect(user).toBeDefined();
    expect(user.id).toBe(userData.id);
    expect(user.name).toBe(userData.name);
  });

  it('should hydrate nested objects', () => {
    const order = new Order(orderData);

    expect(order).toBeDefined();
    expect(order.user.id).toBe(userData.id);
    expect(order.user.name).toBe(userData.name);
  });
});