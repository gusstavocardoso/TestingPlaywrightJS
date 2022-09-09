const { test, expect } = require("@playwright/test");
const config = require("../playwright.config");
import Login from "../src/pages/LoginPage";
import Product from "../src/pages/ProductPage";
import Cart from "../src/pages/CartPage";
import Confirmation from "../src/pages/ConfirmationPage";
import Order from "../src/pages/OrderPage";

test.describe("Playwright End-to-end Testing", () => {
  let login;
  let product;
  let cart;
  let confirmation;
  let order;

  test.beforeEach(async ({ page }) => {
    await page.goto(config.use.baseURL);
    login = new Login(page);
    product = new Product(page);
    cart = new Cart(page);
    confirmation = new Confirmation(page);
    order = new Order(page);
  });

  test("Should complete a purchase order", async ({ page }) => {
    await expect(page).toHaveTitle("Swag Labs");
    await login.user("standard_user", "secret_sauce");

    expect(await product.productPage()).toContainText("Products");
    await product.add();

    await cart.iconCart();
    expect(await cart.cartPage()).toContainText("Your Cart");

    await cart.tocheckoutConfirmation();
    expect(await confirmation.confirmationPage()).toContainText(
      "Checkout: Your Information"
    );
    await confirmation.toFinishOrder("John", "Petrucci", "14680000");

    expect(await order.resumeOrderPage()).toContainText("Checkout: Overview");
    await order.finish();

    expect(await order.finishOrderPage()).toContainText("Checkout: Complete!");
  });
});
