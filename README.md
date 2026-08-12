<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ccopyWithin

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform an in-place copy of elements within a one-dimensional single-precision complex floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import ccopyWithin from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-ccopy-within@deno/mod.js';
```

#### ccopyWithin( arrays )

Performs an in-place copy of elements within a one-dimensional single-precision complex floating-point ndarray.

<!-- eslint-disable max-len -->

```javascript
import Complex64Vector from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-vector-complex64@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@deno/mod.js';

var x = new Complex64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var target = scalar2ndarray( 1, {
    'dtype': 'generic'
});
var start = scalar2ndarray( 0, {
    'dtype': 'generic'
});
var end = scalar2ndarray( 2, {
    'dtype': 'generic'
});

var w = zeros( [ 3 ], {
    'dtype': 'complex64'
});

var out = ccopyWithin( [ x, target, start, end, w ] );
// returns <ndarray>[ <Complex64>[ 1.0, 2.0 ], <Complex64>[ 1.0, 2.0 ], <Complex64>[ 3.0, 4.0 ] ]
```

<!-- eslint-enable max-len -->

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray specifying a target index.
    -   a zero-dimensional ndarray specifying a source start index (inclusive).
    -   a zero-dimensional ndarray specifying a source end index (exclusive).
    -   a one-dimensional workspace ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input ndarray is copied **in-place** (i.e., the input ndarray is **mutated**).
-   If the `start` and `target` index ranges do not overlap, the `workspace` ndarray is unused and thus ignored.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import Complex64Vector from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-vector-complex64@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@deno/mod.js';
import ccopyWithin from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-ccopy-within@deno/mod.js';

var x = new Complex64Vector( discreteUniform( 20, -100, 100, {
    'dtype': 'float32'
}));
console.log( ndarray2array( x ) );

var target = scalar2ndarray( 5, {
    'dtype': 'generic'
});
var start = scalar2ndarray( 0, {
    'dtype': 'generic'
});
var end = scalar2ndarray( 3, {
    'dtype': 'generic'
});

var w = zeros( [ 10 ], {
    'dtype': 'complex64'
});

ccopyWithin( [ x, target, start, end, w ] );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray-ccopy-within.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray-ccopy-within

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray-ccopy-within/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-ccopy-within/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray-ccopy-within/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray-ccopy-within?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray-ccopy-within.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray-ccopy-within/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-ccopy-within/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-ccopy-within/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-ccopy-within/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-ccopy-within/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-ccopy-within/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-ccopy-within/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-ccopy-within/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray-ccopy-within/main/LICENSE

</section>

<!-- /.links -->
