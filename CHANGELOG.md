# Changelog

> All notable changes to this project will be documented in this file. See
> [standard-version](https://github.com/conventional-changelog/standard-version) for commit
> guidelines.

<a name="2.0.0-rc.26"></a>

## [v2.0.0-rc.26](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.25...v2.0.0-rc.26)

Released 2019-07-09

### Bug Fixes v2.0.0-rc.26

- **b-collapse:** fix memory leak from `$root` listener (fixes
  [#3607](https://github.com/bootstrap-vue/bootstrap-vue/issues/3607))
  ([#3608](https://github.com/bootstrap-vue/bootstrap-vue/issues/3608))
  ([10cb3a9](https://github.com/bootstrap-vue/bootstrap-vue/commit/10cb3a9))
- **b-carousel-slide**: do not render `carousel-caption` wrapper if no content
  ([#3662](https://github.com/bootstrap-vue/bootstrap-vue/issues/3662))
  ([615a719](https://github.com/bootstrap-vue/bootstrap-vue/commit/615a719))
- **b-table:** add clearfix to table cells in case label wraps in stacked mode
  ([#3652](https://github.com/bootstrap-vue/bootstrap-vue/issues/3652))
  ([3115dae](https://github.com/bootstrap-vue/bootstrap-vue/commit/3115dae))
- **docs:** correct polyfilling suggestions
  ([#3605](https://github.com/bootstrap-vue/bootstrap-vue/issues/3605))
  ([35806e7](https://github.com/bootstrap-vue/bootstrap-vue/commit/35806e7))
- **playground:** fix undefined variable error in IE 11
  ([#3606](https://github.com/bootstrap-vue/bootstrap-vue/issues/3606))
  ([b3f7053](https://github.com/bootstrap-vue/bootstrap-vue/commit/b3f7053))

### Features v2.0.0-rc.26

- **b-dropdown, b-nav-item-dropdown:** add new lazy prop (addresses
  [#3634](https://github.com/bootstrap-vue/bootstrap-vue/issues/3634))
  ([#3639](https://github.com/bootstrap-vue/bootstrap-vue/issues/3639))
  ([f742a8a](https://github.com/bootstrap-vue/bootstrap-vue/commit/f742a8a))
- **tooltip, popover:** add support for contextual variants and custom class (closes
  [#1983](https://github.com/bootstrap-vue/bootstrap-vue/issues/1983),
  [#2075](https://github.com/bootstrap-vue/bootstrap-vue/issues/2075))
  ([#3644](https://github.com/bootstrap-vue/bootstrap-vue/issues/3644))
  ([695edae](https://github.com/bootstrap-vue/bootstrap-vue/commit/695edae))
- **tooltip:** add in SCSS support for specifying tooltip variant background color level
  ([#3653](https://github.com/bootstrap-vue/bootstrap-vue/issues/3653))
  ([d7cb071](https://github.com/bootstrap-vue/bootstrap-vue/commit/d7cb071))
- **docs:** add home and playground links to sidebar navigation
  ([#3654](https://github.com/bootstrap-vue/bootstrap-vue/issues/3654))
  ([e5eb9fc](https://github.com/bootstrap-vue/bootstrap-vue/commit/e5eb9fc))
- **types:** add `noCloseButton` property to `BvToastOptions` type declaration
  ([#3636](https://github.com/bootstrap-vue/bootstrap-vue/issues/3636))
  ([5aa9211](https://github.com/bootstrap-vue/bootstrap-vue/commit/5aa9211))

### Performance v2.0.0-rc.26

- **b-link**: convert from functional component to regular component
  ([#3637](https://github.com/bootstrap-vue/bootstrap-vue/issues/3637))
  ([d3641ba](https://github.com/bootstrap-vue/bootstrap-vue/commit/d3641ba))
- remove default array and object polyfills
  ([#3641](https://github.com/bootstrap-vue/bootstrap-vue/issues/3641))
  ([8b34bf2](https://github.com/bootstrap-vue/bootstrap-vue/commit/8b34bf2))

### Notes v2.0.0-rc.26

Users should switch to the simplified import syntax (introduced in `v2.0.0-rc.22`) when importing
individual plugins, components, and/or directives. **Importing from the `es/` build directory has
been deprecated and will be removed in 2.0.0 stable release!**

<a name="2.0.0-rc.25"></a>

## [v2.0.0-rc.25](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.24...v2.0.0-rc.25)

Released 2019-06-30

### Bug Fixes v2.0.0-rc.25

- **b-input-group:** fix kebab-case prop names for `prepend-html` and `append-html` (fixes
  [#3565](https://github.com/bootstrap-vue/bootstrap-vue/issues/3565))
  ([#3567](https://github.com/bootstrap-vue/bootstrap-vue/issues/3567)
  [e48d3dc](https://github.com/bootstrap-vue/bootstrap-vue/commit/e48d3dc))
- **b-table:** adjustments to sort icon positioning SCSS (closes
  [#3563](https://github.com/bootstrap-vue/bootstrap-vue/issues/3563))
  ([#3568](https://github.com/bootstrap-vue/bootstrap-vue/issues/3568)
  [5c572e8](https://github.com/bootstrap-vue/bootstrap-vue/commit/5c572e8))

### Features v2.0.0-rc.25

- **b-table:** sort fields by formatted value for fields that have a formatter function + support
  for optional `localCompare` options and locale (closes
  [#3178](https://github.com/bootstrap-vue/bootstrap-vue/issues/3178),
  [#1173](https://github.com/bootstrap-vue/bootstrap-vue/issues/1173))
  ([#3585](https://github.com/bootstrap-vue/bootstrap-vue/issues/3585)
  [c0ca1fd](https://github.com/bootstrap-vue/bootstrap-vue/commit/c0ca1fd))
- **b-table, b-table-lite:** don't render `thead` or `tfoot` if no detected fields for accessibility
  reasons (closes [#3547](https://github.com/bootstrap-vue/bootstrap-vue/issues/3547))
  ([#3553](https://github.com/bootstrap-vue/bootstrap-vue/issues/3553)
  [a924889](https://github.com/bootstrap-vue/bootstrap-vue/commit/a924889))
- **b-tabs:** emit new `changed` event whenever tabs are added, removed or re-ordered (closes
  [#3575](https://github.com/bootstrap-vue/bootstrap-vue/issues/3575))
  ([#3577](https://github.com/bootstrap-vue/bootstrap-vue/issues/3577)
  [841419a](https://github.com/bootstrap-vue/bootstrap-vue/commit/841419a))
- **tooltips, popovers:** remove need for route watcher, preventing open tooltip/popover from
  automatically closing if child route changes and trigger element is still in document
  ([#3583](https://github.com/bootstrap-vue/bootstrap-vue/issues/3583)
  [98844b4](https://github.com/bootstrap-vue/bootstrap-vue/commit/98844b4))

### Notes v2.0.0-rc.25

Users should switch to the simplified import syntax (introduced in `v2.0.0-rc.22`) when importing
individual plugins, components, and/or directives. **Importing from the `es/` build directory has
been deprecated and will be removed in 2.0.0 stable release.**

<a name="2.0.0-rc.24"></a>

## [v2.0.0-rc.24](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.23...v2.0.0-rc.24)

Released 2019-06-17

### Bug Fixes v2.0.0-rc.24

- **b-table:** ensure `ctx.sortBy` is an empty string when no sort key specified (closes
  [#3532](https://github.com/bootstrap-vue/bootstrap-vue/issues/3532))
  ([#3534](https://github.com/bootstrap-vue/bootstrap-vue/issues/3534)
  [d451687](https://github.com/bootstrap-vue/bootstrap-vue/commit/d451687))
- **b-table-lite:** add checks to helper mixins for existence of `stopIfBusy` (fixes
  [#3518](https://github.com/bootstrap-vue/bootstrap-vue/issues/3518))
  ([#3520](https://github.com/bootstrap-vue/bootstrap-vue/issues/3520))
  ([285cf94](https://github.com/bootstrap-vue/bootstrap-vue/commit/285cf94))
- **b-tabs:** add detection of when registered tabs change order (closes
  [#3506](https://github.com/bootstrap-vue/bootstrap-vue/issues/3506))
  ([#3513](https://github.com/bootstrap-vue/bootstrap-vue/issues/3513)
  [130f8ff](https://github.com/bootstrap-vue/bootstrap-vue/commit/130f8ff),
  [#3537](https://github.com/bootstrap-vue/bootstrap-vue/issues/3537)
  [b80b2b4](https://github.com/bootstrap-vue/bootstrap-vue/commit/b80b2b4))
- **config:** avoid using `of` operator (closes
  [#3525](https://github.com/bootstrap-vue/bootstrap-vue/issues/3525))
  ([#3526](https://github.com/bootstrap-vue/bootstrap-vue/issues/3526)
  [17ec8d0](https://github.com/bootstrap-vue/bootstrap-vue/commit/17ec8d0))
- **nuxt module:** correct `transformAssetUrls` value for `b-card-img` (fixes
  [#3521](https://github.com/bootstrap-vue/bootstrap-vue/issues/3521))
  ([#3523](https://github.com/bootstrap-vue/bootstrap-vue/issues/3523)
  [db8c6fd](https://github.com/bootstrap-vue/bootstrap-vue/commit/db8c6fd))

<a name="2.0.0-rc.23"></a>

## [v2.0.0-rc.23](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.22...v2.0.0-rc.23)

Released 2019-06-13

### Bug Fixes v2.0.0-rc.23

- **b-dropdown:** close when clicking on nested elements inside items with `to` prop
  ([#3476](https://github.com/bootstrap-vue/bootstrap-vue/issues/3476)
  [8ec2eb1](https://github.com/bootstrap-vue/bootstrap-vue/commit/8ec2eb1))
- **b-form-input, b-form-textarea:** handle case where input has been removed from document (closes
  [#3498](https://github.com/bootstrap-vue/bootstrap-vue/issues/3498))
  ([#3501](https://github.com/bootstrap-vue/bootstrap-vue/issues/3501)
  [9a62e44](https://github.com/bootstrap-vue/bootstrap-vue/commit/9a62e44))
- **b-modal:** ensure `ignoreBackdropClick` flag is cleared in `clickOutHandler`
  ([#3488](https://github.com/bootstrap-vue/bootstrap-vue/issues/3488)
  [afb4680](https://github.com/bootstrap-vue/bootstrap-vue/commit/afb4680))
- **b-modal:** fix IE11 issue with copy/paste from modal into MS Word (fixes
  [#3457](https://github.com/bootstrap-vue/bootstrap-vue/issues/3457))
  ([#3489](https://github.com/bootstrap-vue/bootstrap-vue/issues/3489)
  [16dbdf1](https://github.com/bootstrap-vue/bootstrap-vue/commit/16dbdf1))
- **b-modal:** properly render `*-html` props if provided (closes
  [#3491](https://github.com/bootstrap-vue/bootstrap-vue/issues/3491))
  ([#3492](https://github.com/bootstrap-vue/bootstrap-vue/issues/3492)
  [c1ada9f](https://github.com/bootstrap-vue/bootstrap-vue/commit/c1ada9f))
- **b-pagination-nav:** fix incorrect name in component package.json file (closes
  [#3458](https://github.com/bootstrap-vue/bootstrap-vue/issues/3458))
  ([#3459](https://github.com/bootstrap-vue/bootstrap-vue/issues/3459)
  [ef252df](https://github.com/bootstrap-vue/bootstrap-vue/commit/ef252df))
- **b-pagination-nav:** attempt to auto-detect current page when `pages` array or `number of pages`
  changes (closes [#3443](https://github.com/bootstrap-vue/bootstrap-vue/issues/3443))
  ([#3444](https://github.com/bootstrap-vue/bootstrap-vue/issues/3444)
  [88b95c6](https://github.com/bootstrap-vue/bootstrap-vue/commit/88b95c6))
- **b-table:** ensure provider is refreshed when filter is an object (closes
  [#3428](https://github.com/bootstrap-vue/bootstrap-vue/issues/3428))
  ([#3429](https://github.com/bootstrap-vue/bootstrap-vue/issues/3429)
  [b95c614](https://github.com/bootstrap-vue/bootstrap-vue/commit/b95c614))
- **b-tabs:** improve child `b-tab` detection routine and fix bug with IDs (closes
  [#3260](https://github.com/bootstrap-vue/bootstrap-vue/issues/3260))
  ([#3442](https://github.com/bootstrap-vue/bootstrap-vue/issues/3442)
  [4a54e8d](https://github.com/bootstrap-vue/bootstrap-vue/commit/4a54e8d))
- **types:** add missing `BInputGroup` to TypeScript definitions
  ([#3487](https://github.com/bootstrap-vue/bootstrap-vue/issues/3487)
  [b4ac081](https://github.com/bootstrap-vue/bootstrap-vue/commit/b4ac081))
- **utils/get:** handle edge case with inherited object getters (fixes
  [#3463](https://github.com/bootstrap-vue/bootstrap-vue/issues/3463))
  ([#3465](https://github.com/bootstrap-vue/bootstrap-vue/issues/3465)
  [e2c8cb1](https://github.com/bootstrap-vue/bootstrap-vue/commit/e2c8cb1))

### Features v2.0.0-rc.23

- **b-table-lite:** new `<b-table-lite>` light-weight table component
  ([#3447](https://github.com/bootstrap-vue/bootstrap-vue/issues/3447)
  [0477941](https://github.com/bootstrap-vue/bootstrap-vue/commit/0477941))
- improved tree-shaking when importing individual components
  ([#3462](https://github.com/bootstrap-vue/bootstrap-vue/issues/3462)
  [2df1ab9](https://github.com/bootstrap-vue/bootstrap-vue/commit/2df1ab9))

### Deprecation v2.0.0-rc.23

Users should switch to the simplified import syntax (introduced in `v2.0.0-rc.22`) when importing
individual plugins, components, and/or directives. **Importing from the `es/` build directory has
been deprecated and will be removed in 2.0.0 stable release.**

<a name="2.0.0-rc.22"></a>

## [v2.0.0-rc.22](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.21...v2.0.0-rc.22)

Released 2019-05-31

### Notable Changes v2.0.0-rc.22

- Improved/shortened method for importing of plugins, components, and directives, as top-level named
  exports. The ESM and CJS builds now both include these top level named exports:
  - Default export is still the BootstrapVue plugin
  - Simplified import format for importing components, directives, plugins:<br>
    `import { ModalPlugin, CardPlugin, BAlert, BRow, BCol, VBScollspyPlugin } from 'bootstrap-vue'`
  - New `esm/` modular build with top-level named exports (tree shakeable)
  - New `dist/bootstrap-vue.esm.js` esm bundle with top-level named exports
  - New `dist/bootstrap-vue.common.js` cjs bundle with top-level named exports
  - No need to cherry-pick from sub directories for plugins/components/directives
  - Most package bundlers will pick the appropriate build automatically
- Nuxt module:
  - Improved tree shaking using the new import syntax
  - Automatically adds `transformAssetUrls` settings for BootstrapVue component props.
- Reverted the `es/` build directory back to mini-commonjs modules (from true ES modules introduced
  in v2.0.0-rc.21) due to issues with Nuxt.js and some webpack builds expecting CJS format when
  cherry-picking individual components, directives and plugins from sub-directories.
- **DEPRECATION: The `es/` build has been deprecated in favour of the newer `esm` build and `cjs`
  bundle, which allow for importing individual components, directives and plugins from top-level
  named exports.** Users are encouraged to convert their existing imports to the new syntax.

### Bug Fixes v2.0.0-rc.22

- **b-modal:** use `safeId()` when comparing `id` received by hide/show handler (closes
  [#3389](https://github.com/bootstrap-vue/bootstrap-vue/issues/3389)
  ([#3394](https://github.com/bootstrap-vue/bootstrap-vue/issues/3394)
  [fae3d25](https://github.com/bootstrap-vue/bootstrap-vue/commit/fae3d25))
- **b-tabs:** fix regression with dynamically added tabs (fixes
  [#3395](https://github.com/bootstrap-vue/bootstrap-vue/issues/3395))
  ([#3396](https://github.com/bootstrap-vue/bootstrap-vue/issues/3396)
  [f254f90](https://github.com/bootstrap-vue/bootstrap-vue/commit/f254f90))
- **form controls:** handle autofocus inside modal or when inside a transition
  ([#3386](https://github.com/bootstrap-vue/bootstrap-vue/issues/3386)
  [c4a8edb](https://github.com/bootstrap-vue/bootstrap-vue/commit/c4a8edb))
- **es:** revert to tranforming `es/` modules into CJS, and simplify main build with top-level named
  import/exports (closes [#3397](https://github.com/bootstrap-vue/bootstrap-vue/issues/3397),
  [#3393](https://github.com/bootstrap-vue/bootstrap-vue/issues/3393),
  [#3323](https://github.com/bootstrap-vue/bootstrap-vue/issues/3323))
  ([#3404](https://github.com/bootstrap-vue/bootstrap-vue/issues/3404)
  [6c386d3](https://github.com/bootstrap-vue/bootstrap-vue/commit/6c386d3))
- **nuxt:** use new bundle for development mode (closes
  [#3397](https://github.com/bootstrap-vue/bootstrap-vue/issues/3397))
  ([#3399](https://github.com/bootstrap-vue/bootstrap-vue/issues/3399)
  [f43097e](https://github.com/bootstrap-vue/bootstrap-vue/commit/f43097e),
  [#3404](https://github.com/bootstrap-vue/bootstrap-vue/issues/3404)
  [6c386d3](https://github.com/bootstrap-vue/bootstrap-vue/commit/6c386d3))
- **types:** fix typing error for `BvComponent` and `BvPlugin` (closes
  [#3390](https://github.com/bootstrap-vue/bootstrap-vue/issues/3390))
  ([#3391](https://github.com/bootstrap-vue/bootstrap-vue/issues/3391)
  [6f0f3fd](https://github.com/bootstrap-vue/bootstrap-vue/commit/6f0f3fd))

### Features v2.0.0-rc.22

- **b-button:** add new `squared` prop for making buttons with square corners
  ([#3387](https://github.com/bootstrap-vue/bootstrap-vue/issues/3387)
  [004963d](https://github.com/bootstrap-vue/bootstrap-vue/commit/004963d))
- **b-tooltip, b-popover:** allow global `delay` customization via config
  ([#3426](https://github.com/bootstrap-vue/bootstrap-vue/issues/3426)
  [2aaec76](https://github.com/bootstrap-vue/bootstrap-vue/commit/2aaec76))
- **nuxt:** handle edge cases where component, directive and plugin names are passed as `camelCase`
  or `kebab-case` and convert to new `PascalCase` names
  ([#3418](https://github.com/bootstrap-vue/bootstrap-vue/issues/3418)
  [ce3ba73](https://github.com/bootstrap-vue/bootstrap-vue/commit/ce3ba73))
- **nuxt module:** alias `esm/` and `es/` to `src/` for Nuxt prod mode
  ([#3423](https://github.com/bootstrap-vue/bootstrap-vue/issues/3423)
  [ae2040b](https://github.com/bootstrap-vue/bootstrap-vue/commit/ae2040b))
- add `"source": "src/index.js"` entry in package.json for Parcel bundler
  ([#3422](https://github.com/bootstrap-vue/bootstrap-vue/issues/3422)
  [0878ca6](https://github.com/bootstrap-vue/bootstrap-vue/commit/0878ca6))

<a name="2.0.0-rc.21"></a>

## [v2.0.0-rc.21](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.20...v2.0.0-rc.21)

Released 2019-05-26

Note: this version introduced a bug when using BootstrapVue with Nuxt.js module in dev mode. Please
use version v2.0.0-rc.22 or newer.

### Bug Fixes v2.0.0-rc.21

- **b-alert:** handle case where dismiss countdown changes to a boolean value (closes
  [#3346](https://github.com/bootstrap-vue/bootstrap-vue/issues/3346))
  ([#3347](https://github.com/bootstrap-vue/bootstrap-vue/issues/3347)
  [14ad833](https://github.com/bootstrap-vue/bootstrap-vue/commit/14ad833))
- **b-dropdown:** delay show of dropdown when calling `show()` (closes
  [#3366](https://github.com/bootstrap-vue/bootstrap-vue/issues/3366))
  ([#3367](https://github.com/bootstrap-vue/bootstrap-vue/issues/3367)
  [1604022](https://github.com/bootstrap-vue/bootstrap-vue/commit/1604022))
- **b-input-group:** fix issue with slots (closes
  [#3284](https://github.com/bootstrap-vue/bootstrap-vue/issues/3284))
  ([#3288](https://github.com/bootstrap-vue/bootstrap-vue/issues/3288)
  [5639e8f](https://github.com/bootstrap-vue/bootstrap-vue/commit/5639e8f))
- **b-input-group:** use same input-group-prepend/append for both props and slots
  ([#3321](https://github.com/bootstrap-vue/bootstrap-vue/issues/3321)
  [fb7386e](https://github.com/bootstrap-vue/bootstrap-vue/commit/fb7386e))
- **b-modal:** delay initially open modal via nextTick when using v-model or visible prop
  ([#3320](https://github.com/bootstrap-vue/bootstrap-vue/issues/3320)
  [6f3010a](https://github.com/bootstrap-vue/bootstrap-vue/commit/6f3010a))
- **b-table:** don't use css `grid` for stacked table SCSS - for IE11 compatibility (closes
  [#3307](https://github.com/bootstrap-vue/bootstrap-vue/issues/3307))
  ([#3383](https://github.com/bootstrap-vue/bootstrap-vue/issues/3383)
  [ce19fc7](https://github.com/bootstrap-vue/bootstrap-vue/commit/ce19fc7))
- **b-tabs:** fix regression of tabs in lazy modals - use DOM query for probing tabs after mount
  (closes: [#3361](https://github.com/bootstrap-vue/bootstrap-vue/issues/3361))
  ([#3375](https://github.com/bootstrap-vue/bootstrap-vue/issues/3375)
  [2b188a2](https://github.com/bootstrap-vue/bootstrap-vue/commit/2b188a2))
- **b-toast:** accessibility - prevent duplicate toast announcements for screen readers (closes
  [#3322](https://github.com/bootstrap-vue/bootstrap-vue/issues/3322))
  ([#3329](https://github.com/bootstrap-vue/bootstrap-vue/issues/3329)
  [d44fba5](https://github.com/bootstrap-vue/bootstrap-vue/commit/d44fba5))
- **b-toaster:** CSS fix for IE11 support (fixes
  [#3327](https://github.com/bootstrap-vue/bootstrap-vue/issues/3327))
  ([#3328](https://github.com/bootstrap-vue/bootstrap-vue/issues/3328)
  [88b1cfd](https://github.com/bootstrap-vue/bootstrap-vue/commit/88b1cfd))
- **docs:** correct modal directive name
  ([#3335](https://github.com/bootstrap-vue/bootstrap-vue/issues/3335)
  [d4dcc35](https://github.com/bootstrap-vue/bootstrap-vue/commit/d4dcc35))
- **docs:** correct Vuelidate validation example and some minor tweaks
  ([#3332](https://github.com/bootstrap-vue/bootstrap-vue/issues/3332)
  [d5c22a8](https://github.com/bootstrap-vue/bootstrap-vue/commit/d5c22a8))
- **docs:** `b-progress-bar` label HTML support examples (closes
  [#3333](https://github.com/bootstrap-vue/bootstrap-vue/issues/3333))
  ([#3336](https://github.com/bootstrap-vue/bootstrap-vue/issues/3336)
  [526f274](https://github.com/bootstrap-vue/bootstrap-vue/commit/526f274))
- **types:** fix msxBoxConfirm typo
  ([#3280](https://github.com/bootstrap-vue/bootstrap-vue/issues/3280)
  [8027e5a](https://github.com/bootstrap-vue/bootstrap-vue/commit/8027e5a))
- use `installFactory` for main `BootstrapVue` plugin (closes
  [#3338](https://github.com/bootstrap-vue/bootstrap-vue/issues/3338))
  ([#3340](https://github.com/bootstrap-vue/bootstrap-vue/issues/3340)
  [4c0c445](https://github.com/bootstrap-vue/bootstrap-vue/commit/4c0c445))

### Features v2.0.0-rc.21

- **b-img-lazy:** add support for IntersectionObserver (closes
  [#3276](https://github.com/bootstrap-vue/bootstrap-vue/issues/3276))
  ([#3279](https://github.com/bootstrap-vue/bootstrap-vue/issues/3279)
  [5cf71cf](https://github.com/bootstrap-vue/bootstrap-vue/commit/5cf71cf))
- **b-modal:** improved portaling - retaining parent-child hierarchy (addresses
  [#3312](https://github.com/bootstrap-vue/bootstrap-vue/issues/3312))
  ([#3326](https://github.com/bootstrap-vue/bootstrap-vue/issues/3326)
  [3728892](https://github.com/bootstrap-vue/bootstrap-vue/commit/3728892))
- **b-tooltip, b-popover:** add `fallback-placement` prop (closes
  [#3348](https://github.com/bootstrap-vue/bootstrap-vue/issues/3348))
  ([#3349](https://github.com/bootstrap-vue/bootstrap-vue/issues/3349)
  [ab42b4c](https://github.com/bootstrap-vue/bootstrap-vue/commit/ab42b4c))
- **es build:** don't transpile import/export statements to require/exports, for better tree shaking
  (closes [#3323](https://github.com/bootstrap-vue/bootstrap-vue/issues/3323))
  ([#3358](https://github.com/bootstrap-vue/bootstrap-vue/issues/3358)
  [3c1866d](https://github.com/bootstrap-vue/bootstrap-vue/commit/3c1866d))
- **form controls:** add `autofocus` prop to all `b-form-*` controls
  ([#3341](https://github.com/bootstrap-vue/bootstrap-vue/issues/3341)
  [e7eb1b4](https://github.com/bootstrap-vue/bootstrap-vue/commit/e7eb1b4))
- **nuxt module:** optimize imports into single import statements
  ([#3325](https://github.com/bootstrap-vue/bootstrap-vue/issues/3325)
  [ef71a3b](https://github.com/bootstrap-vue/bootstrap-vue/commit/ef71a3b))
- **types:** better type declarations (closes
  [#1976](https://github.com/bootstrap-vue/bootstrap-vue/issues/1976))
  ([#3283](https://github.com/bootstrap-vue/bootstrap-vue/issues/3283)
  [a42abd0](https://github.com/bootstrap-vue/bootstrap-vue/commit/a42abd0))
- don't warn about multiple Vue instances when testing in JSDOM (closes
  [#3303](https://github.com/bootstrap-vue/bootstrap-vue/issues/3303))
  ([#3315](https://github.com/bootstrap-vue/bootstrap-vue/issues/3315)
  [0caa29b](https://github.com/bootstrap-vue/bootstrap-vue/commit/0caa29b))

<a name="2.0.0-rc.20"></a>

## [v2.0.0-rc.20](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.19...v2.0.0-rc.20)

Released 2019-05-12

### Bug Fixes v2.0.0-rc.20

- **$bvToast,$bvModal:** ensure values passed to slots are arrays for Vue.js 2.5.x compatibility
  (closes [#3174](https://github.com/bootstrap-vue/bootstrap-vue/issues/3174))
  ([#3252](https://github.com/bootstrap-vue/bootstrap-vue/issues/3252)
  [f46b5d8](https://github.com/bootstrap-vue/bootstrap-vue/commit/f46b5d8))
- **b-nav-item-dropdown:** fix disabled state (fixes
  [#3264](https://github.com/bootstrap-vue/bootstrap-vue/issues/3264))
  ([#3266](https://github.com/bootstrap-vue/bootstrap-vue/issues/3266)
  [10d4c4d](https://github.com/bootstrap-vue/bootstrap-vue/commit/10d4c4d))
- **b-collapse:** is-nav link click behaviour - check if collapse has `display: block !important`
  before attempting to close collapse
  ([#3199](https://github.com/bootstrap-vue/bootstrap-vue/issues/3199)
  [b0729cc](https://github.com/bootstrap-vue/bootstrap-vue/commit/b0729cc))
- **b-form-input:** properly handle out-of-sync values (closes
  [#2657](https://github.com/bootstrap-vue/bootstrap-vue/issues/2657))
  ([#3172](https://github.com/bootstrap-vue/bootstrap-vue/issues/3172)
  [976f9c1](https://github.com/bootstrap-vue/bootstrap-vue/commit/976f9c1))
- **b-modal:** exclude document.body when determining return focus element
  ([#3228](https://github.com/bootstrap-vue/bootstrap-vue/issues/3228)
  [092ab2d](https://github.com/bootstrap-vue/bootstrap-vue/commit/092ab2d))
- **b-modal:** prevent duplicate key when sending to portal-target
  ([#3235](https://github.com/bootstrap-vue/bootstrap-vue/issues/3235))
  ([5204ad7](https://github.com/bootstrap-vue/bootstrap-vue/commit/5204ad7))
- **b-modal:** return focus edge case bug in IE11 (fixes
  [#3206](https://github.com/bootstrap-vue/bootstrap-vue/issues/3206))
  ([#3207](https://github.com/bootstrap-vue/bootstrap-vue/issues/3207)
  [7ef36c2](https://github.com/bootstrap-vue/bootstrap-vue/commit/7ef36c2))
- **b-pagination:** use unicode escape sequence for default bookend button text
  ([#3186](https://github.com/bootstrap-vue/bootstrap-vue/issues/3186)
  [dfb6af7](https://github.com/bootstrap-vue/bootstrap-vue/commit/dfb6af7))
- **b-toast:** use appendChild instead of append for IE 11 support
  ([#3160](https://github.com/bootstrap-vue/bootstrap-vue/issues/3160)
  [be118a9](https://github.com/bootstrap-vue/bootstrap-vue/commit/be118a9))

### Features v2.0.0-rc.20

- **b-dropdown & b-nav-item-dropdown:** pass optional scope to default slot & fixes keyboard nav
  with dropdown forms ([#3242](https://github.com/bootstrap-vue/bootstrap-vue/issues/3242)
  [3d1d777](https://github.com/bootstrap-vue/bootstrap-vue/commit/3d1d777))
- **b-button:** add prop `pill` for pill style buttons
  ([#3214](https://github.com/bootstrap-vue/bootstrap-vue/issues/3214)
  [c26298b](https://github.com/bootstrap-vue/bootstrap-vue/commit/c26298b))
- **config:** add option in config to set global tooltip and popover boundary
  ([#3229](https://github.com/bootstrap-vue/bootstrap-vue/issues/3229)
  [00e4fc9](https://github.com/bootstrap-vue/bootstrap-vue/commit/00e4fc9))
- **b-dropdown:** additional semantic markup optimizations for A11Y
  ([#3196](https://github.com/bootstrap-vue/bootstrap-vue/issues/3196)
  [91d893e](https://github.com/bootstrap-vue/bootstrap-vue/commit/91d893e))
- **b-modal:** use PortalVue for modal placement
  ([#3157](https://github.com/bootstrap-vue/bootstrap-vue/issues/3157)
  [6325528](https://github.com/bootstrap-vue/bootstrap-vue/commit/6325528))
- **b-table:** make table sort icons configurable via SCSS variables
  ([#3156](https://github.com/bootstrap-vue/bootstrap-vue/issues/3156)
  [a72f134](https://github.com/bootstrap-vue/bootstrap-vue/commit/a72f134))
- **b-toast:** add additional options to global default config (closes
  [#3169](https://github.com/bootstrap-vue/bootstrap-vue/issues/3169))
  ([#3170](https://github.com/bootstrap-vue/bootstrap-vue/issues/3170)
  [b01e01c](https://github.com/bootstrap-vue/bootstrap-vue/commit/b01e01c))
- **v-b-toggle:** make targets reactive to updates (closes
  [#3165](https://github.com/bootstrap-vue/bootstrap-vue/issues/3165))
  ([#3167](https://github.com/bootstrap-vue/bootstrap-vue/issues/3167)
  [6eff6d9](https://github.com/bootstrap-vue/bootstrap-vue/commit/6eff6d9))
- console warn if multiple instances of Vue detected (addresses
  [#3040](https://github.com/bootstrap-vue/bootstrap-vue/issues/3040))
  ([#3220](https://github.com/bootstrap-vue/bootstrap-vue/issues/3220)
  [41db3e2](https://github.com/bootstrap-vue/bootstrap-vue/commit/41db3e2))
- make more component appearance prop defaults globally configurable (closes
  [#3173](https://github.com/bootstrap-vue/bootstrap-vue/issues/3173))
  ([#3175](https://github.com/bootstrap-vue/bootstrap-vue/issues/3175)
  [f7cf28c](https://github.com/bootstrap-vue/bootstrap-vue/commit/f7cf28c))
- **types:** create more typescript typings, and simplify component/directive/plugin imports.
  ([#3209](https://github.com/bootstrap-vue/bootstrap-vue/issues/3209)
  [50bbe6a](https://github.com/bootstrap-vue/bootstrap-vue/commit/50bbe6a))

<a name="2.0.0-rc.19"></a>

## [v2.0.0-rc.19](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.18...v2.0.0-rc.19)

Released 2019-04-21

### Bug Fixes v2.0.0-rc.19

- **b-link:** ensure href prop is not passed to router-links (fixes
  [#3066](https://github.com/bootstrap-vue/bootstrap-vue/issues/3066))
  ([#3084](https://github.com/bootstrap-vue/bootstrap-vue/issues/3084)
  [f679c11](https://github.com/bootstrap-vue/bootstrap-vue/commit/f679c11))
- **b-col, b-form-group:** implement self overwriting lazy props getter (fixes:
  [#3080](https://github.com/bootstrap-vue/bootstrap-vue/issues/3080))
  ([#3125](https://github.com/bootstrap-vue/bootstrap-vue/issues/3125)
  [92756bd](https://github.com/bootstrap-vue/bootstrap-vue/commit/92756bd))
- **b-form-textarea:** improve auto-row height calculation timing (closes
  [#3103](https://github.com/bootstrap-vue/bootstrap-vue/issues/3103))
  ([#3105](https://github.com/bootstrap-vue/bootstrap-vue/issues/3105)
  [dfc662e](https://github.com/bootstrap-vue/bootstrap-vue/commit/dfc662e))
- **b-modal:** clear internal return_focus after modal closes (fixes
  [#3067](https://github.com/bootstrap-vue/bootstrap-vue/issues/3067))
  ([#3068](https://github.com/bootstrap-vue/bootstrap-vue/issues/3068)
  [971556f](https://github.com/bootstrap-vue/bootstrap-vue/commit/971556f))
- **b-modal:** ensure that v-model is updated when show or hide is canceled
  ([#3131](https://github.com/bootstrap-vue/bootstrap-vue/issues/3131)
  [6726a33](https://github.com/bootstrap-vue/bootstrap-vue/commit/6726a33))
- **b-modal:** fix close on click-out for IE11
  ([#3117](https://github.com/bootstrap-vue/bootstrap-vue/issues/3117)
  [9b09e52](https://github.com/bootstrap-vue/bootstrap-vue/commit/9b09e52))
- **b-modal:** handle HMR when defining property on Vue prototype
  ([#3123](https://github.com/bootstrap-vue/bootstrap-vue/issues/3123)
  [a4e7f21](https://github.com/bootstrap-vue/bootstrap-vue/commit/a4e7f21))
- **b-tab:** don't use `aria-expanded` on the panel
  ([#3143](https://github.com/bootstrap-vue/bootstrap-vue/issues/3143)
  [381eacf](https://github.com/bootstrap-vue/bootstrap-vue/commit/381eacf))
- **b-table:** prevent hover style on busy/empty row (closes
  [#3079](https://github.com/bootstrap-vue/bootstrap-vue/issues/3079))
  ([#3086](https://github.com/bootstrap-vue/bootstrap-vue/issues/3086)
  [c53ffd4](https://github.com/bootstrap-vue/bootstrap-vue/commit/c53ffd4))
- **utils:** improve `dom`, `env`, `inspect` and test utils
  ([#3085](https://github.com/bootstrap-vue/bootstrap-vue/issues/3085)
  [bd85049](https://github.com/bootstrap-vue/bootstrap-vue/commit/bd85049))
- **nuxt module:** ensure that css and transpile are arrays (fixes:
  [#3141](https://github.com/bootstrap-vue/bootstrap-vue/issues/3141))
  ([#3142](https://github.com/bootstrap-vue/bootstrap-vue/issues/3142)
  [239da77](https://github.com/bootstrap-vue/bootstrap-vue/commit/239da77))
- **docs:** improve `<b-modal>` prevent closing example
  ([#3054](https://github.com/bootstrap-vue/bootstrap-vue/issues/3054)
  [f609316](https://github.com/bootstrap-vue/bootstrap-vue/commit/f609316))
- **docs:** improve code highlighting + table styles
  ([#3078](https://github.com/bootstrap-vue/bootstrap-vue/issues/3078)
  [d4b9895](https://github.com/bootstrap-vue/bootstrap-vue/commit/d4b9895))
- **docs:** overall improvements
  ([#3129](https://github.com/bootstrap-vue/bootstrap-vue/issues/3129)
  [be53376](https://github.com/bootstrap-vue/bootstrap-vue/commit/be53376))

### Features v2.0.0-rc.19

- **b-dropdown:** use semantic `<ul>` and `<li>` markup (closes
  [#3072](https://github.com/bootstrap-vue/bootstrap-vue/issues/3072))
  ([#3087](https://github.com/bootstrap-vue/bootstrap-vue/issues/3087)
  [58ad66b](https://github.com/bootstrap-vue/bootstrap-vue/commit/58ad66b))
- **b-form-checkbox, b-form-radio:** add `aria-labelledby` prop (closes:
  [#3139](https://github.com/bootstrap-vue/bootstrap-vue/issues/3139))
  ([#3140](https://github.com/bootstrap-vue/bootstrap-vue/issues/3140)
  [f82f566](https://github.com/bootstrap-vue/bootstrap-vue/commit/f82f566))
- **b-form-group:** make `aria-live` attribute on feedback configurable (closes
  [#3057](https://github.com/bootstrap-vue/bootstrap-vue/issues/3057))
  ([#3058](https://github.com/bootstrap-vue/bootstrap-vue/issues/3058)
  [6161b8a](https://github.com/bootstrap-vue/bootstrap-vue/commit/6161b8a))
- **b-modal:** support for optionally scoped slots and new `Vue.prototype.$bvModal` helper
  ([#3056](https://github.com/bootstrap-vue/bootstrap-vue/issues/3056)
  [b647830](https://github.com/bootstrap-vue/bootstrap-vue/commit/b647830))
- **b-table:** add new prop `table-class` for applying classes to table root element (closes
  [#3138](https://github.com/bootstrap-vue/bootstrap-vue/issues/3138))
  ([#3148](https://github.com/bootstrap-vue/bootstrap-vue/issues/3148)
  [5deb5db](https://github.com/bootstrap-vue/bootstrap-vue/commit/5deb5db))
- **b-tabs:** add `fill`, `justified` and `active-class` props (closes
  [#3053](https://github.com/bootstrap-vue/bootstrap-vue/issues/3053),
  [#2518](https://github.com/bootstrap-vue/bootstrap-vue/issues/2518))
  ([#3061](https://github.com/bootstrap-vue/bootstrap-vue/issues/3061)
  [b6557ad](https://github.com/bootstrap-vue/bootstrap-vue/commit/b6557ad))
- **b-toast:** add Bootstrap v4.3 Toasts
  ([#3093](https://github.com/bootstrap-vue/bootstrap-vue/issues/3093)
  [c31b4ff](https://github.com/bootstrap-vue/bootstrap-vue/commit/c31b4ff))
- **b-toast:** updates to toaster SCSS and structure and enable hover-pause
  ([#3135](https://github.com/bootstrap-vue/bootstrap-vue/issues/3135)
  [263f206](https://github.com/bootstrap-vue/bootstrap-vue/commit/263f206))
- **docs/playground:** add support for exporting to CodePen and CodeSandbox
  ([#3071](https://github.com/bootstrap-vue/bootstrap-vue/issues/3071)
  [ccb1614](https://github.com/bootstrap-vue/bootstrap-vue/commit/ccb1614))

### Notes v2.0.0-rc.19

- Removed built in polyfills (hack) for Mutation Observer. IE 11 users should include the
  appropriate polyfills as mentioned in the getting started docs page.

<a name="2.0.0-rc.18"></a>

## [v2.0.0-rc.18](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.17...v2.0.0-rc.18)

Released 2019-04-08

### Bug Fixes v2.0.0-rc.18

- **build:** enable babel option to interop default (fixes
  [#3038](https://github.com/bootstrap-vue/bootstrap-vue/issues/3038))
  ([#3046](https://github.com/bootstrap-vue/bootstrap-vue/issues/3046)
  [4e981c2](https://github.com/bootstrap-vue/bootstrap-vue/commit/4e981c2))
- **typescript:** replaced invalid `mixed` keyword with `any` (fixes
  [#3041](https://github.com/bootstrap-vue/bootstrap-vue/issues/3041))
  ([#3043](https://github.com/bootstrap-vue/bootstrap-vue/issues/3043)
  [36e8246](https://github.com/bootstrap-vue/bootstrap-vue/commit/36e8246))

### Features v2.0.0-rc.18

- **nuxt:** add `usePretranspiled` option
  ([#3048](https://github.com/bootstrap-vue/bootstrap-vue/issues/3048)
  [8022481](https://github.com/bootstrap-vue/bootstrap-vue/commit/8022481))

<a name="2.0.0-rc.17"></a>

## [v2.0.0-rc.17](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.16...v2.0.0-rc.17)

Released 2019-04-07

### Bug Fixes v2.0.0-rc.17

- **breadcrumb-item:** remove atribute `role="presentation"` for better ARIA support
  ([#2991](https://github.com/bootstrap-vue/bootstrap-vue/issues/2991))
  ([e84c4a7](https://github.com/bootstrap-vue/bootstrap-vue/commit/e84c4a7))
- **docs:** add back missing leading slash to search urls
  ([#2947](https://github.com/bootstrap-vue/bootstrap-vue/issues/2947))
  ([fff8795](https://github.com/bootstrap-vue/bootstrap-vue/commit/fff8795))
- **docs:** fix component plugin's included plugins and directives
  ([#2966](https://github.com/bootstrap-vue/bootstrap-vue/issues/2966))
  ([cbf24c3](https://github.com/bootstrap-vue/bootstrap-vue/commit/cbf24c3))
- **docs:** fix issue with table docs page (closes
  [#2939](https://github.com/bootstrap-vue/bootstrap-vue/issues/2939))
  ([#2940](https://github.com/bootstrap-vue/bootstrap-vue/issues/2940))
  ([c6abfd0](https://github.com/bootstrap-vue/bootstrap-vue/commit/c6abfd0))
- **env:** check for undefined on process (closes
  [#2958](https://github.com/bootstrap-vue/bootstrap-vue/issues/2958))
  ([#2959](https://github.com/bootstrap-vue/bootstrap-vue/issues/2959))
  ([0c3a7b0](https://github.com/bootstrap-vue/bootstrap-vue/commit/0c3a7b0))
- **form-group:** don't render `aria-labelledby` on group when `label-for` provided (fixes
  [#2933](https://github.com/bootstrap-vue/bootstrap-vue/issues/2933))
  ([#2936](https://github.com/bootstrap-vue/bootstrap-vue/issues/2936))
  ([8058c03](https://github.com/bootstrap-vue/bootstrap-vue/commit/8058c03))
- **form-textarea:** improved computedHeight calculation when in auto resize mode
  ([#3012](https://github.com/bootstrap-vue/bootstrap-vue/issues/3012))
  ([0043b92](https://github.com/bootstrap-vue/bootstrap-vue/commit/0043b92))
- **link:** support handling multiple click event listeners (fixes
  [#2938](https://github.com/bootstrap-vue/bootstrap-vue/issues/2938))
  ([#2943](https://github.com/bootstrap-vue/bootstrap-vue/issues/2943))
  ([97e8ece](https://github.com/bootstrap-vue/bootstrap-vue/commit/97e8ece))
- **modal:** prevent close on backdrop when click initiated inside modal content (fixes
  [#3025](https://github.com/bootstrap-vue/bootstrap-vue/issues/3025))
  ([#3029](https://github.com/bootstrap-vue/bootstrap-vue/issues/3029))
  ([ad57e8c](https://github.com/bootstrap-vue/bootstrap-vue/commit/ad57e8c))
- **modal:** prevent page scroll as modal opens
  ([#2963](https://github.com/bootstrap-vue/bootstrap-vue/issues/2963))
  ([3bf3622](https://github.com/bootstrap-vue/bootstrap-vue/commit/3bf3622))
- **modal:** improve stacked modal z-index calculations (closes
  [#3015](https://github.com/bootstrap-vue/bootstrap-vue/issues/3015))
  ([#3017](https://github.com/bootstrap-vue/bootstrap-vue/issues/3017))
  ([891e8cc](https://github.com/bootstrap-vue/bootstrap-vue/commit/891e8cc))
- **pagination:** reset to page 1 when `total-rows` or `per-page` changes (closes
  [#2987](https://github.com/bootstrap-vue/bootstrap-vue/issues/2987))
  ([#2993](https://github.com/bootstrap-vue/bootstrap-vue/issues/2993))
  ([df2e77a](https://github.com/bootstrap-vue/bootstrap-vue/commit/df2e77a))
- **pagination-nav:** better current page detection in IE
  ([#3006](https://github.com/bootstrap-vue/bootstrap-vue/issues/3006))
  ([f742aa9](https://github.com/bootstrap-vue/bootstrap-vue/commit/f742aa9))
- **tooltip/popover:** prevent double show/shown event emits when `.sync` modifier used (fixes
  [#1637](https://github.com/bootstrap-vue/bootstrap-vue/issues/1637))
  ([#3001](https://github.com/bootstrap-vue/bootstrap-vue/issues/3001))
  ([0d3599a](https://github.com/bootstrap-vue/bootstrap-vue/commit/0d3599a))
- **utils/get:** handle case when nested value is falsy
  ([#2982](https://github.com/bootstrap-vue/bootstrap-vue/issues/2982))
  ([40f6cb7](https://github.com/bootstrap-vue/bootstrap-vue/commit/40f6cb7))
- **v-b-toggle/b-collapse:** ensure toggle remains in sync with collapse (Closes
  [#3020](https://github.com/bootstrap-vue/bootstrap-vue/issues/3020))
  ([#3021](https://github.com/bootstrap-vue/bootstrap-vue/issues/3021))
  ([6b36d0d](https://github.com/bootstrap-vue/bootstrap-vue/commit/6b36d0d))

### Features v2.0.0-rc.17

- **docs:** algolia powered search
  ([#2952](https://github.com/bootstrap-vue/bootstrap-vue/issues/2952))
  ([0417f7b](https://github.com/bootstrap-vue/bootstrap-vue/commit/0417f7b))
- **modal:** auto return focus to trigger element using previous document.activeElement if no return
  focus element provided ([#3033](https://github.com/bootstrap-vue/bootstrap-vue/issues/3033))
  ([e5c0aa5](https://github.com/bootstrap-vue/bootstrap-vue/commit/e5c0aa5))
- **modal:** subclass `BvEvent` as `BvModalEvent` for modal specific properties
  ([#3024](https://github.com/bootstrap-vue/bootstrap-vue/issues/3024))
  ([502eba9](https://github.com/bootstrap-vue/bootstrap-vue/commit/502eba9))
- **table:** add TypeScript definitions for table fields
  ([#2867](https://github.com/bootstrap-vue/bootstrap-vue/issues/2867))
  ([436e8c1](https://github.com/bootstrap-vue/bootstrap-vue/commit/436e8c1))
- **v-b-scrollspy:** support when vue-router is in `hash` based route mode (closes
  [#2722](https://github.com/bootstrap-vue/bootstrap-vue/issues/2722))
  ([#2953](https://github.com/bootstrap-vue/bootstrap-vue/issues/2953))
  ([a713dd4](https://github.com/bootstrap-vue/bootstrap-vue/commit/a713dd4))

<a name="2.0.0-rc.16"></a>

## [v2.0.0-rc.16](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.15...v2.0.0-rc.16)

Released 2019-03-28

### Bug Fixes v2.0.0-rc.16

- **collapse/toggle:** persist toggle state on element and prevent multiple state emits (closes
  [#2923](https://github.com/bootstrap-vue/bootstrap-vue/issues/2923))
  ([#2924](https://github.com/bootstrap-vue/bootstrap-vue/issues/2924))
  ([6f899fc](https://github.com/bootstrap-vue/bootstrap-vue/commit/6f899fc))
- **docs:** drop self-closing tags + build system improvements (fixes
  [#2882](https://github.com/bootstrap-vue/bootstrap-vue/issues/2882))
  ([#2893](https://github.com/bootstrap-vue/bootstrap-vue/issues/2893))
  ([310c7dc](https://github.com/bootstrap-vue/bootstrap-vue/commit/310c7dc))
- **dropdown:** fix `no-caret` prop when dropleft (fixes
  [#2909](https://github.com/bootstrap-vue/bootstrap-vue/issues/2909))
  ([#2910](https://github.com/bootstrap-vue/bootstrap-vue/issues/2910))
  ([3bef981](https://github.com/bootstrap-vue/bootstrap-vue/commit/3bef981))
- **table:** fix broken aria-labels for sortable columns + break out code into additional mixins +
  tests ([#2884](https://github.com/bootstrap-vue/bootstrap-vue/issues/2884))
  ([ddc2006](https://github.com/bootstrap-vue/bootstrap-vue/commit/ddc2006))
- **table:** fix range selection
  ([#2865](https://github.com/bootstrap-vue/bootstrap-vue/issues/2865))
  ([da49558](https://github.com/bootstrap-vue/bootstrap-vue/commit/da49558))
- **table:** fix SSR mismatch errors
  ([#2897](https://github.com/bootstrap-vue/bootstrap-vue/issues/2897))
  ([6c1940d](https://github.com/bootstrap-vue/bootstrap-vue/commit/6c1940d))
- **utils/dom:** update closest routine to support SVG
  ([#2901](https://github.com/bootstrap-vue/bootstrap-vue/issues/2901))
  ([9d4408d](https://github.com/bootstrap-vue/bootstrap-vue/commit/9d4408d))

### Features v2.0.0-rc.16

- add BOOTSTRAP_VUE_NO_WARN environment variable to hide warnings
  ([#2826](https://github.com/bootstrap-vue/bootstrap-vue/issues/2826))
  ([44d0351](https://github.com/bootstrap-vue/bootstrap-vue/commit/44d0351))
- **alert:** remove need for custom CSS for fade transition
  ([#2925](https://github.com/bootstrap-vue/bootstrap-vue/issues/2925))
  ([0910b22](https://github.com/bootstrap-vue/bootstrap-vue/commit/0910b22))
- **carousel:** add no-hover-pause prop
  ([#2888](https://github.com/bootstrap-vue/bootstrap-vue/issues/2888))
  ([8a503ec](https://github.com/bootstrap-vue/bootstrap-vue/commit/8a503ec))
- **core:** create configurable base global configuration
  ([#2905](https://github.com/bootstrap-vue/bootstrap-vue/issues/2905))
  ([8018bdf](https://github.com/bootstrap-vue/bootstrap-vue/commit/8018bdf))
- **form-checkbox/radio:** allow no label in plain mode (fixes
  [#2911](https://github.com/bootstrap-vue/bootstrap-vue/issues/2911))
  ([#2912](https://github.com/bootstrap-vue/bootstrap-vue/issues/2912))
  ([6f38d9d](https://github.com/bootstrap-vue/bootstrap-vue/commit/6f38d9d))
- **form-file:** add in prop and scoped slot for formatting selected file names
  ([#2902](https://github.com/bootstrap-vue/bootstrap-vue/issues/2902))
  ([f53b5f8](https://github.com/bootstrap-vue/bootstrap-vue/commit/f53b5f8))
- **forms:** new b-form-datalist helper component
  ([#2899](https://github.com/bootstrap-vue/bootstrap-vue/issues/2899))
  ([e9a8e85](https://github.com/bootstrap-vue/bootstrap-vue/commit/e9a8e85))
- **table:** add basic keyboard nav when table has row-clicked handler or is selctable (closes
  [#2869](https://github.com/bootstrap-vue/bootstrap-vue/issues/2869))
  ([#2870](https://github.com/bootstrap-vue/bootstrap-vue/issues/2870))
  ([ddcd66a](https://github.com/bootstrap-vue/bootstrap-vue/commit/ddcd66a))

<a name="2.0.0-rc.15"></a>

## [v2.0.0-rc.15](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.14...v2.0.0-rc.15)

Released: 2019-03-18

### Bug Fixes v2.0.0-rc.15

- **carousel:** fix touchmove handler to re-enable swipe gestures
  ([#2844](https://github.com/bootstrap-vue/bootstrap-vue/issues/2844))
  ([a067f8c](https://github.com/bootstrap-vue/bootstrap-vue/commit/a067f8c))
- **form-radio/form-checkbox:** ensure required prop propagated in group mode (fixes
  [#2839](https://github.com/bootstrap-vue/bootstrap-vue/issues/2839))
  ([#2842](https://github.com/bootstrap-vue/bootstrap-vue/issues/2842))
  ([fc24589](https://github.com/bootstrap-vue/bootstrap-vue/commit/fc24589))
- **pagination-nav:** fix race condition with clicking prev/next buttons
  ([#2834](https://github.com/bootstrap-vue/bootstrap-vue/issues/2834))
  ([42f14e1](https://github.com/bootstrap-vue/bootstrap-vue/commit/42f14e1))
- **table:** allow string for pagination prop types
  ([#2824](https://github.com/bootstrap-vue/bootstrap-vue/issues/2824))
  ([31d2044](https://github.com/bootstrap-vue/bootstrap-vue/commit/31d2044))
- **table:** don't emit row-clicked when user is selecting text (Closes
  [#2791](https://github.com/bootstrap-vue/bootstrap-vue/issues/2791))
  ([ecf0689](https://github.com/bootstrap-vue/bootstrap-vue/commit/ecf0689))
- **util/loose-equal:** handle comparing sparse arrays
  ([#2813](https://github.com/bootstrap-vue/bootstrap-vue/issues/2813))
  ([6ac8ade](https://github.com/bootstrap-vue/bootstrap-vue/commit/6ac8ade))
- **utils/get:** handle cases when field value is not array or object (closes
  [#2807](https://github.com/bootstrap-vue/bootstrap-vue/issues/2807))
  ([#2808](https://github.com/bootstrap-vue/bootstrap-vue/issues/2808))
  ([c656fa3](https://github.com/bootstrap-vue/bootstrap-vue/commit/c656fa3))
- **utisl/observeDom:** make sure to check for browser enviroment
  ([#2838](https://github.com/bootstrap-vue/bootstrap-vue/issues/2838))
  ([8471f31](https://github.com/bootstrap-vue/bootstrap-vue/commit/8471f31))

### Features v2.0.0-rc.15

- **docs:** get recommended `Vue.js` and `Bootstrap` version from `package.json`
  ([#2840](https://github.com/bootstrap-vue/bootstrap-vue/issues/2840))
  ([3a6702e](https://github.com/bootstrap-vue/bootstrap-vue/commit/3a6702e))
- **pagination-nav:** auto-detect current page based on $route/URL. Add support array of links
  ([#2836](https://github.com/bootstrap-vue/bootstrap-vue/issues/2836))
  ([65e12f8](https://github.com/bootstrap-vue/bootstrap-vue/commit/65e12f8))
- **table:** new option to disable footer sorting
  ([#2802](https://github.com/bootstrap-vue/bootstrap-vue/issues/2802))
  ([bc443a3](https://github.com/bootstrap-vue/bootstrap-vue/commit/bc443a3))

<a name="2.0.0-rc.14"></a>

## [v2.0.0-rc.14](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.13...v2.0.0-rc.14)

Released: 2019-03-08

### Bug Fixes v2.0.0-rc.14

- **docs:** correct and validate component meta information
  ([#2665](https://github.com/bootstrap-vue/bootstrap-vue/issues/2665))
  ([#2650](https://github.com/bootstrap-vue/bootstrap-vue/issues/2650))
  ([29147ca](https://github.com/bootstrap-vue/bootstrap-vue/commit/29147ca))
- **dom-utils:** check for `el.classList` existence
  ([#2713](https://github.com/bootstrap-vue/bootstrap-vue/issues/2713))
  ([#2714](https://github.com/bootstrap-vue/bootstrap-vue/issues/2714))
  ([4ff8b05](https://github.com/bootstrap-vue/bootstrap-vue/commit/4ff8b05))
- **form-file:** fix v-model update watcher
  ([#2695](https://github.com/bootstrap-vue/bootstrap-vue/issues/2695))
  ([abf9d6e](https://github.com/bootstrap-vue/bootstrap-vue/commit/abf9d6e))
- **form-input:** allow number type for form-inputs via form-text mixin
  ([#2738](https://github.com/bootstrap-vue/bootstrap-vue/issues/2738))
  ([ec91788](https://github.com/bootstrap-vue/bootstrap-vue/commit/ec91788))
- **modal:** modal stacking position fix
  ([#2677](https://github.com/bootstrap-vue/bootstrap-vue/issues/2677))
  ([#2681](https://github.com/bootstrap-vue/bootstrap-vue/issues/2681))
  ([ff4c4c9](https://github.com/bootstrap-vue/bootstrap-vue/commit/ff4c4c9))
- **nav-item:** move listeners to link element
  ([#2755](https://github.com/bootstrap-vue/bootstrap-vue/issues/2755))
  ([40b19a7](https://github.com/bootstrap-vue/bootstrap-vue/commit/40b19a7))
- **nuxt-module:** fix default inclusion of CSS files
  ([#2629](https://github.com/bootstrap-vue/bootstrap-vue/issues/2629))
  ([#2701](https://github.com/bootstrap-vue/bootstrap-vue/issues/2701))
  ([afbb650](https://github.com/bootstrap-vue/bootstrap-vue/commit/afbb650))
- **pagination:** avoid using domProps innerText
  ([#2744](https://github.com/bootstrap-vue/bootstrap-vue/issues/2744))
  ([#2757](https://github.com/bootstrap-vue/bootstrap-vue/issues/2757))
  ([d10f804](https://github.com/bootstrap-vue/bootstrap-vue/commit/d10f804))
- **pagination:** correct pagination props/slots/event docs and fix ellipsis slot
  ([#2699](https://github.com/bootstrap-vue/bootstrap-vue/issues/2699))
  ([25e04e1](https://github.com/bootstrap-vue/bootstrap-vue/commit/25e04e1))
- **radio/check group:** remove redundant size class from the group container
  ([#2743](https://github.com/bootstrap-vue/bootstrap-vue/issues/2743))
  ([#2761](https://github.com/bootstrap-vue/bootstrap-vue/issues/2761))
  ([0639588](https://github.com/bootstrap-vue/bootstrap-vue/commit/0639588))
- **tabs:** fix initial value handling
  ([#2656](https://github.com/bootstrap-vue/bootstrap-vue/issues/2656))
  ([#2661](https://github.com/bootstrap-vue/bootstrap-vue/issues/2661))
  ([2708c74](https://github.com/bootstrap-vue/bootstrap-vue/commit/2708c74))
- **tabs:** prevent double input event on mount, and add additional tests
  ([#2748](https://github.com/bootstrap-vue/bootstrap-vue/issues/2748))
  ([c462e0a](https://github.com/bootstrap-vue/bootstrap-vue/commit/c462e0a))
- **util/html:** ensure argument is a string
  ([#2770](https://github.com/bootstrap-vue/bootstrap-vue/issues/2770))
  ([#2775](https://github.com/bootstrap-vue/bootstrap-vue/issues/2775))
  ([356247f](https://github.com/bootstrap-vue/bootstrap-vue/commit/356247f))
- **utils:** add back array notation support to `get()` util
  ([#2689](https://github.com/bootstrap-vue/bootstrap-vue/issues/2689))
  ([9e824a5](https://github.com/bootstrap-vue/bootstrap-vue/commit/9e824a5))
- **utils:** make `looseEqual()` util compliant with Vue.js spec
  ([#2651](https://github.com/bootstrap-vue/bootstrap-vue/issues/2651))
  ([1b6a994](https://github.com/bootstrap-vue/bootstrap-vue/commit/1b6a994))

### Features v2.0.0-rc.14

- **card-img-lazy:** new card-img-lazy sub-component
  ([#2647](https://github.com/bootstrap-vue/bootstrap-vue/issues/2647))
  ([d2e1f8a](https://github.com/bootstrap-vue/bootstrap-vue/commit/d2e1f8a))
- **docs:** add heading anchor links
  ([#2698](https://github.com/bootstrap-vue/bootstrap-vue/issues/2698))
  ([fd6cbef](https://github.com/bootstrap-vue/bootstrap-vue/commit/fd6cbef))
- **form-checkbox/radio:** code improvements, test suites, and docs update
  ([#2718](https://github.com/bootstrap-vue/bootstrap-vue/issues/2718))
  ([#2721](https://github.com/bootstrap-vue/bootstrap-vue/issues/2721))
  ([285a2e1](https://github.com/bootstrap-vue/bootstrap-vue/commit/285a2e1))
- **form-input:** Added support for datalists to text form-inputs
  ([#2781](https://github.com/bootstrap-vue/bootstrap-vue/issues/2781))
  ([0339ad8](https://github.com/bootstrap-vue/bootstrap-vue/commit/0339ad8))
- **form-textarea:** add `noAutoShrink` prop
  ([#2664](https://github.com/bootstrap-vue/bootstrap-vue/issues/2664))
  ([#2666](https://github.com/bootstrap-vue/bootstrap-vue/issues/2666))
  ([a29c40c](https://github.com/bootstrap-vue/bootstrap-vue/commit/a29c40c))
- **modal:** add modal-backdrop slot
  ([#2688](https://github.com/bootstrap-vue/bootstrap-vue/issues/2688))
  ([ce18ffd](https://github.com/bootstrap-vue/bootstrap-vue/commit/ce18ffd))
- **modal:** add toggle method and root event
  ([#2708](https://github.com/bootstrap-vue/bootstrap-vue/issues/2708))
  ([#2709](https://github.com/bootstrap-vue/bootstrap-vue/issues/2709))
  ([f67218e](https://github.com/bootstrap-vue/bootstrap-vue/commit/f67218e))
- **modal:** add variant prop for header close button
  ([#2765](https://github.com/bootstrap-vue/bootstrap-vue/issues/2765))
  ([b7e95d9](https://github.com/bootstrap-vue/bootstrap-vue/commit/b7e95d9))
- **nuxt-module:** add tree-shaking support to Nuxt module
  ([#2654](https://github.com/bootstrap-vue/bootstrap-vue/issues/2654))
  ([9aaf32f](https://github.com/bootstrap-vue/bootstrap-vue/commit/9aaf32f))
- **table:** add IDs to tbody > tr elements if primary-key provided
  ([#2693](https://github.com/bootstrap-vue/bootstrap-vue/issues/2693))
  ([#2694](https://github.com/bootstrap-vue/bootstrap-vue/issues/2694))
  ([3d72404](https://github.com/bootstrap-vue/bootstrap-vue/commit/3d72404))
- **table:** added `thead-top` slot to table
  ([#2489](https://github.com/bootstrap-vue/bootstrap-vue/issues/2489))
  ([#2653](https://github.com/bootstrap-vue/bootstrap-vue/issues/2653))
  ([fbb549c](https://github.com/bootstrap-vue/bootstrap-vue/commit/fbb549c))
- **table:** better default rendering of unformatted object values
  ([#2733](https://github.com/bootstrap-vue/bootstrap-vue/issues/2733))
  ([ee84672](https://github.com/bootstrap-vue/bootstrap-vue/commit/ee84672))
- **table:** make some slots available either as scoped or unscoped
  ([#2740](https://github.com/bootstrap-vue/bootstrap-vue/issues/2740))
  ([ab7937e](https://github.com/bootstrap-vue/bootstrap-vue/commit/ab7937e))
- **util/get, table:** handle edge case where user has dot in actual item data field key (Closes
  ([#2762](https://github.com/bootstrap-vue/bootstrap-vue/issues/2762))
  ([#2764](https://github.com/bootstrap-vue/bootstrap-vue/issues/2764))
  ([ee52844](https://github.com/bootstrap-vue/bootstrap-vue/commit/ee52844))

### Performance Improvements v2.0.0-rc.14

- **table:** minor tweaks to primary key usage
  ([#2741](https://github.com/bootstrap-vue/bootstrap-vue/issues/2741))
  ([d083385](https://github.com/bootstrap-vue/bootstrap-vue/commit/d083385))

<a name="2.0.0-rc.13"></a>

## [v2.0.0-rc.13](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.12...v2.0.0-rc.13)

Released: 2019-02-18

### Bug Fixes v2.0.0-rc.13

- **breadcrumb-item:** Fix `to` prop handling
  ([#2578](https://github.com/bootstrap-vue/bootstrap-vue/issues/2578))
  ([fba9df3](https://github.com/bootstrap-vue/bootstrap-vue/commit/fba9df3))
- **build:** don't include babel runtime
  ([#2590](https://github.com/bootstrap-vue/bootstrap-vue/issues/2590))
  ([20828fa](https://github.com/bootstrap-vue/bootstrap-vue/commit/20828fa))
- **build:** Add [@babel](https://github.com/babel)/runtime to devDependencies
  ([#2569](https://github.com/bootstrap-vue/bootstrap-vue/issues/2569))
  ([83a253b](https://github.com/bootstrap-vue/bootstrap-vue/commit/83a253b))
- **card:** fix array spread error when no-body is set and no content
  ([5040566](https://github.com/bootstrap-vue/bootstrap-vue/commit/5040566)
- **docs:** change \@include to \@import in the Nuxt plugin module section
  ([4fad60a](https://github.com/bootstrap-vue/bootstrap-vue/commit/4fad60a))
- **docs:** correct typos ([#2592](https://github.com/bootstrap-vue/bootstrap-vue/issues/2592))
  ([9883f8f](https://github.com/bootstrap-vue/bootstrap-vue/commit/9883f8f))
- **docs:** Correct typos in carousel docs
  ([#2585](https://github.com/bootstrap-vue/bootstrap-vue/issues/2585))
  ([87a721f](https://github.com/bootstrap-vue/bootstrap-vue/commit/87a721f))
- **docs:** fix broken link in form-textarea docs
  ([#2598](https://github.com/bootstrap-vue/bootstrap-vue/issues/2598))
  ([07162e1](https://github.com/bootstrap-vue/bootstrap-vue/commit/07162e1))
- **docs:** fix broken links ([#2635](https://github.com/bootstrap-vue/bootstrap-vue/issues/2635))
  ([fa90f3e](https://github.com/bootstrap-vue/bootstrap-vue/commit/fa90f3e))
- **docs:** Fix directive import paths
  ([#2570](https://github.com/bootstrap-vue/bootstrap-vue/issues/2570))
  ([2475542](https://github.com/bootstrap-vue/bootstrap-vue/commit/2475542))
- **docs:** fix grid options table layout issue
  ([#2630](https://github.com/bootstrap-vue/bootstrap-vue/issues/2630))
  ([86a882f](https://github.com/bootstrap-vue/bootstrap-vue/commit/86a882f))
- **docs:** Improve wording in footer
  ([#2576](https://github.com/bootstrap-vue/bootstrap-vue/issues/2576))
  ([af7e36e](https://github.com/bootstrap-vue/bootstrap-vue/commit/af7e36e))
- **form-input:** Allow number as value type
  ([#2583](https://github.com/bootstrap-vue/bootstrap-vue/issues/2583))
  ([dfaf34e](https://github.com/bootstrap-vue/bootstrap-vue/commit/dfaf34e))
- **modal:** better backdrop clickout handling
  ([#2597](https://github.com/bootstrap-vue/bootstrap-vue/issues/2597))
  ([#2608](https://github.com/bootstrap-vue/bootstrap-vue/issues/2608))
  ([11c7524](https://github.com/bootstrap-vue/bootstrap-vue/commit/11c7524))
- **nuxt plugin:** fix typo with bootstrap vue css import properties
  ([#2618](https://github.com/bootstrap-vue/bootstrap-vue/issues/2618))
  ([8581090](https://github.com/bootstrap-vue/bootstrap-vue/commit/8581090))
- **utils/get:** handle case where passed object is undefined
  ([#2623](https://github.com/bootstrap-vue/bootstrap-vue/issues/2623))
  ([#2624](https://github.com/bootstrap-vue/bootstrap-vue/issues/2624))
  ([eb07b19](https://github.com/bootstrap-vue/bootstrap-vue/commit/eb07b19))
- **utils/loose-equal:** Make `looseEqual()` util handle File object comparison correctly
  ([#2640](https://github.com/bootstrap-vue/bootstrap-vue/issues/2640))
  ([401d3e9](https://github.com/bootstrap-vue/bootstrap-vue/commit/401d3e9))
- Fix Html casing for props ([#2594](https://github.com/bootstrap-vue/bootstrap-vue/issues/2594))
  ([3772bf5](https://github.com/bootstrap-vue/bootstrap-vue/commit/3772bf5))
- Temporary fix for validation icon positioning
  ([#2599](https://github.com/bootstrap-vue/bootstrap-vue/issues/2599))
  ([#2607](https://github.com/bootstrap-vue/bootstrap-vue/issues/2607))
  ([7168989](https://github.com/bootstrap-vue/bootstrap-vue/commit/7168989))

### Features v2.0.0-rc.13

- **forms:** add state prop to invalid and valid feedback + docs update
  ([#2611](https://github.com/bootstrap-vue/bootstrap-vue/issues/2611))
  ([9df8dac](https://github.com/bootstrap-vue/bootstrap-vue/commit/9df8dac))
- **nuxt:** module improvements
  ([#2593](https://github.com/bootstrap-vue/bootstrap-vue/issues/2593))
  ([0795fea](https://github.com/bootstrap-vue/bootstrap-vue/commit/0795fea))
- **table:** add support for scoped empty slots
  ([#2641](https://github.com/bootstrap-vue/bootstrap-vue/issues/2641))
  ([7917557](https://github.com/bootstrap-vue/bootstrap-vue/commit/7917557))
- **table:** don't show empty row slot if table busy and busy slot provided
  ([#2565](https://github.com/bootstrap-vue/bootstrap-vue/issues/2565))
  ([#2572](https://github.com/bootstrap-vue/bootstrap-vue/issues/2572))
  ([6fd31a4](https://github.com/bootstrap-vue/bootstrap-vue/commit/6fd31a4))

<a name="2.0.0-rc.12"></a>

## [v2.0.0-rc.12](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.11...v2.0.0-rc.12)

Released: (2019-02-14)

### Bug Fixes v2.0.0-rc.12

- **alert:** target custom transition CSS to the alert component
  ([#2205](https://github.com/bootstrap-vue/bootstrap-vue/issues/2205))
  ([0a48268](https://github.com/bootstrap-vue/bootstrap-vue/commit/0a48268))
- **b-img-lazy:** better initial inView check + new show prop
  ([#1755](https://github.com/bootstrap-vue/bootstrap-vue/issues/1755))
  ([#2382](https://github.com/bootstrap-vue/bootstrap-vue/issues/2382))
  ([2416bad](https://github.com/bootstrap-vue/bootstrap-vue/commit/2416bad))
- **breadcrumb-item:** correctly set domProps when no children provided
  ([523e3a2](https://github.com/bootstrap-vue/bootstrap-vue/commit/523e3a2))
- **breadcrumb-link:** correctly use html/text
  ([8b086a9](https://github.com/bootstrap-vue/bootstrap-vue/commit/8b086a9))
- **card:** Drop `img-fluid` property
  ([#2548](https://github.com/bootstrap-vue/bootstrap-vue/issues/2548))
  ([cfc685f](https://github.com/bootstrap-vue/bootstrap-vue/commit/cfc685f))
- **card:** fix card and sub component render issues.
  ([#2062](https://github.com/bootstrap-vue/bootstrap-vue/issues/2062))
  ([#2125](https://github.com/bootstrap-vue/bootstrap-vue/issues/2125))
  ([430371f](https://github.com/bootstrap-vue/bootstrap-vue/commit/430371f))
- **carousel:** setInterval memory leak when no slides provided
  ([#2399](https://github.com/bootstrap-vue/bootstrap-vue/issues/2399))
  ([ac2a708](https://github.com/bootstrap-vue/bootstrap-vue/commit/ac2a708))
- **ci:** remove test-beta
  ([1076f3f](https://github.com/bootstrap-vue/bootstrap-vue/commit/1076f3f))
- **ci:** remove test-beta
  ([0fec992](https://github.com/bootstrap-vue/bootstrap-vue/commit/0fec992))
- **ci:** test on current vue
  ([e3282bd](https://github.com/bootstrap-vue/bootstrap-vue/commit/e3282bd))
- **collapse:** when is-nav, do better checking of click events
  ([#2222](https://github.com/bootstrap-vue/bootstrap-vue/issues/2222))
  ([#2225](https://github.com/bootstrap-vue/bootstrap-vue/issues/2225))
  ([8b96e1e](https://github.com/bootstrap-vue/bootstrap-vue/commit/8b96e1e))
- **collapse/toggle:** "collapsed" class cleared when component updated
  ([#2102](https://github.com/bootstrap-vue/bootstrap-vue/issues/2102))
  ([#1798](https://github.com/bootstrap-vue/bootstrap-vue/issues/1798))
  ([6d33cae](https://github.com/bootstrap-vue/bootstrap-vue/commit/6d33cae))
- **dependencies:** replace opencollective with opencollective-postintall
  ([#2067](https://github.com/bootstrap-vue/bootstrap-vue/issues/2067))
  ([fa26882](https://github.com/bootstrap-vue/bootstrap-vue/commit/fa26882))
- **docs:** Updaate links to bootstrap v4.3 docs
  ([b5d5499](https://github.com/bootstrap-vue/bootstrap-vue/commit/b5d5499))
- **docs:** Button - fix typo ([#1962](https://github.com/bootstrap-vue/bootstrap-vue/issues/1962))
  ([dcbfcf9](https://github.com/bootstrap-vue/bootstrap-vue/commit/dcbfcf9))
- **docs:** change b-input-group attribute 'left' to 'prepend'
  ([#2017](https://github.com/bootstrap-vue/bootstrap-vue/issues/2017))
  ([d471502](https://github.com/bootstrap-vue/bootstrap-vue/commit/d471502))
- **docs:** Collapse - typo fix
  ([#1964](https://github.com/bootstrap-vue/bootstrap-vue/issues/1964))
  ([becaa98](https://github.com/bootstrap-vue/bootstrap-vue/commit/becaa98))
- **docs:** create local marked-loader.js
  ([#2380](https://github.com/bootstrap-vue/bootstrap-vue/issues/2380))
  ([06cfb47](https://github.com/bootstrap-vue/bootstrap-vue/commit/06cfb47))
- **docs:** Embed - fix typos ([#1965](https://github.com/bootstrap-vue/bootstrap-vue/issues/1965))
  ([ae7101e](https://github.com/bootstrap-vue/bootstrap-vue/commit/ae7101e))
- **docs:** Fix broken examples
  ([1d599a5](https://github.com/bootstrap-vue/bootstrap-vue/commit/1d599a5))
- **docs:** Fix broken links. ([#2517](https://github.com/bootstrap-vue/bootstrap-vue/issues/2517))
  ([#2528](https://github.com/bootstrap-vue/bootstrap-vue/issues/2528))
  ([c4b7e1e](https://github.com/bootstrap-vue/bootstrap-vue/commit/c4b7e1e))
- **docs:** Fix console errors and improve `play` directive
  ([#2176](https://github.com/bootstrap-vue/bootstrap-vue/issues/2176))
  ([cc02130](https://github.com/bootstrap-vue/bootstrap-vue/commit/cc02130))
- **docs:** fix issue with playground export button and improved error catching
  ([#2197](https://github.com/bootstrap-vue/bootstrap-vue/issues/2197))
  ([c69ffbc](https://github.com/bootstrap-vue/bootstrap-vue/commit/c69ffbc))
- **docs:** fix modal docs typo
  ([#2507](https://github.com/bootstrap-vue/bootstrap-vue/issues/2507))
  ([524db85](https://github.com/bootstrap-vue/bootstrap-vue/commit/524db85))
- **docs:** fix playground hang issues.
  ([#1843](https://github.com/bootstrap-vue/bootstrap-vue/issues/1843))
  ([#2177](https://github.com/bootstrap-vue/bootstrap-vue/issues/2177))
  ([5bdc2e6](https://github.com/bootstrap-vue/bootstrap-vue/commit/5bdc2e6))
- **docs:** fix typo in collapse events doc
  ([d8f5d69](https://github.com/bootstrap-vue/bootstrap-vue/commit/d8f5d69))
- **docs:** fixes broken styling of docs navigation
  ([#1911](https://github.com/bootstrap-vue/bootstrap-vue/issues/1911))
  ([95a5012](https://github.com/bootstrap-vue/bootstrap-vue/commit/95a5012))
- **docs:** guarantee css load order
  ([#2274](https://github.com/bootstrap-vue/bootstrap-vue/issues/2274))
  ([8841f6b](https://github.com/bootstrap-vue/bootstrap-vue/commit/8841f6b))
- **docs:** improve CSS load ordering
  ([#2255](https://github.com/bootstrap-vue/bootstrap-vue/issues/2255))
  ([e193362](https://github.com/bootstrap-vue/bootstrap-vue/commit/e193362))
- **docs:** fix input group prepend slot typo
  ([#2059](https://github.com/bootstrap-vue/bootstrap-vue/issues/2059))
  ([3c3cd8d](https://github.com/bootstrap-vue/bootstrap-vue/commit/3c3cd8d))
- **docs:** Layout - fix typo ([#1966](https://github.com/bootstrap-vue/bootstrap-vue/issues/1966))
  ([c5a37d3](https://github.com/bootstrap-vue/bootstrap-vue/commit/c5a37d3))
- **docs:** missing dash and typo fix
  ([#1850](https://github.com/bootstrap-vue/bootstrap-vue/issues/1850))
  ([7b5fde8](https://github.com/bootstrap-vue/bootstrap-vue/commit/7b5fde8))
- **docs:** typo fix ([#2009](https://github.com/bootstrap-vue/bootstrap-vue/issues/2009))
  ([9e0eb67](https://github.com/bootstrap-vue/bootstrap-vue/commit/9e0eb67))
- **docs:** Update links to Bootstrap v4.2
  ([#2370](https://github.com/bootstrap-vue/bootstrap-vue/issues/2370))
  ([470a083](https://github.com/bootstrap-vue/bootstrap-vue/commit/470a083))
- **docs:** vue-loader v15 changes
  ([#2005](https://github.com/bootstrap-vue/bootstrap-vue/issues/2005))
  ([449a712](https://github.com/bootstrap-vue/bootstrap-vue/commit/449a712))
- **dropdown:** Add back missing `click` events
  ([#2460](https://github.com/bootstrap-vue/bootstrap-vue/issues/2460))
  ([c5d858f](https://github.com/bootstrap-vue/bootstrap-vue/commit/c5d858f))
- **dropdown:** add missing TAB keyCode.
  ([#1577](https://github.com/bootstrap-vue/bootstrap-vue/issues/1577)
  ([#2140](https://github.com/bootstrap-vue/bootstrap-vue/issues/2140))
  ([5e5c5c9](https://github.com/bootstrap-vue/bootstrap-vue/commit/5e5c5c9))
- **dropdown:** focus menu container before emitting shown event.
  ([#2520](https://github.com/bootstrap-vue/bootstrap-vue/issues/2520))
  ([#2527](https://github.com/bootstrap-vue/bootstrap-vue/issues/2527))
  ([1649c00](https://github.com/bootstrap-vue/bootstrap-vue/commit/1649c00))
- **dropdown:** fix item click event timing
  ([#2251](https://github.com/bootstrap-vue/bootstrap-vue/issues/2251))
  ([e620e07](https://github.com/bootstrap-vue/bootstrap-vue/commit/e620e07))
- **dropdown:** Menu focusout close handling
  ([#2252](https://github.com/bootstrap-vue/bootstrap-vue/issues/2252))
  ([1853954](https://github.com/bootstrap-vue/bootstrap-vue/commit/1853954))
- **dropdown:** fix typo in README
  ([#1939](https://github.com/bootstrap-vue/bootstrap-vue/issues/1939))
  ([#1942](https://github.com/bootstrap-vue/bootstrap-vue/issues/1942))
  ([8a2ca5e](https://github.com/bootstrap-vue/bootstrap-vue/commit/8a2ca5e))
- **dropdown:** Use custom CSS for `no-caret` option
  ([#1473](https://github.com/bootstrap-vue/bootstrap-vue/issues/1473))
  ([#2136](https://github.com/bootstrap-vue/bootstrap-vue/issues/2136))
  ([2eb706f](https://github.com/bootstrap-vue/bootstrap-vue/commit/2eb706f))
- **dropdown-item-button:** Add support for `active` state
  ([#2212](https://github.com/bootstrap-vue/bootstrap-vue/issues/2212))
  ([4b9e6c0](https://github.com/bootstrap-vue/bootstrap-vue/commit/4b9e6c0))
- **dropdown, button, link:** various bug fixes and aria fixes
  ([#1814](https://github.com/bootstrap-vue/bootstrap-vue/issues/1814))
  ([#1817](https://github.com/bootstrap-vue/bootstrap-vue/issues/1817))
  ([#2159](https://github.com/bootstrap-vue/bootstrap-vue/issues/2159))
  ([e79270d](https://github.com/bootstrap-vue/bootstrap-vue/commit/e79270d))
- **fom-input:** revert changes from PR
  [#1841](https://github.com/bootstrap-vue/bootstrap-vue/issues/1841)
  ([#2174](https://github.com/bootstrap-vue/bootstrap-vue/issues/2174))
  ([aacc7c0](https://github.com/bootstrap-vue/bootstrap-vue/commit/aacc7c0))
- **form-control:** remove interim class fixes from bootstrap 4.0.x
  ([#1896](https://github.com/bootstrap-vue/bootstrap-vue/issues/1896))
  ([#2265](https://github.com/bootstrap-vue/bootstrap-vue/issues/2265))
  ([64bdf69](https://github.com/bootstrap-vue/bootstrap-vue/commit/64bdf69))
- **form-file:** fix `input` event loop on `reset()` in multiple mode
  ([#2289](https://github.com/bootstrap-vue/bootstrap-vue/issues/2289))
  ([f483c7b](https://github.com/bootstrap-vue/bootstrap-vue/commit/f483c7b))
- **form-file:** Add prop to allow customization of browse button text
  ([#2143](https://github.com/bootstrap-vue/bootstrap-vue/issues/2143))
  ([#2168](https://github.com/bootstrap-vue/bootstrap-vue/issues/2168))
  ([56c26da](https://github.com/bootstrap-vue/bootstrap-vue/commit/56c26da))
- **form-file:** fix drag and drop feature
  ([#2169](https://github.com/bootstrap-vue/bootstrap-vue/issues/2169))
  ([07bfc29](https://github.com/bootstrap-vue/bootstrap-vue/commit/07bfc29))
- **form-file:** fix issue with "accept" values
  ([#1526](https://github.com/bootstrap-vue/bootstrap-vue/issues/1526))
  ([#2008](https://github.com/bootstrap-vue/bootstrap-vue/issues/2008))
  ([963d478](https://github.com/bootstrap-vue/bootstrap-vue/commit/963d478))
- **form-group:** add missing disabled prop
  ([#2106](https://github.com/bootstrap-vue/bootstrap-vue/issues/2106))
  ([#1798](https://github.com/bootstrap-vue/bootstrap-vue/issues/1798))
  ([4971c06](https://github.com/bootstrap-vue/bootstrap-vue/commit/4971c06))
- **form-group:** allow label alignment on label when not horizontal
  ([#2284](https://github.com/bootstrap-vue/bootstrap-vue/issues/2284))
  ([c306b18](https://github.com/bootstrap-vue/bootstrap-vue/commit/c306b18))
- **form-input:** bug fixes and add new features
  ([#2100](https://github.com/bootstrap-vue/bootstrap-vue/issues/2100))
  ([0299159](https://github.com/bootstrap-vue/bootstrap-vue/commit/0299159))
- **form-input:** custom-range style adjustments
  ([#2122](https://github.com/bootstrap-vue/bootstrap-vue/issues/2122))
  ([1917c15](https://github.com/bootstrap-vue/bootstrap-vue/commit/1917c15))
- **form-state:** explicitly handle when state is set to empty string.
  ([#2166](https://github.com/bootstrap-vue/bootstrap-vue/issues/2166))
  ([#2167](https://github.com/bootstrap-vue/bootstrap-vue/issues/2167))
  ([805a7fe](https://github.com/bootstrap-vue/bootstrap-vue/commit/805a7fe))
- **input-group:** Fix size styling issues for input types range and color
  ([3ba1230](https://github.com/bootstrap-vue/bootstrap-vue/commit/3ba1230))
- **input-group:** Minor fixes and documentation update
  ([#2128](https://github.com/bootstrap-vue/bootstrap-vue/issues/2128))
  ([afe1cd0](https://github.com/bootstrap-vue/bootstrap-vue/commit/afe1cd0))
- **input-group:** Styling fix for dropdowns, radio and checkbox groups
  ([#2114](https://github.com/bootstrap-vue/bootstrap-vue/issues/2114)
  ([#1560](https://github.com/bootstrap-vue/bootstrap-vue/issues/1560)
  ([#2118](https://github.com/bootstrap-vue/bootstrap-vue/issues/2118))
  ([ed31bcd](https://github.com/bootstrap-vue/bootstrap-vue/commit/ed31bcd))
- **link:** use `active` class when manually placed into active state
  ([#2405](https://github.com/bootstrap-vue/bootstrap-vue/issues/2405))
  ([8f13ede](https://github.com/bootstrap-vue/bootstrap-vue/commit/8f13ede))
- **list-group-item:** set button type to 'button' when button in mode or tag=button
  ([#2192](https://github.com/bootstrap-vue/bootstrap-vue/issues/2192))
  ([#2194](https://github.com/bootstrap-vue/bootstrap-vue/issues/2194))
  ([4322ccb](https://github.com/bootstrap-vue/bootstrap-vue/commit/4322ccb))
- **modal:** better enforce focus handler
  ([#2215](https://github.com/bootstrap-vue/bootstrap-vue/issues/2215))
  ([9628de2](https://github.com/bootstrap-vue/bootstrap-vue/commit/9628de2))
- **modal:** clear modal paddingLeft and paddingRight if no Scrollbar in adjustDialog()
  ([#2050](https://github.com/bootstrap-vue/bootstrap-vue/issues/2050))
  ([80f1d6e](https://github.com/bootstrap-vue/bootstrap-vue/commit/80f1d6e))
- **modal:** handle edge cases where modal is shown/hidden in rapid succession
  ([#2236](https://github.com/bootstrap-vue/bootstrap-vue/issues/2236))
  ([#2270](https://github.com/bootstrap-vue/bootstrap-vue/issues/2270))
  ([e4a7bab](https://github.com/bootstrap-vue/bootstrap-vue/commit/e4a7bab))
- **modal:** Handle enforce focus when modals are stacked
  ([#2175](https://github.com/bootstrap-vue/bootstrap-vue/issues/2175))
  ([#2211](https://github.com/bootstrap-vue/bootstrap-vue/issues/2211))
  ([7d768d1](https://github.com/bootstrap-vue/bootstrap-vue/commit/7d768d1))
- **modal:** prevent scrolling on .modal-content focus
  ([#1748](https://github.com/bootstrap-vue/bootstrap-vue/issues/1748)
  ([#2060](https://github.com/bootstrap-vue/bootstrap-vue/issues/2060))
  ([df9efad](https://github.com/bootstrap-vue/bootstrap-vue/commit/df9efad))
- **modal:** Show/Hide when once prevented
  ([#2275](https://github.com/bootstrap-vue/bootstrap-vue/issues/2275))
  ([9758dfd](https://github.com/bootstrap-vue/bootstrap-vue/commit/9758dfd))
- **nav-item-dropdown:** close menu when clicked outside
  ([#2202](https://github.com/bootstrap-vue/bootstrap-vue/issues/2202))
  ([#2198](https://github.com/bootstrap-vue/bootstrap-vue/issues/2198))
  ([9e3e33e](https://github.com/bootstrap-vue/bootstrap-vue/commit/9e3e33e))
- **navbar:** Support always expanded navbar
  ([#2209](https://github.com/bootstrap-vue/bootstrap-vue/issues/2209))
  ([#2210](https://github.com/bootstrap-vue/bootstrap-vue/issues/2210))
  ([7c3737c](https://github.com/bootstrap-vue/bootstrap-vue/commit/7c3737c))
- **observe-dom:** fix comment typo
  ([#2084](https://github.com/bootstrap-vue/bootstrap-vue/issues/2084))
  ([8b41913](https://github.com/bootstrap-vue/bootstrap-vue/commit/8b41913))
- **package.json:** prevent css and scss from being tree shaken out in docs
  ([#2271](https://github.com/bootstrap-vue/bootstrap-vue/issues/2271))
  ([44fd864](https://github.com/bootstrap-vue/bootstrap-vue/commit/44fd864))
- **package.json:** flag most of bootstrap-vue as being side effect free
  ([#2268](https://github.com/bootstrap-vue/bootstrap-vue/issues/2268))
  ([5a77532](https://github.com/bootstrap-vue/bootstrap-vue/commit/5a77532))
- **pagination:** adjust aria label defaults
  ([#2508](https://github.com/bootstrap-vue/bootstrap-vue/issues/2508))
  ([#2529](https://github.com/bootstrap-vue/bootstrap-vue/issues/2529))
  ([9790dc2](https://github.com/bootstrap-vue/bootstrap-vue/commit/9790dc2))
- **pagination:** fix component name in `package.json`
  ([#2541](https://github.com/bootstrap-vue/bootstrap-vue/issues/2541))
  ([331dc46](https://github.com/bootstrap-vue/bootstrap-vue/commit/331dc46))
- **pagination:** fix escaped chars
  ([#2479](https://github.com/bootstrap-vue/bootstrap-vue/issues/2479))
  ([1efd59c](https://github.com/bootstrap-vue/bootstrap-vue/commit/1efd59c))
- **pagination:** set default total rows to 0
  ([#2498](https://github.com/bootstrap-vue/bootstrap-vue/issues/2498))
  ([#2526](https://github.com/bootstrap-vue/bootstrap-vue/issues/2526))
  ([c3227a6](https://github.com/bootstrap-vue/bootstrap-vue/commit/c3227a6))
- **pagination pagination-nav:** v-model active class fix + keypress click fix
  ([#1985](https://github.com/bootstrap-vue/bootstrap-vue/issues/1985))
  ([#1629](https://github.com/bootstrap-vue/bootstrap-vue/issues/1629))
  ([#2299](https://github.com/bootstrap-vue/bootstrap-vue/issues/2299))
  ([9afba6c](https://github.com/bootstrap-vue/bootstrap-vue/commit/9afba6c))
- **popover:** Add directive to component plugin
  ([#2115](https://github.com/bootstrap-vue/bootstrap-vue/issues/2115))
  ([e39a855](https://github.com/bootstrap-vue/bootstrap-vue/commit/e39a855))
- **popover:** fixes close emit argument
  ([#1937](https://github.com/bootstrap-vue/bootstrap-vue/issues/1937))
  ([8b9db28](https://github.com/bootstrap-vue/bootstrap-vue/commit/8b9db28))
- **router-link:** remove default values for active-class and exact-active-class
  ([#2387](https://github.com/bootstrap-vue/bootstrap-vue/issues/2387))
  ([#2388](https://github.com/bootstrap-vue/bootstrap-vue/issues/2388))
  ([e3e30b8](https://github.com/bootstrap-vue/bootstrap-vue/commit/e3e30b8))
- **safeId:** trigger id creation/update after mount
  ([#1978](https://github.com/bootstrap-vue/bootstrap-vue/issues/1978))
  ([#2161](https://github.com/bootstrap-vue/bootstrap-vue/issues/2161))
  ([48218fe](https://github.com/bootstrap-vue/bootstrap-vue/commit/48218fe))
- **scss:** import input-group.scss once at most
  ([#2239](https://github.com/bootstrap-vue/bootstrap-vue/issues/2239))
  ([2e7dcfa](https://github.com/bootstrap-vue/bootstrap-vue/commit/2e7dcfa))
- **select:** Wait for the v-model value to update before emitting change event on form select
  ([#2207](https://github.com/bootstrap-vue/bootstrap-vue/issues/2207))
  ([7a860ee](https://github.com/bootstrap-vue/bootstrap-vue/commit/7a860ee))
- **tab:** fix typo aria-lablelledby
  ([#1959](https://github.com/bootstrap-vue/bootstrap-vue/issues/1959))
  ([#954](https://github.com/bootstrap-vue/bootstrap-vue/issues/954)
  ([5933955](https://github.com/bootstrap-vue/bootstrap-vue/commit/5933955))
- **table:** allow filtering on false values and sorting date objects
  ([#2485](https://github.com/bootstrap-vue/bootstrap-vue/issues/2485))
  ([#2544](https://github.com/bootstrap-vue/bootstrap-vue/issues/2544))
  ([79315d6](https://github.com/bootstrap-vue/bootstrap-vue/commit/79315d6))
- **table:** Clear selection when data change
  ([#2267](https://github.com/bootstrap-vue/bootstrap-vue/issues/2267))
  ([e381f38](https://github.com/bootstrap-vue/bootstrap-vue/commit/e381f38))
- **table:** Emit v-model input event only when computedItems changes
  ([#2231](https://github.com/bootstrap-vue/bootstrap-vue/issues/2231))
  ([#2254](https://github.com/bootstrap-vue/bootstrap-vue/issues/2254))
  ([f0fb9af](https://github.com/bootstrap-vue/bootstrap-vue/commit/f0fb9af))
- **table:** fix filtered event, fix emptyFilter message w/filter function, fix reactivity of filter
  sub routines, fix empty header label accessibility issue
  ([#1989](https://github.com/bootstrap-vue/bootstrap-vue/issues/1989))
  ([#1517](https://github.com/bootstrap-vue/bootstrap-vue/issues/1517))
  ([#2149](https://github.com/bootstrap-vue/bootstrap-vue/issues/2149))
  ([e0e1eee](https://github.com/bootstrap-vue/bootstrap-vue/commit/e0e1eee))
- **table:** generate TR key using serialized item or primary key if provided
  ([#2410](https://github.com/bootstrap-vue/bootstrap-vue/issues/2410))
  ([#2416](https://github.com/bootstrap-vue/bootstrap-vue/issues/2416))
  ([6e22d99](https://github.com/bootstrap-vue/bootstrap-vue/commit/6e22d99))
- **table:** only call provider once DOM is fully updated
  ([#1904](https://github.com/bootstrap-vue/bootstrap-vue/issues/1904))
  ([#1955](https://github.com/bootstrap-vue/bootstrap-vue/issues/1955))
  ([ae7147e](https://github.com/bootstrap-vue/bootstrap-vue/commit/ae7147e))
- **table:** Preserve aria-rowcount and aria-describedby if provided
  ([#1801](https://github.com/bootstrap-vue/bootstrap-vue/issues/1801))
  ([#2195](https://github.com/bootstrap-vue/bootstrap-vue/issues/2195))
  ([e0cdca0](https://github.com/bootstrap-vue/bootstrap-vue/commit/e0cdca0))
- **table:** return empty string if cell value is null or undefined
  ([#1502](https://github.com/bootstrap-vue/bootstrap-vue/issues/1502))
  ([#2139](https://github.com/bootstrap-vue/bootstrap-vue/issues/2139))
  ([b62f8f4](https://github.com/bootstrap-vue/bootstrap-vue/commit/b62f8f4))
- **table:** selectable range mode update and minor fixes
  ([#2326](https://github.com/bootstrap-vue/bootstrap-vue/issues/2326))
  ([ef281d1](https://github.com/bootstrap-vue/bootstrap-vue/commit/ef281d1))
- **tabs:** fix `tabIndex` prop type
  ([#2459](https://github.com/bootstrap-vue/bootstrap-vue/issues/2459))
  ([05ef65a](https://github.com/bootstrap-vue/bootstrap-vue/commit/05ef65a))
- **tabs:** Emit click on b-tab instance when button clicked
  ([#2512](https://github.com/bootstrap-vue/bootstrap-vue/issues/2512))
  ([#2530](https://github.com/bootstrap-vue/bootstrap-vue/issues/2530))
  ([8e129a3](https://github.com/bootstrap-vue/bootstrap-vue/commit/8e129a3))
- **tabs:** Fix tab titleLinkClass and titleItemClass handling
  ([#2448](https://github.com/bootstrap-vue/bootstrap-vue/issues/2448))
  ([36400f5](https://github.com/bootstrap-vue/bootstrap-vue/commit/36400f5))
- **tabs:** various fixes and improvements
  ([#2327](https://github.com/bootstrap-vue/bootstrap-vue/issues/2327))
  ([#2148](https://github.com/bootstrap-vue/bootstrap-vue/issues/2148))
  ([#2403](https://github.com/bootstrap-vue/bootstrap-vue/issues/2403))
  ([#2180](https://github.com/bootstrap-vue/bootstrap-vue/issues/2180))
  ([#2442](https://github.com/bootstrap-vue/bootstrap-vue/issues/2442))
  ([de11a8f](https://github.com/bootstrap-vue/bootstrap-vue/commit/de11a8f))
- **toolpop mixin:** allow boundary type to be HTMLElement
  ([#2229](https://github.com/bootstrap-vue/bootstrap-vue/issues/2229))
  ([#2233](https://github.com/bootstrap-vue/bootstrap-vue/issues/2233))
  ([8b8272b](https://github.com/bootstrap-vue/bootstrap-vue/commit/8b8272b))
- **tooltip docs** typo corrected in tooltips
  ([#1930](https://github.com/bootstrap-vue/bootstrap-vue/issues/1930))
  ([5e4fbe4](https://github.com/bootstrap-vue/bootstrap-vue/commit/5e4fbe4))
- **tooltip:** Add directive to component plugin
  ([#2116](https://github.com/bootstrap-vue/bootstrap-vue/issues/2116))
  ([e5bb09e](https://github.com/bootstrap-vue/bootstrap-vue/commit/e5bb09e))
- **utils/loose-equal:** check dates in looseEqual util
  ([#2123](https://github.com/bootstrap-vue/bootstrap-vue/issues/2123))
  ([8a8d0f0](https://github.com/bootstrap-vue/bootstrap-vue/commit/8a8d0f0))
- relax prop type checks to prevent vue warns
  ([835eccf](https://github.com/bootstrap-vue/bootstrap-vue/commit/835eccf))
- typo in form-radio watcher ([#1943](https://github.com/bootstrap-vue/bootstrap-vue/issues/1943))
  ([9ab23ef](https://github.com/bootstrap-vue/bootstrap-vue/commit/9ab23ef))
- use stable nuxt opencollective
  ([#1885](https://github.com/bootstrap-vue/bootstrap-vue/issues/1885))
  ([876f4a1](https://github.com/bootstrap-vue/bootstrap-vue/commit/876f4a1))

### Features v2.0.0-rc.12

- **breadcrumb-link:** support html
  ([#2522](https://github.com/bootstrap-vue/bootstrap-vue/issues/2522))
  ([c2ee63e](https://github.com/bootstrap-vue/bootstrap-vue/commit/c2ee63e))
- **build:** replace uglify-es with terser
  ([#2238](https://github.com/bootstrap-vue/bootstrap-vue/issues/2238))
  ([bd95ad8](https://github.com/bootstrap-vue/bootstrap-vue/commit/bd95ad8))
- **button:** Make button tag configurable
  ([#1929](https://github.com/bootstrap-vue/bootstrap-vue/issues/1929))
  ([afcadd9](https://github.com/bootstrap-vue/bootstrap-vue/commit/afcadd9))
- **card:** include custom styles for card-img-left and card-img-right
  ([#2292](https://github.com/bootstrap-vue/bootstrap-vue/issues/2292))
  ([a72d494](https://github.com/bootstrap-vue/bootstrap-vue/commit/a72d494))
- **card:** new helper sub-components
  ([#2375](https://github.com/bootstrap-vue/bootstrap-vue/issues/2375))
  ([ff25314](https://github.com/bootstrap-vue/bootstrap-vue/commit/ff25314))
- **card:** support left and right image placement
  ([#1981](https://github.com/bootstrap-vue/bootstrap-vue/issues/1981))
  ([66194a6](https://github.com/bootstrap-vue/bootstrap-vue/commit/66194a6))
- **carousel:** add support for swipe on touch screens
  ([#2409](https://github.com/bootstrap-vue/bootstrap-vue/issues/2409))
  ([46a6763](https://github.com/bootstrap-vue/bootstrap-vue/commit/46a6763))
- **carousel:** support crossfade animation
  ([#2406](https://github.com/bootstrap-vue/bootstrap-vue/issues/2406))
  ([15d8a2c](https://github.com/bootstrap-vue/bootstrap-vue/commit/15d8a2c))
- **carousel:** use provide and inject for sub-component communication
  ([#2407](https://github.com/bootstrap-vue/bootstrap-vue/issues/2407))
  ([7f92318](https://github.com/bootstrap-vue/bootstrap-vue/commit/7f92318))
- **css:** create SCSS versions of CSS
  ([#2218](https://github.com/bootstrap-vue/bootstrap-vue/issues/2218))
  ([d6ba6db](https://github.com/bootstrap-vue/bootstrap-vue/commit/d6ba6db))
- **css:** Add SCSS support ([#2201](https://github.com/bootstrap-vue/bootstrap-vue/issues/2201))
  ([#2221](https://github.com/bootstrap-vue/bootstrap-vue/issues/2221))
  ([f8326a2](https://github.com/bootstrap-vue/bootstrap-vue/commit/f8326a2))
- **docs:** Allow sub-components to show reference info for slots and events
  ([#2132](https://github.com/bootstrap-vue/bootstrap-vue/issues/2132))
  ([52c960b](https://github.com/bootstrap-vue/bootstrap-vue/commit/52c960b))
- **docs:** conditionally load babel-standalone only on browsers that need transpilation
  ([#2294](https://github.com/bootstrap-vue/bootstrap-vue/issues/2294))
  ([1578732](https://github.com/bootstrap-vue/bootstrap-vue/commit/1578732))
- **docs:** Improve code example markup and prettier integration
  ([#2440](https://github.com/bootstrap-vue/bootstrap-vue/issues/2440))
  ([74ad932](https://github.com/bootstrap-vue/bootstrap-vue/commit/74ad932))
- **docs:** Prettify with `prettier`
  ([#2427](https://github.com/bootstrap-vue/bootstrap-vue/issues/2427))
  ([9463138](https://github.com/bootstrap-vue/bootstrap-vue/commit/9463138))
- **docs:** use babel-standalone in playground/v-play to support IE
  ([#2286](https://github.com/bootstrap-vue/bootstrap-vue/issues/2286))
  ([46f8d4b](https://github.com/bootstrap-vue/bootstrap-vue/commit/46f8d4b))
- **dropdown:** support 'href', 'to' and 'variant' in split button mode
  ([#1960](https://github.com/bootstrap-vue/bootstrap-vue/issues/1960))
  ([#2301](https://github.com/bootstrap-vue/bootstrap-vue/issues/2301))
  ([31b7d19](https://github.com/bootstrap-vue/bootstrap-vue/commit/31b7d19))
- **dropdown:** support for form controls and free flow text
  ([#2434](https://github.com/bootstrap-vue/bootstrap-vue/issues/2434))
  ([7e8a2d5](https://github.com/bootstrap-vue/bootstrap-vue/commit/7e8a2d5))
- **dropdown:** use provide and inject
  ([#2431](https://github.com/bootstrap-vue/bootstrap-vue/issues/2431))
  ([3df90ea](https://github.com/bootstrap-vue/bootstrap-vue/commit/3df90ea))
- **dropdown:** Add `dropright` and `dropleft` direction support
  ([#2117](https://github.com/bootstrap-vue/bootstrap-vue/issues/2117))
  ([#2108](https://github.com/bootstrap-vue/bootstrap-vue/issues/2108)
  ([e186639](https://github.com/bootstrap-vue/bootstrap-vue/commit/e186639))
- **form-checkbox:** support custom switch styling
  ([#2293](https://github.com/bootstrap-vue/bootstrap-vue/issues/2293))
  ([3508ea2](https://github.com/bootstrap-vue/bootstrap-vue/commit/3508ea2))
- **form-file:** reset file input when value set to null or empty string
  ([#2170](https://github.com/bootstrap-vue/bootstrap-vue/issues/2170))
  ([ab44375](https://github.com/bootstrap-vue/bootstrap-vue/commit/ab44375))
- **form-group:** Add multiple breakpoint support for label
  ([#2230](https://github.com/bootstrap-vue/bootstrap-vue/issues/2230))
  ([#2258](https://github.com/bootstrap-vue/bootstrap-vue/issues/2258))
  ([5e453f9](https://github.com/bootstrap-vue/bootstrap-vue/commit/5e453f9))
- **form-input:** initial SCSS file
  ([#2217](https://github.com/bootstrap-vue/bootstrap-vue/issues/2217))
  ([923d20b](https://github.com/bootstrap-vue/bootstrap-vue/commit/923d20b))
- **form-input:** support custom-range input + validation and input styles
  ([#2120](https://github.com/bootstrap-vue/bootstrap-vue/issues/2120))
  ([013a737](https://github.com/bootstrap-vue/bootstrap-vue/commit/013a737))
- **form-input:** Use new form-text mixin and add trim and number modifiers
  ([#2204](https://github.com/bootstrap-vue/bootstrap-vue/issues/2204))
  ([3c9936e](https://github.com/bootstrap-vue/bootstrap-vue/commit/3c9936e))
- **form-radio-check:** migrate to using provide/inject, add inline props
  ([#2241](https://github.com/bootstrap-vue/bootstrap-vue/issues/2241))
  ([c0a68d5](https://github.com/bootstrap-vue/bootstrap-vue/commit/c0a68d5))
- **form-select:** Expose focus and blur methods
  ([#2237](https://github.com/bootstrap-vue/bootstrap-vue/issues/2237))
  ([#2257](https://github.com/bootstrap-vue/bootstrap-vue/issues/2257))
  ([ded7679](https://github.com/bootstrap-vue/bootstrap-vue/commit/ded7679))
- **forms:** add form prop to all inputs
  ([#2154](https://github.com/bootstrap-vue/bootstrap-vue/issues/2154))
  ([#2172](https://github.com/bootstrap-vue/bootstrap-vue/issues/2172))
  ([6009d72](https://github.com/bootstrap-vue/bootstrap-vue/commit/6009d72))
- **forms:** add support for tooltip-style feedback text
  ([#2188](https://github.com/bootstrap-vue/bootstrap-vue/issues/2188))
  ([5203436](https://github.com/bootstrap-vue/bootstrap-vue/commit/5203436))
- **link:** Add support for nuxt-link
  ([#2384](https://github.com/bootstrap-vue/bootstrap-vue/issues/2384))
  ([4bd462a](https://github.com/bootstrap-vue/bootstrap-vue/commit/4bd462a))
- **list-group:** support horizontal layout
  ([#2536](https://github.com/bootstrap-vue/bootstrap-vue/issues/2536))
  ([10fa210](https://github.com/bootstrap-vue/bootstrap-vue/commit/10fa210))
- **modal:** add 'aria-modal="true"' to modal when open
  ([#2314](https://github.com/bootstrap-vue/bootstrap-vue/issues/2314))
  ([dbf4920](https://github.com/bootstrap-vue/bootstrap-vue/commit/dbf4920))
- **modal:** Add `dialogClass` prop
  ([#2465](https://github.com/bootstrap-vue/bootstrap-vue/issues/2465))
  ([34ae267](https://github.com/bootstrap-vue/bootstrap-vue/commit/34ae267))
- **modal:** add support for scrollable modal dialog content
  ([#2535](https://github.com/bootstrap-vue/bootstrap-vue/issues/2535))
  ([5c01faf](https://github.com/bootstrap-vue/bootstrap-vue/commit/5c01faf))
- **modal:** Make stackable optional
  ([#2259](https://github.com/bootstrap-vue/bootstrap-vue/issues/2259))
  ([2322044](https://github.com/bootstrap-vue/bootstrap-vue/commit/2322044))
- **modal:** Support multiple modals open at once
  ([#2164](https://github.com/bootstrap-vue/bootstrap-vue/issues/2164))
  ([2709902](https://github.com/bootstrap-vue/bootstrap-vue/commit/2709902))
- **pagination:** added slots for first, prev, next, last, and ellipsis
  ([#1870](https://github.com/bootstrap-vue/bootstrap-vue/issues/1870))
  ([#1980](https://github.com/bootstrap-vue/bootstrap-vue/issues/1980))
  ([1b7e7de](https://github.com/bootstrap-vue/bootstrap-vue/commit/1b7e7de))
- **popover/tooltip:** Add `boundaryPadding` prop to override Popper.js default padding
  ([#2475](https://github.com/bootstrap-vue/bootstrap-vue/issues/2475))
  ([c8ad487](https://github.com/bootstrap-vue/bootstrap-vue/commit/c8ad487))
- **security:** Strip HTML script tags before inserting content into DOM
  ([#1974](https://github.com/bootstrap-vue/bootstrap-vue/issues/1974))
  ([#1665](https://github.com/bootstrap-vue/bootstrap-vue/issues/1665))
  ([#2129](https://github.com/bootstrap-vue/bootstrap-vue/issues/2129))
  ([#2134](https://github.com/bootstrap-vue/bootstrap-vue/issues/2134))
  ([#1931](https://github.com/bootstrap-vue/bootstrap-vue/issues/1931))
  ([6dde0cb](https://github.com/bootstrap-vue/bootstrap-vue/commit/6dde0cb))
  ([ba6f3f8](https://github.com/bootstrap-vue/bootstrap-vue/commit/ba6f3f8))
- **security:** strip html tags
  ([#2479](https://github.com/bootstrap-vue/bootstrap-vue/issues/2479))
  ([3c6ba3e](https://github.com/bootstrap-vue/bootstrap-vue/commit/3c6ba3e))
- **spinner:** Support Bootstrap v4.2 spinner component
  ([#2306](https://github.com/bootstrap-vue/bootstrap-vue/issues/2306))
  ([bf3994f](https://github.com/bootstrap-vue/bootstrap-vue/commit/bf3994f))
- **table:** "Debounce" providerFunction and refresh methods
  ([#2393](https://github.com/bootstrap-vue/bootstrap-vue/issues/2393))
  ([d5f0462](https://github.com/bootstrap-vue/bootstrap-vue/commit/d5f0462))
- **table:** add borderless prop
  ([#2300](https://github.com/bootstrap-vue/bootstrap-vue/issues/2300))
  ([dabe150](https://github.com/bootstrap-vue/bootstrap-vue/commit/dabe150))
- **table:** Add row-unhovered event
  ([#1874](https://github.com/bootstrap-vue/bootstrap-vue/issues/1874))
  ([a87cad1](https://github.com/bootstrap-vue/bootstrap-vue/commit/a87cad1))
- **table:** add support for transitions on tbody element
  ([#1821](https://github.com/bootstrap-vue/bootstrap-vue/issues/1821))
  ([#2450](https://github.com/bootstrap-vue/bootstrap-vue/issues/2450))
  ([91514af](https://github.com/bootstrap-vue/bootstrap-vue/commit/91514af))
- **table:** add table row middle click (auxclicked) event
  ([#2425](https://github.com/bootstrap-vue/bootstrap-vue/issues/2425))
  ([23250a2](https://github.com/bootstrap-vue/bootstrap-vue/commit/23250a2))
- **table:** Add table-busy slot for loading status
  ([#1859](https://github.com/bootstrap-vue/bootstrap-vue/issues/1859))
  ([#2196](https://github.com/bootstrap-vue/bootstrap-vue/issues/2196))
  ([a654a61](https://github.com/bootstrap-vue/bootstrap-vue/commit/a654a61))
- **table:** create initial SCSS file
  ([#2216](https://github.com/bootstrap-vue/bootstrap-vue/issues/2216))
  ([db0b483](https://github.com/bootstrap-vue/bootstrap-vue/commit/db0b483))
- switch to PascalCase name for all components
  ([#2305](https://github.com/bootstrap-vue/bootstrap-vue/issues/2305))
  ([6179e61](https://github.com/bootstrap-vue/bootstrap-vue/commit/6179e61))
- **table:** pass sortDesc to user provided sortCompare routine
  ([#1994](https://github.com/bootstrap-vue/bootstrap-vue/issues/1994))
  ([a8e4103](https://github.com/bootstrap-vue/bootstrap-vue/commit/a8e4103))
- **table:** Remove need to add `click.stop` on inputs/links/buttons inside rows
  ([#2214](https://github.com/bootstrap-vue/bootstrap-vue/issues/2214))
  ([7d8662b](https://github.com/bootstrap-vue/bootstrap-vue/commit/7d8662b))
- **table:** Add support for selectable rows
  ([#1790](https://github.com/bootstrap-vue/bootstrap-vue/issues/1790))
  ([#2260](https://github.com/bootstrap-vue/bootstrap-vue/issues/2260))
  ([5b1cb90](https://github.com/bootstrap-vue/bootstrap-vue/commit/5b1cb90))
- **table:** Split computedItems into multiple methods
  ([#1893](https://github.com/bootstrap-vue/bootstrap-vue/issues/1893))
  ([bb1c550](https://github.com/bootstrap-vue/bootstrap-vue/commit/bb1c550))
- **table:** Support contextmenu event binding for table rows
  ([#2064](https://github.com/bootstrap-vue/bootstrap-vue/issues/2064))
  ([1eced46](https://github.com/bootstrap-vue/bootstrap-vue/commit/1eced46))
- **table:** Support sorting on nested object properties
  ([#1868](https://github.com/bootstrap-vue/bootstrap-vue/issues/1868))
  ([b699e4b](https://github.com/bootstrap-vue/bootstrap-vue/commit/b699e4b))

### Performance Improvements v2.0.0-rc.12

- **events:** use passive event listeners where possible
  ([#2435](https://github.com/bootstrap-vue/bootstrap-vue/issues/2435))
  ([a01dee4](https://github.com/bootstrap-vue/bootstrap-vue/commit/a01dee4))
- **modal:** Get scrollbar width just before modal opens rather than mount
  ([#1800](https://github.com/bootstrap-vue/bootstrap-vue/issues/1800))
  ([#2165](https://github.com/bootstrap-vue/bootstrap-vue/issues/2165))
  ([e1729b4](https://github.com/bootstrap-vue/bootstrap-vue/commit/e1729b4))
- **modal:** optimize model.resetScrollbar
  ([#1831](https://github.com/bootstrap-vue/bootstrap-vue/issues/1831))
  ([#1837](https://github.com/bootstrap-vue/bootstrap-vue/issues/1837))
  ([a622358](https://github.com/bootstrap-vue/bootstrap-vue/commit/a622358))
- **pkg:** remove lodash dependency from src
  ([#2523](https://github.com/bootstrap-vue/bootstrap-vue/issues/2523))
  ([b34ada3](https://github.com/bootstrap-vue/bootstrap-vue/commit/b34ada3))
- **progress:** use provide and inject for inter component communication
  ([#2540](https://github.com/bootstrap-vue/bootstrap-vue/issues/2540))
  ([80b7e5f](https://github.com/bootstrap-vue/bootstrap-vue/commit/80b7e5f))
- **utils/dom:** use passive event listeners where possible
  ([#2419](https://github.com/bootstrap-vue/bootstrap-vue/issues/2419))
  ([78fe776](https://github.com/bootstrap-vue/bootstrap-vue/commit/78fe776))
- only call vueUse in main index.js entrypoint
  ([#2542](https://github.com/bootstrap-vue/bootstrap-vue/issues/2542))
  ([c0d469b](https://github.com/bootstrap-vue/bootstrap-vue/commit/c0d469b))

<a name="2.0.0-rc.11"></a>

## [v2.0.0-rc.11](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.10...v2.0.0-rc.11)

Released: 2018-05-20

### Bug Fixes v2.0.0-rc.11

- **form-input:** force update formatted value
  ([#1845](https://github.com/bootstrap-vue/bootstrap-vue/issues/1845))
  ([497cc6e](https://github.com/bootstrap-vue/bootstrap-vue/commit/497cc6e))

<a name="2.0.0-rc.10"></a>

## [v2.0.0-rc.10](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.9...v2.0.0-rc.10)

Released: 2018-05-17

### Bug Fixes v2.0.0-rc.10

- **docs:** Fix duplicate keys in events table
  ([#1786](https://github.com/bootstrap-vue/bootstrap-vue/issues/1786))
  ([fa60d56](https://github.com/bootstrap-vue/bootstrap-vue/commit/fa60d56))
- **docs:** incorrect closing <b-form-file> tag
  ([#1838](https://github.com/bootstrap-vue/bootstrap-vue/issues/1838))
  ([69e410d](https://github.com/bootstrap-vue/bootstrap-vue/commit/69e410d))
- **docs:** Remove incorrect code added during debugging
  ([#1787](https://github.com/bootstrap-vue/bootstrap-vue/issues/1787))
  ([9911507](https://github.com/bootstrap-vue/bootstrap-vue/commit/9911507))
- **form-input:** always return formatted value
  ([#1839](https://github.com/bootstrap-vue/bootstrap-vue/issues/1839))
  ([77cc97b](https://github.com/bootstrap-vue/bootstrap-vue/commit/77cc97b))
- **tab:** fix the delay in tab transition
  ([#1812](https://github.com/bootstrap-vue/bootstrap-vue/issues/1812))
  ([#1806](https://github.com/bootstrap-vue/bootstrap-vue/issues/1806))
  ([5a7a290](https://github.com/bootstrap-vue/bootstrap-vue/commit/5a7a290))
- **table:** fix aria-rowcount ([#1836](https://github.com/bootstrap-vue/bootstrap-vue/issues/1836))
  ([e3e5439](https://github.com/bootstrap-vue/bootstrap-vue/commit/e3e5439))

### Features v2.0.0-rc.10

- **alert:** Add fade prop ([#1785](https://github.com/bootstrap-vue/bootstrap-vue/issues/1785))
  ([0999b4c](https://github.com/bootstrap-vue/bootstrap-vue/commit/0999b4c))
- **breadcrumb-link:** support children elements
  ([#1832](https://github.com/bootstrap-vue/bootstrap-vue/issues/1832))
  ([#1833](https://github.com/bootstrap-vue/bootstrap-vue/issues/1833))
  ([42175f8](https://github.com/bootstrap-vue/bootstrap-vue/commit/42175f8))
- **dropdown:** make show/hide events cancelable . also adds toggle event
  ([#1807](https://github.com/bootstrap-vue/bootstrap-vue/issues/1807))
  ([4136bd9](https://github.com/bootstrap-vue/bootstrap-vue/commit/4136bd9))
- **table:** Add no-sort-reset prop
  ([#1784](https://github.com/bootstrap-vue/bootstrap-vue/issues/1784))
  ([26aaeab](https://github.com/bootstrap-vue/bootstrap-vue/commit/26aaeab))
- **table:** Add the sort-direction prop
  ([#1783](https://github.com/bootstrap-vue/bootstrap-vue/issues/1783))
  ([#1788](https://github.com/bootstrap-vue/bootstrap-vue/issues/1788))
  ([9e1959d](https://github.com/bootstrap-vue/bootstrap-vue/commit/9e1959d))

<a name="2.0.0-rc.9"></a>

## [v2.0.0-rc.9](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.8...v2.0.0-rc.9)

Released: 2018-04-27

### Bug Fixes v2.0.0-rc.9

- **docs:** typo in docs plugin
  ([#1777](https://github.com/bootstrap-vue/bootstrap-vue/issues/1777))
  ([fb50c6f](https://github.com/bootstrap-vue/bootstrap-vue/commit/fb50c6f))
- **dropdown:** aria-labbeledby for dropdowns
  ([8efa7ee](https://github.com/bootstrap-vue/bootstrap-vue/commit/8efa7ee))
- **form-input:** revert step, min and max props
  ([#1767](https://github.com/bootstrap-vue/bootstrap-vue/issues/1767))
  ([1ce1a20](https://github.com/bootstrap-vue/bootstrap-vue/commit/1ce1a20))
- **img-lazy:** typo ([#1778](https://github.com/bootstrap-vue/bootstrap-vue/issues/1778))
  ([11d113c](https://github.com/bootstrap-vue/bootstrap-vue/commit/11d113c))
- **tooltip:** typo in comment ([#1779](https://github.com/bootstrap-vue/bootstrap-vue/issues/1779))
  ([ef253f7](https://github.com/bootstrap-vue/bootstrap-vue/commit/ef253f7))

### Features v2.0.0-rc.9

- **table:** support custom attributes per table cell in a column
  ([#1760](https://github.com/bootstrap-vue/bootstrap-vue/issues/1760))
  ([fc083e5](https://github.com/bootstrap-vue/bootstrap-vue/commit/fc083e5))

<a name="2.0.0-rc.8"></a>

## [v2.0.0-rc.8](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.7...v2.0.0-rc.8)

Released: 2018-04-17

### Bug Fixes v2.0.0-rc.8

- **docs:** fix table refresh event name
  ([#1692](https://github.com/bootstrap-vue/bootstrap-vue/issues/1692))
  ([01e223c](https://github.com/bootstrap-vue/bootstrap-vue/commit/01e223c))
- default export in TypeScript definitions
  ([cd7e310](https://github.com/bootstrap-vue/bootstrap-vue/commit/cd7e310))

<a name="2.0.0-rc.7"></a>

## [v2.0.0-rc.7](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.6...v2.0.0-rc.7)

Released: 2018-04-16

### Bug Fixes v2.0.0-rc.7

- **table:** typo in README.md ([#1729](https://github.com/bootstrap-vue/bootstrap-vue/issues/1729))
  ([8d0e186](https://github.com/bootstrap-vue/bootstrap-vue/commit/8d0e186))
- **tabs:** change default key nav to avoid breaking changes
  ([#1733](https://github.com/bootstrap-vue/bootstrap-vue/issues/1733))
  ([a6dea02](https://github.com/bootstrap-vue/bootstrap-vue/commit/a6dea02))
- **tabs:** rename prop to no-key-nav, update docs
  ([491d698](https://github.com/bootstrap-vue/bootstrap-vue/commit/491d698))
- **tabs:** typo in tabs ([#1735](https://github.com/bootstrap-vue/bootstrap-vue/issues/1735))
  ([89eff3c](https://github.com/bootstrap-vue/bootstrap-vue/commit/89eff3c))

### Features v2.0.0-rc.7

- add basic typescript declarations
  ([#1721](https://github.com/bootstrap-vue/bootstrap-vue/issues/1721))
  ([3c040f0](https://github.com/bootstrap-vue/bootstrap-vue/commit/3c040f0))
- **form-input:** add step, min and max props for use with number type
  ([40ff380](https://github.com/bootstrap-vue/bootstrap-vue/commit/40ff380))
- **table:** support custom classes per table cell in a column
  ([d05d6b6](https://github.com/bootstrap-vue/bootstrap-vue/commit/d05d6b6))
- **tabs:** add key nav prop like button toolbar has
  ([#1733](https://github.com/bootstrap-vue/bootstrap-vue/issues/1733))
  ([bc3b82b](https://github.com/bootstrap-vue/bootstrap-vue/commit/bc3b82b))
- **tabs/noNavStyle:** added related prop and check
  ([91c7257](https://github.com/bootstrap-vue/bootstrap-vue/commit/91c7257))

<a name="2.0.0-rc.6"></a>

## [v2.0.0-rc.6](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.4...v2.0.0-rc.6)

Released: 2018-04-02

### Bug Fixes v2.0.0-rc.6

- **text-area:** correctly handle input event
  ([#1714](https://github.com/bootstrap-vue/bootstrap-vue/issues/1714))
  ([5e2973d](https://github.com/bootstrap-vue/bootstrap-vue/commit/5e2973d))

<a name="2.0.0-rc.5"></a>

## [v2.0.0-rc.5](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.4...v2.0.0-rc.5)

Released: 2018-04-02

### Bug Fixes v2.0.0-rc.5

- **card:** duplicate header and footer slots with no-body
  ([#1713](https://github.com/bootstrap-vue/bootstrap-vue/issues/1713),
  [#1680](https://github.com/bootstrap-vue/bootstrap-vue/issues/1680))
  ([2bd0e71](https://github.com/bootstrap-vue/bootstrap-vue/commit/2bd0e71))

**NOTE** Vue `2.5.15` has known issues with card slots. Please upgrade to `2.5.16` or newer
versions.

<a name="2.0.0-rc.4"></a>

## [v2.0.0-rc.4](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.3...v2.0.0-rc.4)

Released: 2018-04-01

### Bug Fixes v2.0.0-rc.4

- **build:** don't exclude lodash.get
  ([543c3c2](https://github.com/bootstrap-vue/bootstrap-vue/commit/543c3c2))
- **card:** pass children instead of default prop to sub-components
  ([63b35e3](https://github.com/bootstrap-vue/bootstrap-vue/commit/63b35e3))

### Features v2.0.0-rc.4

- **test:** test against multi versions of vue
  ([25d0b13](https://github.com/bootstrap-vue/bootstrap-vue/commit/25d0b13))

### Performance Improvements v2.0.0-rc.4

- **docs:** only import debounce from lodash
  ([a6abd6d](https://github.com/bootstrap-vue/bootstrap-vue/commit/a6abd6d))

<a name="2.0.0-rc.3"></a>

## [v2.0.0-rc.3](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.2...v2.0.0-rc.3)

Released: 2018-04-01

### Bug Fixes v2.0.0-rc.3

- **contributing:** Improve the commit guidelines
  ([c506280](https://github.com/bootstrap-vue/bootstrap-vue/commit/c506280))
- **modal:** Correct the internal btn variable names
  ([301f2e4](https://github.com/bootstrap-vue/bootstrap-vue/commit/301f2e4)), closes
  [#1650](https://github.com/bootstrap-vue/bootstrap-vue/issues/1650)
- **select:** Fix issues with form-select
  ([#1673](https://github.com/bootstrap-vue/bootstrap-vue/issues/1673))
  ([e3336c5](https://github.com/bootstrap-vue/bootstrap-vue/commit/e3336c5)), closes
  [#1658](https://github.com/bootstrap-vue/bootstrap-vue/issues/1658)
- **table:** import lodash.get from "dependencies"
  ([#1697](https://github.com/bootstrap-vue/bootstrap-vue/issues/1697))
  ([4d620a5](https://github.com/bootstrap-vue/bootstrap-vue/commit/4d620a5))

### Features v2.0.0-rc.3

- **dropdown, nav-item-dropdown:** support menuClass and extraMenuClasses
  ([#1683](https://github.com/bootstrap-vue/bootstrap-vue/issues/1683))
  ([3da5f18](https://github.com/bootstrap-vue/bootstrap-vue/commit/3da5f18))
- **modal:** add `modalClass` property to `bModal`
  ([#1682](https://github.com/bootstrap-vue/bootstrap-vue/issues/1682))
  ([c7a10ef](https://github.com/bootstrap-vue/bootstrap-vue/commit/c7a10ef))
- **table:** add field to the table column data cell slots
  ([#1705](https://github.com/bootstrap-vue/bootstrap-vue/issues/1705))
  ([e013d59](https://github.com/bootstrap-vue/bootstrap-vue/commit/e013d59))

### Performance Improvements v2.0.0-rc.3

- **docs:** lodash dependency
  ([a02f10d](https://github.com/bootstrap-vue/bootstrap-vue/commit/a02f10d))

<a name="2.0.0-rc.2"></a>

## [v2.0.0-rc.2](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.1...v2.0.0-rc.2)

Released: 2018-03-06

### Features v2.0.0-rc.2

- **popovers / tooltips:** Accept an HTMLElement as a valid target
  ([a375452](https://github.com/bootstrap-vue/bootstrap-vue/commit/a375452))
- **tab:** add title slot ([#1586](https://github.com/bootstrap-vue/bootstrap-vue/pull/1586))
  ([724b453](https://github.com/bootstrap-vue/bootstrap-vue/commit/724b453))
- **table:** Use object's property as a key
  ([#1614](https://github.com/bootstrap-vue/bootstrap-vue/pull/1614))
  ([4464f0a](https://github.com/bootstrap-vue/bootstrap-vue/commit/4464f0a))
- **tooltip:** Allow a function as a tooltip target attribute
  ([#1493](https://github.com/bootstrap-vue/bootstrap-vue/pull/1493))
  ([048c3d4](https://github.com/bootstrap-vue/bootstrap-vue/commit/048c3d4))

### Bug Fixes v2.0.0-rc.2

- **modal:** fix v-b-modal directive unbinding
  ([#1617](https://github.com/bootstrap-vue/bootstrap-vue/pull/1617))
  ([3f6a86a](https://github.com/bootstrap-vue/bootstrap-vue/commit/3f6a86a))
- **table:** avoid HTML injection in table data
  ([63d8097](https://github.com/bootstrap-vue/bootstrap-vue/commit/63d8097))
- **table:** allow empty labels
  ([5ee0923](https://github.com/bootstrap-vue/bootstrap-vue/commit/5ee0923))
- **table:** Ignore BV keys when auto-discovering table fields
  ([#1641](https://github.com/bootstrap-vue/bootstrap-vue/pull/1641))
  ([f56f3e8](https://github.com/bootstrap-vue/bootstrap-vue/commit/f56f3e8))
- **select:** Always pass selectSize to selects
  ([#1640](https://github.com/bootstrap-vue/bootstrap-vue/pull/1640))
  ([2c725f6](https://github.com/bootstrap-vue/bootstrap-vue/commit/2c725f6))
- **docs:** use "prepend" and "append" for input-group
  ([#1593](https://github.com/bootstrap-vue/bootstrap-vue/pull/1593))
  ([5b7ee09](https://github.com/bootstrap-vue/bootstrap-vue/commit/5b7ee09cb494b4c243929d8fbc28976e8330b420))
- **docs:** fix splash button styling
  ([11484b3](https://github.com/bootstrap-vue/bootstrap-vue/commit/11484b3))
- **docs:** fix typo in docs ([#1555](https://github.com/bootstrap-vue/bootstrap-vue/pull/1555))
  ([c927377](https://github.com/bootstrap-vue/bootstrap-vue/commit/c927377))
- **docs:** spelling correction in comment
  ([#1568](https://github.com/bootstrap-vue/bootstrap-vue/issues/1568))
  ([e0e4006](https://github.com/bootstrap-vue/bootstrap-vue/commit/e0e4006))
- polyfill HTMLElement for SSR
  ([d4dd9b3](https://github.com/bootstrap-vue/bootstrap-vue/commit/d4dd9b3))

<a name="2.0.0-rc.1"></a>

## [v2.0.0-rc.1](https://github.com/bootstrap-vue/bootstrap-vue/compare/v2.0.0-rc.0...v2.0.0-rc.1)

Released: 2018-01-25

### Bug Fixes v2.0.0-rc.1

- call `removeEventListener` on the right element
  ([#1557](https://github.com/bootstrap-vue/bootstrap-vue/issues/1557))
  ([cf2bfca](https://github.com/bootstrap-vue/bootstrap-vue/commit/cf2bfca)), closes
  [#1391](https://github.com/bootstrap-vue/bootstrap-vue/issues/1391)
- **form-group:** replace .col-form-legend with .col-form-label
  ([ac2d4dd](https://github.com/bootstrap-vue/bootstrap-vue/commit/ac2d4dd))
- **input-group:** fix dropdown rounded corners. closes
  [#1560](https://github.com/bootstrap-vue/bootstrap-vue/issues/1560).
  ([7df01ff](https://github.com/bootstrap-vue/bootstrap-vue/commit/7df01ff))
- **modal:** hide dropdown on click.
  ([#1528](https://github.com/bootstrap-vue/bootstrap-vue/issues/1528))
  ([3ad8a9a](https://github.com/bootstrap-vue/bootstrap-vue/commit/3ad8a9a))

### Performance Improvements v2.0.0-rc.1

- **id mixin:** make localId\_ a computed field
  ([873b0e7](https://github.com/bootstrap-vue/bootstrap-vue/commit/873b0e7))

<a name="2.0.0-rc.0"></a>

## [v2.0.0-rc.0](https://github.com/bootstrap-vue/bootstrap-vue/compare/v1.4.0...v2.0.0-rc.0)

Released: 2018-01-23

[**Full change list**](https://github.com/bootstrap-vue/bootstrap-vue/compare/v1.5.0...v2.0.0-rc.0)

With `v2.0.0` release, BootstrapVue is compatible with final stable release of Bootstrap `v4.0.0`
and beyond.

- If you are using any custom theme which was based on Bootstrap beta, there may be minor problems
  to be fixed. Please ensure to review [migrate guide](https://getbootstrap.com/docs/4.0/migration).
- With this release, we have removed majority of CSS fixes. If you are using ES builds, you may have
  to add a `css-loader` to make it working probably.
- `input-group-addon` API has been changed and `left/right` changed into `prepend/append`. Please
  refer to the docs for more information.

## Older releases

For prior release notes and commits, please refer to the
[CHANGELOG-OLD](https://github.com/bootstrap-vue/bootstrap-vue/blob/master/CHANGELOG-OLD.md) file.
