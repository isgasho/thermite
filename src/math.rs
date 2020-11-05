#![allow(unused)]

use crate::*;

/// Set of vectorized special functions optimized for both single and double precision
pub trait SimdVectorizedMath<S: Simd>: SimdFloatVector<S> {
    /// Scales values between `in_min` and `in_max`, to between `out_min` and `out_max`
    fn scale(self, in_min: Self, in_max: Self, out_min: Self, out_max: Self) -> Self;

    /// Linearly interpolates between `a` and `b` using `self`
    ///
    /// Equivalent to `(1 - t) * a + t * b`, but uses fused multiply-add operations
    /// to improve performance while maintaining precision
    fn lerp(self, a: Self, b: Self) -> Self;

    /// Computes the sine of a vector.
    fn sin(self) -> Self;
    /// Computes the cosine of a vector.
    fn cos(self) -> Self;
    /// Computes the tangent of a vector.
    fn tan(self) -> Self;

    /// Computes both the sine and cosine of a vector.
    fn sin_cos(self) -> (Self, Self);

    /// Computes the hyperbolic-sine of a vector.
    fn sinh(self) -> Self;
    /// Computes the hyperbolic-cosine of a vector.
    fn cosh(self) -> Self;
    /// Computes the hyperbolic-tangent of a vector.
    fn tanh(self) -> Self;

    /// Computes the hyperbolic-arcsine of a vector.
    fn asinh(self) -> Self;
    /// Computes the hyperbolic-arccosine of a vector.
    fn acosh(self) -> Self;
    /// Computes the hyperbolic-arctangent of a vector.
    fn atanh(self) -> Self;

    /// Computes the arcsine of a vector.
    fn asin(self) -> Self;
    /// Computes the arccosine of a vector.
    fn acos(self) -> Self;
    /// Computes the arctangent of a vector.
    fn atan(self) -> Self;
    /// Computes the four quadrant arc-tangent of `y`(`self`) and `x`
    fn atan2(self, x: Self) -> Self;

    /// The exponential function, returns `e^(self)`
    fn exp(self) -> Self;
    /// Half-exponential function, returns `0.5 * e^(self)`
    fn exph(self) -> Self;
    /// Binary exponential function, returns `2^(self)`
    fn exp2(self) -> Self;
    /// Base-10 exponential function, returns `10^(self)`
    fn exp10(self) -> Self;
    /// Exponential function minus one, `e^(self) - 1.0`,
    /// special implementation that is more accurate if the numbr if closer to zero.
    fn exp_m1(self) -> Self;

    /// Computes `x^e` where `x` is `self` and `e` is a vector of floating-point exponents
    fn powf(self, e: Self) -> Self;
    /// Computes `x^e` where `x` is `self` and `e` is a vector of integer exponents
    fn powi(self, e: S::Vi32) -> Self;

    /// Computes the natural logarithm of a vector.
    fn ln(self) -> Self;
    /// Computes `ln(1+x)` where `x` is `self`, more accurately
    /// than if operations were performed separately
    fn ln_1p(self) -> Self;
    /// Computes the base-2 logarithm of a vector
    fn log2(self) -> Self;
    /// Computes the base-10 logarithm of a vector
    fn log10(self) -> Self;

    /// Computes the error function for each value in a vector
    fn erf(self) -> Self;
    /// Computes the inverse error function for each value in a vector
    fn ierf(self) -> Self;
    /// Computes the complementary error function `1 - erf(x)` more accurately
    /// than if operations were performed separately
    fn erfc(self) -> Self;
}

