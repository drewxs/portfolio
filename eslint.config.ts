import { FlatCompat } from "@eslint/eslintrc";
import { Linter } from "eslint";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

const config: Linter.Config[] = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["src/client"],
  },
];

export default config;
