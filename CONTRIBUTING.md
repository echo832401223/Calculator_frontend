# Frontend Code Standards
This document defines the coding specifications for HTML, CSS and JavaScript in the calculator web frontend.

## 1. HTML Rules
1. Use lowercase for all HTML tag names and attribute names.
2. Wrap attribute values with double quotes.
3. Use 2 spaces for indentation, do not use tab characters.
4. Use semantic structure. Add `aria-label` for interactive buttons to support web accessibility.
5. Keep HTML structure clean; separate structure, style and script.
6. Avoid inline style as much as possible.

## 2. CSS Rules
1. Use 2 spaces for indentation.
2. Use meaningful class names in kebab-case (e.g. `history-item`).
3. Avoid overly nested CSS selectors.
4. Set box-sizing for global layout to simplify element size calculation.

## 3. JavaScript Rules
1. Use camelCase for variables, functions and object properties.
2. Use `const` / `let` instead of `var`.
3. Function names should describe their behavior clearly (e.g. `appendNum`, `calcEqual`).
4. Split code into small single-responsibility functions: input handling, request, history loading.
5. Use `async / await` for asynchronous fetch requests.
6. Add `try-catch` blocks to handle network exceptions.
7. Minimize global variables. Use state flags such as `isCalculated` to manage calculator status.
8. Add comments for complex business logic.
9. End statements with semicolons.

## 4. Git Commit Rules for Frontend
- `feat: add calculator button logic`
- `fix: fix repeated equal button click bug`
- `docs: update frontend comments`
- `refactor: reorganize js functions`