#[rustfmt::skip]
impl<S: Simd, T> SimdVectorizedMath<S> for T
where
    T: SimdFloatVector<S>,
    <T as SimdVectorBase<S>>::Element: SimdVectorizedMathInternal<S, Vf = T>,
{
    #[inline(always)]
    fn scale(self, in_min: Self, in_max: Self, out_min: Self, out_max: Self) -> Self {
        ((self - in_min) / (in_max - in_min)).mul_add(out_max - out_min, out_min)
    }

    #[inline(always)]
    fn lerp(self, a: Self, b: Self) -> Self {
        self.mul_add(b - a, a)
    }

    #[inline(always)] fn sin(self)              -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::sin(self) }
    #[inline(always)] fn cos(self)              -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::cos(self) }
    #[inline(always)] fn tan(self)              -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::tan(self) }
    #[inline(always)] fn sin_cos(self)          -> (Self, Self) { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::sin_cos(self) }
    #[inline(always)] fn sinh(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::sinh(self) }
    #[inline(always)] fn cosh(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::cosh(self) }
    #[inline(always)] fn tanh(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::tanh(self) }
    #[inline(always)] fn asinh(self)            -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::asinh(self) }
    #[inline(always)] fn acosh(self)            -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::acosh(self) }
    #[inline(always)] fn atanh(self)            -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::atanh(self) }
    #[inline(always)] fn asin(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::asin(self) }
    #[inline(always)] fn acos(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::acos(self) }
    #[inline(always)] fn atan(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::atan(self) }
    #[inline(always)] fn atan2(self, x: Self)   -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::atan2(self, x) }
    #[inline(always)] fn exp(self)              -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::exp(self) }
    #[inline(always)] fn exph(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::exph(self) }
    #[inline(always)] fn exp2(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::exp2(self) }
    #[inline(always)] fn exp10(self)            -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::exp10(self) }
    #[inline(always)] fn exp_m1(self)           -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::exp_m1(self) }
    #[inline(always)] fn powf(self, e: Self)    -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::powf(self, e) }
    #[inline(always)] fn powi(self, e: S::Vi32) -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::powi(self, e) }
    #[inline(always)] fn ln(self)               -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::ln(self) }
    #[inline(always)] fn ln_1p(self)            -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::ln_1p(self) }
    #[inline(always)] fn log2(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::log2(self) }
    #[inline(always)] fn log10(self)            -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::log10(self) }
    #[inline(always)] fn erf(self)              -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::erf(self) }
    #[inline(always)] fn ierf(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::ierf(self) }
    #[inline(always)] fn erfc(self)             -> Self         { <<Self as SimdVectorBase<S>>::Element as SimdVectorizedMathInternal<S>>::erfc(self) }
}

#[doc(hidden)]
pub trait SimdVectorizedMathInternal<S: Simd>: SimdElement + From<f32> {
    type Vf: SimdFloatVector<S, Element = Self>;

    #[inline]
    fn sin(x: Self::Vf) -> Self::Vf {
        Self::sin_cos(x).0
    }

    #[inline]
    fn cos(x: Self::Vf) -> Self::Vf {
        Self::sin_cos(x).1
    }

    #[inline]
    fn tan(x: Self::Vf) -> Self::Vf {
        let (s, c) = Self::sin_cos(x);
        s / c
    }

    fn sin_cos(x: Self::Vf) -> (Self::Vf, Self::Vf);

    fn sinh(x: Self::Vf) -> Self::Vf;

    #[inline(always)]
    fn cosh(x: Self::Vf) -> Self::Vf {
        let x: Self::Vf = x.abs();
        let y: Self::Vf = x.exph(); // 0.5 * exp(x)
        y + Self::Vf::splat_any(0.25) / y // + 0.5 * exp(-x)
    }

    fn tanh(x: Self::Vf) -> Self::Vf;

    fn asin(x: Self::Vf) -> Self::Vf;
    fn acos(x: Self::Vf) -> Self::Vf;
    fn atan(x: Self::Vf) -> Self::Vf;
    fn atan2(y: Self::Vf, x: Self::Vf) -> Self::Vf;

    fn asinh(x: Self::Vf) -> Self::Vf;
    fn acosh(x: Self::Vf) -> Self::Vf;
    fn atanh(x: Self::Vf) -> Self::Vf;

    fn exp(x: Self::Vf) -> Self::Vf;
    fn exph(x: Self::Vf) -> Self::Vf;
    fn exp2(x: Self::Vf) -> Self::Vf;
    fn exp10(x: Self::Vf) -> Self::Vf;
    fn exp_m1(x: Self::Vf) -> Self::Vf {
        Self::exp(x) - Self::Vf::one()
    }

    fn powf(x: Self::Vf, e: Self::Vf) -> Self::Vf;

    #[inline]
    fn powi(mut x: Self::Vf, mut e: S::Vi32) -> Self::Vf {
        let mut res = Self::Vf::one();

        x = e.is_negative().select(Self::Vf::one() / x, x);
        e = e.abs();

        let zero = Vi32::<S>::zero();

        loop {
            res = (e & Vi32::<S>::one()).ne(zero).select(res * x, res);

            e >>= 1;

            let fin = e.eq(zero);

            if fin.all() {
                break;
            }

            x = fin.select(x, x * x); // x *= fin.select(1.0, x)
        }

        res
    }

    fn ln(x: Self::Vf) -> Self::Vf;
    fn ln_1p(x: Self::Vf) -> Self::Vf;
    fn log2(x: Self::Vf) -> Self::Vf;
    fn log10(x: Self::Vf) -> Self::Vf;

