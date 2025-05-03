defmodule Gelixir.Repo do
  use Ecto.Repo,
    otp_app: :gelixir,
    adapter: Ecto.Adapters.Postgres
end
