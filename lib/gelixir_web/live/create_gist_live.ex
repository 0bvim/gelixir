defmodule GelixirWeb.CreateGistLive do
  use GelixirWeb, :live_view
  import Phoenix.Component
  alias Gelixir.{Gists, Gists.Gist}

  def mount(_params, _session, socket) do
    socket =
      assign(
        socket,
        form: to_form(Gists.change_gist(%Gist{}))
      )

    {:ok, socket}
  end
end