    fn erf(x: Self::Vf) -> Self::Vf;
    fn ierf(x: Self::Vf) -> Self::Vf;

    #[inline(always)]
    fn erfc(x: Self::Vf) -> Self::Vf {
        Self::Vf::one() - Self::erf(x)
    }
}

#[derive(Clone, Copy, PartialEq, Eq)]
enum ExpMode {
    Exp,
    Expm1,
    Exph,
    Pow2,
    Pow10,
}

#[inline(always)]
fn pow2n_f<S: Simd>(n: Vf32<S>) -> Vf32<S> {
    let pow2_23 = Vf32::<S>::splat(8388608.0);
    let bias = Vf32::<S>::splat(127.0);

    (n + (bias + pow2_23)) << 23
}

#[inline(always)]
fn exp_f_internal<S: Simd>(x0: Vf32<S>, mode: ExpMode) -> Vf32<S> {
    use std::f32::consts::{LN_10, LN_2, LOG10_2, LOG2_E};

    let p0expf = Vf32::<S>::splat(1.0 / 2.0);
    let p1expf = Vf32::<S>::splat(1.0 / 6.0);
    let p2expf = Vf32::<S>::splat(1.0 / 24.0);
    let p3expf = Vf32::<S>::splat(1.0 / 120.0);
    let p4expf = Vf32::<S>::splat(1.0 / 720.0);
    let p5expf = Vf32::<S>::splat(1.0 / 5040.0);

    let mut x = x0;
    let mut r = Vf32::<S>::zero();

    let max_x;

    match mode {
        ExpMode::Exp | ExpMode::Exph | ExpMode::Expm1 => {
            max_x = if mode == ExpMode::Exp { 87.3 } else { 89.0 };

            let ln2f_hi = Vf32::<S>::splat(0.693359375);
            let ln2f_lo = Vf32::<S>::splat(-2.12194440e-4);

            r = (x0 * Vf32::<S>::splat(LOG2_E)).round();

            x = r.nmul_add(ln2f_hi, x); // x -= r * ln2f_hi;
            x = r.nmul_add(ln2f_lo, x); // x -= r * ln2f_lo;
        }
        ExpMode::Pow2 => {
            max_x = 126.0;

            r = x0.round();

            x -= r;
            x *= Vf32::<S>::splat(LN_2);
        }
        ExpMode::Pow10 => {
            max_x = 37.9;

            let log10_2_hi = Vf32::<S>::splat(0.301025391); // log10(2) in two parts
            let log10_2_lo = Vf32::<S>::splat(4.60503907E-6);

            r = (x0 * Vf32::<S>::splat(LN_10 * LOG2_E)).round();

            x = r.nmul_add(log10_2_hi, x); // x -= r * log10_2_hi;
            x = r.nmul_add(log10_2_lo, x); // x -= r * log10_2_lo;
            x *= Vf32::<S>::splat(LN_10);
        }
    }

    let x2 = x * x;
    let x3 = x2 * x;
    let x4 = x2 * x2;

    let mut z = x
        .mul_add(p3expf, p2expf)
        .mul_add(x2, x4.mul_add(x.mul_add(p5expf, p4expf), x.mul_add(p1expf, p0expf)))
        .mul_add(x2, x);

    if mode == ExpMode::Exph {
        r -= Vf32::<S>::one();
    }

    let n2 = pow2n_f::<S>(r);

    if mode == ExpMode::Expm1 {
        z = z.mul_add(n2, n2 - Vf32::<S>::one());
    } else {
        z = (z + Vf32::<S>::one()) * n2;
    }

    let in_range = x0.abs().lt(Vf32::<S>::splat(max_x)) & x0.is_finite().cast_to();

    if !in_range.all() {
        let sign_bit_mask = (x0 & Vf32::<S>::neg_zero()).into_bits().ne(Vu32::<S>::zero());
        let is_nan = x0.is_nan();

        let underflow_value = if mode == ExpMode::Expm1 {
            Vf32::<S>::neg_one()
        } else {
            Vf32::<S>::zero()
        };

        r = sign_bit_mask.select(underflow_value, Vf32::<S>::infinity());
        z = in_range.select(z, r);
        z = is_nan.select(x0, z);
    }

    z
}

#[inline(always)]
fn poly_2<S: Simd, V: SimdFloatVector<S>>(x: V, x2: V, c0: V, c1: V, c2: V) -> V {
    x2.mul_add(c2, x.mul_add(c1, c0))
}

