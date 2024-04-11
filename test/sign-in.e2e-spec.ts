import { expect, test } from "@playwright/test";

test("sign in successfully", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" }); // aguarda que todas requisições do javascript sejam finalizadas

  await page.getByLabel("Seu e-mail").fill("johndoe@example.com"); // preencher um campo
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText(
    "Enviamos um link de autenticação para seu e-mail",
  );

  await expect(toast).toBeVisible();
});

test("sign in with wrong credentials", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("wrong@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Credenciais inválidas.");

  await expect(toast).toBeVisible();
  //   await page.waitForTimeout(2000) caso nao consiga ver o toast no final da tame line
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo estabelecimento" }).click();

  expect(page.url()).toContain("/sign-up");
});
