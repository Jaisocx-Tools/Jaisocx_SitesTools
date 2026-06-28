# README about the Template For A Typescript Package
  > 💡 **README Example**: [./README_ts_example_2026_04_25.md](./README_ts_example_2026_04_25.md)



## Structure

- `package.json` conf for the ts|js|node packages repos, to install later from, with `yarn` or `npm`.
- `test/` automated tests for ts classes or functions of this package. Keeping in mind TDD))
  - `test/AnyClass.test.ts` tests with The Vitest Testing Framework, on the same-named ts class `AnyClass` in this package
- `src/` .ts files
  - `src/AnyClass.ts` a ts class example with a field, constructor(), get..() and set..() methods examples.
  - `src/AnyClassInterface.ts`
  - `src/index.ts` package's entry point for later imports in other ts packages in ts code as `import { AnyClass } from 'package-name;'`
- `README.md` this .md docs file



### Lodash

node_modules/lodash 1.4 MB

Very nice methods to work with the very base types of data in Javascript.

The Javascript remains to keep thin, and the lodash makes coding easier,
and when looking at methods availbale,
You can solve the coding tasks flow having got known,
whether what value can be calculated or obtained from the method call.



### Axios

2.24 MB

The library installed in several frameworks, with very nice methods for loading json.



### Chalk

0.04 MB

The new for me package, remaining in the net on top. Is for the colours in the console.

I didn't try, but I liked 3rd parties software, writing to console prettified and with effects.

Is installed in this project in the root.

For example, I'd use later either,
with the dynamic import, if installed,
and the `debug=true` was set in the config of the project or on a ts class instance.



## package.json

I don't use in my packages, due to the first feature of this project,
`trying not to rely on 3rd parties packages`,
however, in most projects and frameworks they are already pre-installed,
and that is why, normally, a software dev can code with these libs
without cost in addition for the aimed project.

I'd like to explain, the `not to rely on 3rd parties packages` I've set to me,
since I wanted to try to keep dependencies tree clean,
and as I see in this moment,
still the clean dependencies tree was not achieved))

I guess, that even the automation check-n-verify ts package
and the ts tests package is needed to solve this task.

Like, for sure, the aim that all tests work, unit and functional,
packages start in engineering by TDD,
all packages of my namespace have the latest ver. of deps,
package-lock.json code review did,
and thought through, whether .gitignored and have example_package.json and -lock.json,
have all infrastructure files like package-lock.json, README.md and others,
like set for this project, and confirm the best coding practices 2026,
token into account DRY, KISS, SOLID, TDD,
still for now remains a dream.



  ```ls
    1.6M	./node_modules/lodash/fp
    4.9M	./node_modules/lodash
    144.0K	./node_modules/@jaisocx/jpath
    1.2M	./node_modules/@jaisocx/tree
    380.0K	./node_modules/@jaisocx/preloader
    244.0K	./node_modules/@jaisocx/css_clean_start_lite
    208.0K	./node_modules/@jaisocx/media_tools_images_mini_datatypes_base
    276.0K	./node_modules/@jaisocx/theme-turn-on
    196.0K	./node_modules/@jaisocx/template-renderer
    7.9M	./node_modules/@jaisocx/media_tools_fonts_base
    276.0K	./node_modules/@jaisocx/responsive-sizes
    416.0K	./node_modules/@jaisocx/mime-type
    8.6M	./node_modules/@jaisocx/css-clean-start-2
    192.0K	./node_modules/@jaisocx/event-emitter
    368.0K	./node_modules/@jaisocx/media_tools_images_mini_mimetypes_base
    904.0K	./node_modules/@jaisocx/css-table
    288.0K	./node_modules/@jaisocx/media_tools_images_mini_freepic_kawaii
    420.0K	./node_modules/@jaisocx/media_tools_fonts_orbitron
    236.0K	./node_modules/@jaisocx/tokens-parser
    928.0K	./node_modules/@jaisocx/css-table-ordered
    476.0K	./node_modules/@jaisocx/css-code-snippet
    416.0K	./node_modules/@jaisocx/text
    23.9M	./node_modules/@jaisocx
    28.7M	./node_modules
    28.7M	total
  ```