#[inline(always)]
fn poly_3<S: Simd, V: SimdFloatVector<S>>(x: V, x2: V, c0: V, c1: V, c2: V, c3: V) -> V {
    // x^2 * (x * c3 + c2) + (x*c1 + c0)
    x2.mul_add(x.mul_add(c3, c2), x.mul_add(c1, c0))
}

#[inline(always)]
fn poly_4<S: Simd, V: SimdFloatVector<S>>(x: V, x2: V, x4: V, c0: V, c1: V, c2: V, c3: V, c4: V) -> V {
    // x^4 * c4 + (x^2 * (x * c3 + c2) + (x*c1 + c0))
    x4.mul_add(c4, x2.mul_add(x.mul_add(c3, c2), x.mul_add(c1, c0)))
}

#[inline(always)]
fn poly_5<S: Simd, V: SimdFloatVector<S>>(x: V, x2: V, x4: V, c0: V, c1: V, c2: V, c3: V, c4: V, c5: V) -> V {
    // x^4 * (x * c5 + c4) + (x^2 * (x * c3 + c2) + (x*c1 + c0))
    x4.mul_add(x.mul_add(c4, c4), x2.mul_add(x.mul_add(c3, c2), x.mul_add(c1, c0)))
}

#[inline(always)]
fn poly_6<S: Simd, V: SimdFloatVector<S>>(x: V, x2: V, x4: V, c0: V, c1: V, c2: V, c3: V, c4: V, c5: V, c6: V) -> V {
    // x^4 * (x^2 * c6 + (x * c5 + c4)) + (x^2 * (x * c3 + c2) + (x * c1 + c0))
    x4.mul_add(
        x2.mul_add(c6, x.mul_add(c5, c4)),
        x2.mul_add(x.mul_add(c3, c2), x.mul_add(c1, c0)),
    )
}

