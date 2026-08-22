// Next.js solo declara "*.module.css"; los imports globales con efecto secundario
// (import "../globals.css") necesitan esta declaracion para TS con
// noUncheckedSideEffectImports (TS2882).
declare module "*.css";
