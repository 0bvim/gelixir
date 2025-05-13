# Gelixir

### Before run project:
  * Install Elixir 1.14.0 or later
  * Install Node.js 18.0.0 or later
  * Install PostgreSQL 15.0 or later
  * Install GNU Make 4.x (sudo apt-get install make)
  * Create a PostgreSQL database named `gelixir_dev` and a user named `gelixir` with password `gelixir` (the database step can be done with `make star_db` command)
  * Run `mix deps.get` to install dependencies
  * Run `npm install --prefix assets` to install JavaScript dependencies
  * Run `mix ecto.setup` to create and migrate the database

### To run project:

  * Run `mix setup` to install and setup dependencies
  * Start Phoenix endpoint with `mix phx.server` or inside IEx with `iex -S mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix
