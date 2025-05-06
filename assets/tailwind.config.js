// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

import plugin from "tailwindcss/plugin";
import { readdirSync, readFileSync } from "fs";
import { join, basename } from "path";

export const content = [
  "./js/**/*.js",
  "../lib/gelixir_web.ex",
  "../lib/gelixir_web/**/*.*ex",
];
export const theme = {
  extend: {
    colors: {
      emDark: {
        dark: "#010101",
        DEFAULT: "#3C3B3B",
        light: "#828282",
      },
      emPurple: {
        dark: "#631A61",
        DEFAULT: "#834A5",
        light: "#E88FE5",
      },
      emLavender: {
        dark: "#8C52FF",
        DEFAULT: "#9D74EE",
        light: "#BC9AFF",
      },
    },
    fontFamily: {
      brand: ["WorkSans", "sans-serif"],
    },
    fontWeight: {
      regular: "normal",
      bold: "bold",
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  // Allows prefixing tailwind classes with LiveView classes to add rules
  // only when LiveView classes are applied, for example:
  //
  //     <div class="phx-click-loading:animate-ping">
  //
  plugin(({ addVariant }) =>
    addVariant("phx-click-loading", [
      ".phx-click-loading&",
      ".phx-click-loading &",
    ]),
  ),
  plugin(({ addVariant }) =>
    addVariant("phx-submit-loading", [
      ".phx-submit-loading&",
      ".phx-submit-loading &",
    ]),
  ),
  plugin(({ addVariant }) =>
    addVariant("phx-change-loading", [
      ".phx-change-loading&",
      ".phx-change-loading &",
    ]),
  ),

  // Embeds Heroicons (https://heroicons.com) into your app.css bundle
  // See your `CoreComponents.icon/1` for more information.
  //
  plugin(function ({ matchComponents, theme }) {
    let iconsDir = join(__dirname, "../deps/heroicons/optimized");
    let values = {};
    let icons = [
      ["", "/24/outline"],
      ["-solid", "/24/solid"],
      ["-mini", "/20/solid"],
      ["-micro", "/16/solid"],
    ];
    icons.forEach(([suffix, dir]) => {
      readdirSync(join(iconsDir, dir)).forEach((file) => {
        let name = basename(file, ".svg") + suffix;
        values[name] = { name, fullPath: join(iconsDir, dir, file) };
      });
    });
    matchComponents(
      {
        hero: ({ name, fullPath }) => {
          let content = readFileSync(fullPath)
            .toString()
            .replace(/\r?\n|\r/g, "");
          let size = theme("spacing.6");
          if (name.endsWith("-mini")) {
            size = theme("spacing.5");
          } else if (name.endsWith("-micro")) {
            size = theme("spacing.4");
          }
          return {
            [`--hero-${name}`]: `url('data:image/svg+xml;utf8,${content}')`,
            "-webkit-mask": `var(--hero-${name})`,
            mask: `var(--hero-${name})`,
            "mask-repeat": "no-repeat",
            "background-color": "currentColor",
            "vertical-align": "middle",
            display: "inline-block",
            width: size,
            height: size,
          };
        },
      },
      { values },
    );
  }),
];