impl<S: Simd> SimdVectorizedMathInternal<S> for f32
where
    <S as Simd>::Vf32: SimdFloatVector<S, Element = f32>,
{
    type Vf = <S as Simd>::Vf32;

    #[inline(always)]
    fn sin_cos(xx: Self::Vf) -> (Self::Vf, Self::Vf) {
        let dp1f = Vf32::<S>::splat(0.78515625 * 2.0);
        let dp2f = Vf32::<S>::splat(2.4187564849853515625E-4 * 2.0);
        let dp3f = Vf32::<S>::splat(3.77489497744594108E-8 * 2.0);
        let p0sinf = Vf32::<S>::splat(-1.6666654611E-1);
        let p1sinf = Vf32::<S>::splat(8.3321608736E-3);
        let p2sinf = Vf32::<S>::splat(-1.9515295891E-4);
        let p0cosf = Vf32::<S>::splat(4.166664568298827E-2);
        let p1cosf = Vf32::<S>::splat(-1.388731625493765E-3);
        let p2cosf = Vf32::<S>::splat(2.443315711809948E-5);

        let xa: Vf32<S> = xx.abs();

        let y: Vf32<S> = (xa * Vf32::<S>::splat(2.0 / std::f32::consts::PI)).round();
        let q: Vu32<S> = y.cast_to::<Vi32<S>>().into_bits(); // cast to signed (faster), then transmute to unsigned

        // Reduce by extended precision modular arithmetic
        // x = ((xa - y * DP1F) - y * DP2F) - y * DP3F;
        let x = y.nmul_add(dp3f, y.nmul_add(dp2f, y.nmul_add(dp1f, xa)));

        // Taylor expansion of sin and cos, valid for -pi/4 <= x <= pi/4
        let x2: Vf32<S> = x * x;
        let x3: Vf32<S> = x2 * x;
        let x4: Vf32<S> = x2 * x2;

        let mut s = poly_2(x2, x4, p0sinf, p1sinf, p2sinf).mul_add(x3, x);
        let mut c =
            poly_2(x2, x4, p0cosf, p1cosf, p2cosf).mul_add(x4, Vf32::<S>::splat(0.5).nmul_add(x2, Vf32::<S>::one()));

        // swap sin and cos if odd quadrant
        let swap = (q & Vu32::<S>::one()).ne(Vu32::<S>::zero());

        let mut overflow = q.gt(Vu32::<S>::splat(0x2000000)); // q big if overflow
        overflow &= xa.is_finite().cast_to();

        s = overflow.select(Vf32::<S>::zero(), s);
        c = overflow.select(Vf32::<S>::one(), c);

        let sin1 = swap.select(c, s);
        let cos1 = swap.select(s, c);

        let signsin = Vf32::<S>::from_bits((q << 30) ^ xx.into_bits());
        let signcos = Vf32::<S>::from_bits(((q + Vu32::<S>::one()) & Vu32::<S>::splat(2)) << 30);

        // combine signs
        (sin1.combine_sign(signsin), cos1 ^ signcos)
    }

    #[inline(always)]
    fn sinh(x0: Self::Vf) -> Self::Vf {
        let r0 = Vf32::<S>::splat(1.66667160211E-1);
        let r1 = Vf32::<S>::splat(8.33028376239E-3);
        let r2 = Vf32::<S>::splat(2.03721912945E-4);

        let x = x0.abs();

        let x_small = x.le(Vf32::<S>::one());

        let mut y1 = Vf32::<S>::zero();
        let mut y2 = Vf32::<S>::zero();

        // use bitmask directly to avoid two calls
        let bitmask = x_small.bitmask();

        // if any are small
        if bitmask != 0 {
            let x2 = x * x;
            let x4 = x2 * x2;

            y1 = x4.mul_add(r2, x2.mul_add(r1, r0)).mul_add(x2 * x, x);
        }

        // if not all are small
        if bitmask != Mask::<S, Vf32<S>>::FULL_BITMASK {
            y2 = x.exph();
            y2 -= Vf32::<S>::splat(0.25) / y2;
        }

        x_small.select(y1, y2).combine_sign(x0)
    }

    fn tanh(x0: Self::Vf) -> Self::Vf {
        let r0 = Vf32::<S>::splat(-3.33332819422E-1);
        let r1 = Vf32::<S>::splat(1.33314422036E-1);
        let r2 = Vf32::<S>::splat(-5.37397155531E-2);
        let r3 = Vf32::<S>::splat(2.06390887954E-2);
        let r4 = Vf32::<S>::splat(-5.70498872745E-3);

        let x = x0.abs();
        let x_small = x.le(Vf32::<S>::splat(0.625));

        let mut y1 = Vf32::<S>::zero();
        let mut y2 = Vf32::<S>::zero();

        // use bitmask directly to avoid two calls
        let bitmask = x_small.bitmask();

        // if any are small
        if bitmask != 0 {
            let x2 = x * x;
            let x4 = x2 * x2;
            let x8 = x4 * x4;

            y1 = poly_4(x2, x4, x8, r0, r1, r2, r3, r4).mul_add(x2 * x, x);
        }

        if bitmask != Mask::<S, Vf32<S>>::FULL_BITMASK {
            y2 = (x + x).exp();
            y2 = Vf32::<S>::one() - Vf32::<S>::splat(2.0) / (y2 + Vf32::<S>::one());
        }

        let x_big = x.gt(Vf32::<S>::splat(44.4));

        y1 = x_small.select(y1, y2);
        y1 = x_big.select(Vf32::<S>::one(), y1);

        y1.combine_sign(x0)
    }

    fn asin(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn acos(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn atan(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn atan2(y: Self::Vf, x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn asinh(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn acosh(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn atanh(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }

    #[inline(always)]
    fn exp(x: Self::Vf) -> Self::Vf {
        exp_f_internal::<S>(x, ExpMode::Exp)
    }

    #[inline(always)]
    fn exph(x: Self::Vf) -> Self::Vf {
        exp_f_internal::<S>(x, ExpMode::Exph)
    }

    #[inline(always)]
    fn exp2(x: Self::Vf) -> Self::Vf {
        exp_f_internal::<S>(x, ExpMode::Pow2)
    }

    #[inline(always)]
    fn exp10(x: Self::Vf) -> Self::Vf {
        exp_f_internal::<S>(x, ExpMode::Pow10)
    }

    fn powf(x: Self::Vf, e: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn ln(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn ln_1p(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn log2(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn log10(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn erf(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn ierf(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
}

impl<S: Simd> SimdVectorizedMathInternal<S> for f64
where
    <S as Simd>::Vf64: SimdFloatVector<S, Element = f64>,
{
    type Vf = <S as Simd>::Vf64;

    fn sin_cos(xx: Self::Vf) -> (Self::Vf, Self::Vf) {
        unimplemented!()
    }

    fn sinh(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }

    fn tanh(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn asin(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn acos(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn atan(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn atan2(y: Self::Vf, x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn asinh(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn acosh(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn atanh(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn exp(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn exph(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn exp2(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn exp10(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn powf(x: Self::Vf, e: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn ln(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn ln_1p(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn log2(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn log10(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn erf(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
    fn ierf(x: Self::Vf) -> Self::Vf {
        unimplemented!()
    }
}