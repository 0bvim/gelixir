defmodule GelixirWeb.PageController do
  use GelixirWeb, :controller

  def home(conn, _params) do
    redirect(conn, to: "/create")
  end
end
