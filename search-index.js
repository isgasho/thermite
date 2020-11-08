var searchIndex = JSON.parse('{\
"thermite":{"doc":"","i":[[3,"SimdBuffer","thermite","Aligned SIMD vector storage",null,null],[3,"VPtr","","",null,null],[3,"Mask","","",null,null],[11,"alloc","","Allocates a new SIMD-aligned element buffer and zeroes the…",0,[[]]],[11,"gather_checked","","Gathers values from the buffer using more efficient…",0,[[]]],[11,"fill","","Fills the buffer with vectors using aligned stores",0,[[]]],[11,"len","","",0,[[]]],[11,"len_vectors","","",0,[[]]],[11,"as_slice","","",0,[[]]],[11,"as_vector_slice","","",0,[[]]],[11,"as_mut_slice","","",0,[[]]],[11,"as_mut_vector_slice","","",0,[[]]],[11,"load_vector","","",0,[[]]],[11,"store_vector","","",0,[[]]],[0,"backends","","",null,null],[0,"avx2","thermite::backends","",null,null],[3,"AVX2","thermite::backends::avx2","",null,null],[3,"f32x8","","",null,null],[3,"f64x8","","",null,null],[3,"i16x8","","",null,null],[3,"i32x8","","",null,null],[3,"i64x8","","",null,null],[3,"u32x8","","",null,null],[3,"u64x8","","",null,null],[11,"splat","thermite","",1,[[]]],[11,"add","","",1,[[]]],[11,"is_null","","",1,[[],["mask",3]]],[11,"read","","",1,[[],["associatedvector",6]]],[11,"read_masked","","",1,[[["mask",3],["associatedvector",6]],["associatedvector",6]]],[11,"write","","",1,[[["associatedvector",6]]]],[11,"write_masked","","",1,[[["mask",3],["associatedvector",6]]]],[11,"value","","",2,[[]]],[11,"truthy","","Mask vector containing all true/non-zero lanes.",2,[[]]],[11,"falsey","","Mask vector containing all zero/false lanes.",2,[[]]],[11,"from_value","","",2,[[]]],[11,"cast_to","","",2,[[],[["mask",3],["simdcastfrom",8]]]],[11,"all","","Returns `true` if all lanes are truthy",2,[[]]],[11,"any","","Returns `true` if any lanes are truthy",2,[[]]],[11,"none","","Returns `true` if all lanes are falsey",2,[[]]],[11,"count","","Counts the number of truthy lanes",2,[[]]],[11,"select","","For each lane, selects from `t` if the mask lane is…",2,[[]]],[18,"FULL_BITMASK","","",2,null],[11,"and_not","","",2,[[]]],[11,"bitmask","","",2,[[]]],[6,"AssociatedVector","","Associated vector type for a scalar type",null,null],[6,"Vi32","","",null,null],[6,"Vu32","","",null,null],[6,"Vu64","","",null,null],[6,"Vf32","","",null,null],[6,"Vf64","","",null,null],[8,"SimdVectorizedMath","","Set of vectorized special functions optimized for both…",null,null],[10,"scale","","Scales values between `in_min` and `in_max`, to between…",3,[[]]],[10,"lerp","","Linearly interpolates between `a` and `b` using `self`",3,[[]]],[10,"sin","","Computes the sine of a vector.",3,[[]]],[10,"cos","","Computes the cosine of a vector.",3,[[]]],[10,"tan","","Computes the tangent of a vector.",3,[[]]],[10,"sin_cos","","Computes both the sine and cosine of a vector together…",3,[[]]],[10,"sinh","","Computes the hyperbolic-sine of a vector.",3,[[]]],[10,"cosh","","Computes the hyperbolic-cosine of a vector.",3,[[]]],[10,"tanh","","Computes the hyperbolic-tangent of a vector.",3,[[]]],[10,"asinh","","Computes the hyperbolic-arcsine of a vector.",3,[[]]],[10,"acosh","","Computes the hyperbolic-arccosine of a vector.",3,[[]]],[10,"atanh","","Computes the hyperbolic-arctangent of a vector.",3,[[]]],[10,"asin","","Computes the arcsine of a vector.",3,[[]]],[10,"acos","","Computes the arccosine of a vector.",3,[[]]],[10,"atan","","Computes the arctangent of a vector.",3,[[]]],[10,"atan2","","Computes the four quadrant arc-tangent of `y`(`self`) and…",3,[[]]],[10,"exp","","The exponential function, returns `e^(self)`",3,[[]]],[10,"exph","","Half-exponential function, returns `0.5 * e^(self)`",3,[[]]],[10,"exp2","","Binary exponential function, returns `2^(self)`",3,[[]]],[10,"exp10","","Base-10 exponential function, returns `10^(self)`",3,[[]]],[10,"exp_m1","","Exponential function minus one, `e^(self) - 1.0`, special…",3,[[]]],[10,"powf","","Computes `x^e` where `x` is `self` and `e` is a vector of…",3,[[]]],[10,"powi","","Computes `x^e` where `x` is `self` and `e` is a vector of…",3,[[]]],[10,"ln","","Computes the natural logarithm of a vector.",3,[[]]],[10,"ln_1p","","Computes `ln(1+x)` where `x` is `self`, more accurately…",3,[[]]],[10,"log2","","Computes the base-2 logarithm of a vector",3,[[]]],[10,"log10","","Computes the base-10 logarithm of a vector",3,[[]]],[10,"erf","","Computes the error function for each value in a vector",3,[[]]],[10,"erfinv","","Computes the inverse error function for each value in a…",3,[[]]],[8,"SimdCastFrom","","Describes casting from one SIMD vector type to another",null,null],[10,"from_cast","","",4,[[]]],[10,"from_cast_mask","","",4,[[["mask",3]],["mask",3]]],[8,"SimdCastTo","","Describes casting to one SIMD vector type from another",null,null],[10,"cast","","",5,[[]]],[10,"cast_mask","","",5,[[["mask",3]],["mask",3]]],[8,"SimdCasts","","List of valid casts between SIMD types in an instruction set",null,null],[11,"cast_to","","",6,[[],["simdcastfrom",8]]],[8,"SimdElement","","Umbrella trait for SIMD vector element bounds",null,null],[8,"SimdVectorBase","","Basic shared vector interface",null,null],[16,"Element","","",7,null],[18,"ELEMENT_SIZE","","Size of element type in bytes",7,null],[18,"NUM_ELEMENTS","","",7,null],[18,"ALIGNMENT","","",7,null],[10,"splat","","",7,[[]]],[11,"undefined","","Possibly returns a vector containing undefined or…",7,[[]]],[11,"splat_any","","",7,[[]]],[11,"alloc","","",7,[[],["simdbuffer",3]]],[11,"extract","","",7,[[]]],[11,"replace","","",7,[[]]],[10,"extract_unchecked","","",7,[[]]],[10,"replace_unchecked","","",7,[[]]],[11,"load_aligned","","",7,[[]]],[11,"load_unaligned","","",7,[[]]],[11,"store_aligned","","",7,[[]]],[11,"store_unaligned","","",7,[[]]],[11,"load_aligned_unchecked","","",7,[[]]],[11,"store_aligned_unchecked","","",7,[[]]],[11,"load_unaligned_unchecked","","",7,[[]]],[11,"store_unaligned_unchecked","","",7,[[]]],[11,"gather","","",7,[[]]],[11,"scatter","","",7,[[]]],[11,"gather_masked","","",7,[[["mask",3]]]],[11,"scatter_masked","","",7,[[["mask",3]]]],[8,"SimdBitwise","","Defines bitwise operations on vectors",null,null],[11,"and_not","","Computes `!self & other`, may be more performant than the…",8,[[]]],[18,"FULL_BITMASK","","",8,null],[10,"bitmask","","",8,[[]]],[8,"SimdVector","","Defines common operations on numeric vectors",null,null],[10,"zero","","",9,[[]]],[10,"one","","",9,[[]]],[10,"min_value","","Maximum representable valid value",9,[[]]],[10,"max_value","","Minimum representable valid value (may be negative)",9,[[]]],[11,"min","","Per-lane, select the minimum value",9,[[]]],[11,"max","","Per-lane, select the maximum value",9,[[]]],[10,"min_element","","Find the minimum value across all lanes",9,[[]]],[10,"max_element","","Find the maximum value across all lanes",9,[[]]],[10,"eq","","",9,[[],["mask",3]]],[11,"ne","","",9,[[],["mask",3]]],[11,"lt","","",9,[[],["mask",3]]],[11,"le","","",9,[[],["mask",3]]],[10,"gt","","",9,[[],["mask",3]]],[10,"ge","","",9,[[],["mask",3]]],[8,"SimdIntoBits","","Transmutations into raw bits",null,null],[11,"into_bits","","",10,[[]]],[8,"SimdFromBits","","Transmutations from raw bits",null,null],[11,"from_bits","","",11,[[]]],[8,"SimdIntVector","","Integer SIMD vectors",null,null],[10,"saturating_add","","Saturating addition, will not wrap",12,[[]]],[10,"saturating_sub","","Saturating subtraction, will not wrap",12,[[]]],[10,"wrapping_sum","","Sum all lanes together, wrapping the result if it can\'t…",12,[[]]],[10,"wrapping_product","","Multiple all lanes together, wrapping the result if it…",12,[[]]],[8,"SimdSignedVector","","Signed SIMD vector, with negative numbers",null,null],[10,"neg_one","","",13,[[]]],[10,"min_positive","","Minimum positive number",13,[[]]],[11,"abs","","Absolute value",13,[[]]],[11,"copysign","","Copies the sign from `sign` to `self`",13,[[]]],[11,"signum","","Returns `-1` if less than zero, `+1` otherwise.",13,[[]]],[11,"is_positive","","Test if positive, greater or equal to zero",13,[[],["mask",3]]],[11,"is_negative","","Test if negative, less than zero",13,[[],["mask",3]]],[8,"SimdFloatVector","","Floating point SIMD vectors",null,null],[16,"Vi","","",14,null],[16,"Vu","","",14,null],[10,"epsilon","","",14,[[]]],[10,"infinity","","",14,[[]]],[10,"neg_infinity","","",14,[[]]],[10,"neg_zero","","",14,[[]]],[10,"nan","","",14,[[]]],[11,"load_half_unaligned","","Load half-precision floats and up-convert them into `Self`",14,[[]]],[11,"store_half_unaligned","","Down-convert `self` into half-precision and store",14,[[]]],[10,"load_half_unaligned_unchecked","","",14,[[]]],[10,"store_half_unaligned_unchecked","","",14,[[]]],[10,"to_int_fast","","Can convert to a signed integer faster than a regular…",14,[[]]],[10,"to_uint_fast","","Can convert to a signed integer faster than a regular…",14,[[]]],[11,"combine_sign","","Same as `self * sign.signum()` or `select(sign_bit(sign),…",14,[[]]],[10,"sum","","Compute the horizontal sum of all elements",14,[[]]],[10,"product","","Compute the horizontal product of all elements",14,[[]]],[10,"mul_add","","Fused multiply-add",14,[[]]],[11,"mul_sub","","Fused multiply-subtract",14,[[]]],[11,"nmul_add","","Fused negated multiple-add",14,[[]]],[11,"nmul_sub","","Fused negated multiple-subtract",14,[[]]],[10,"round","","",14,[[]]],[10,"ceil","","",14,[[]]],[10,"floor","","",14,[[]]],[10,"trunc","","",14,[[]]],[11,"fract","","",14,[[]]],[10,"sqrt","","",14,[[]]],[11,"rsqrt","","Compute the approximate reciprocal of the square root `(1…",14,[[]]],[11,"rsqrt_precise","","A more precise `1 / sqrt(x)` variation, which may use…",14,[[]]],[11,"recepr","","Computes the approximate reciprocal/inverse of each value",14,[[]]],[11,"approx_eq","","",14,[[],["mask",3]]],[11,"clamp","","",14,[[]]],[11,"saturate","","Clamps self to between 0 and 1",14,[[]]],[11,"is_finite","","",14,[[],["mask",3]]],[11,"is_infinite","","",14,[[],["mask",3]]],[11,"is_normal","","",14,[[],["mask",3]]],[10,"is_subnormal","","",14,[[],["mask",3]]],[11,"is_zero_or_subnormal","","",14,[[],["mask",3]]],[11,"is_nan","","",14,[[],["mask",3]]],[8,"SimdPointer","","Guarantees the vector can be used as a pointer in `VPtr`",null,null],[8,"Simd","","SIMD Instruction set",null,null],[16,"Vi32","","",15,null],[16,"Vi64","","",15,null],[16,"Vu32","","",15,null],[16,"Vu64","","",15,null],[16,"Vf32","","",15,null],[16,"Vf64","","",15,null],[16,"Vusize","","",15,null],[11,"from_cast","","",0,[[]]],[11,"from_cast_mask","","",0,[[["mask",3]],["mask",3]]],[11,"cast","","",0,[[]]],[11,"cast_mask","","",0,[[["mask",3]],["mask",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from_cast","","",1,[[]]],[11,"from_cast_mask","","",1,[[["mask",3]],["mask",3]]],[11,"cast","","",1,[[]]],[11,"cast_mask","","",1,[[["mask",3]],["mask",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from_cast","","",2,[[]]],[11,"from_cast_mask","","",2,[[["mask",3]],["mask",3]]],[11,"cast","","",2,[[]]],[11,"cast_mask","","",2,[[["mask",3]],["mask",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from_cast","thermite::backends::avx2","",16,[[]]],[11,"from_cast_mask","","",16,[[["mask",3]],["mask",3]]],[11,"cast","","",16,[[]]],[11,"cast_mask","","",16,[[["mask",3]],["mask",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from_cast","","",17,[[]]],[11,"from_cast_mask","","",17,[[["mask",3]],["mask",3]]],[11,"cast","","",17,[[]]],[11,"cast_mask","","",17,[[["mask",3]],["mask",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from_cast","","",18,[[]]],[11,"from_cast_mask","","",18,[[["mask",3]],["mask",3]]],[11,"cast","","",18,[[]]],[11,"cast_mask","","",18,[[["mask",3]],["mask",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from_cast","","",19,[[]]],[11,"from_cast_mask","","",19,[[["mask",3]],["mask",3]]],[11,"cast","","",19,[[]]],[11,"cast_mask","","",19,[[["mask",3]],["mask",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from_cast","","",20,[[]]],[11,"from_cast_mask","","",20,[[["mask",3]],["mask",3]]],[11,"cast","","",20,[[]]],[11,"cast_mask","","",20,[[["mask",3]],["mask",3]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"from_cast","","",21,[[]]],[11,"from_cast_mask","","",21,[[["mask",3]],["mask",3]]],[11,"cast","","",21,[[]]],[11,"cast_mask","","",21,[[["mask",3]],["mask",3]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"from_cast","","",22,[[]]],[11,"from_cast_mask","","",22,[[["mask",3]],["mask",3]]],[11,"cast","","",22,[[]]],[11,"cast_mask","","",22,[[["mask",3]],["mask",3]]],[11,"from","","",22,[[]]],[11,"into","","",22,[[]]],[11,"to_owned","","",22,[[]]],[11,"clone_into","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"from_cast","","",23,[[]]],[11,"from_cast_mask","","",23,[[["mask",3]],["mask",3]]],[11,"cast","","",23,[[]]],[11,"cast_mask","","",23,[[["mask",3]],["mask",3]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"to_owned","","",23,[[]]],[11,"clone_into","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"from_cast","","",17,[[["i32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",17,[[["mask",3],["i32x8",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",17,[[["u32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",17,[[["mask",3],["avx2",3],["u32x8",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",17,[[["u64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",17,[[["u64x8",3],["avx2",3],["mask",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",17,[[["f64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",17,[[["f64x8",3],["avx2",3],["mask",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",17,[[["i64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",17,[[["i64x8",3],["mask",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",18,[[["i32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",18,[[["mask",3],["i32x8",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",18,[[["u32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",18,[[["mask",3],["avx2",3],["u32x8",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",18,[[["f32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",18,[[["mask",3],["f32x8",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",18,[[["u64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",18,[[["u64x8",3],["avx2",3],["mask",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",18,[[["i64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",18,[[["i64x8",3],["mask",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",20,[[["f32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",20,[[["mask",3],["f32x8",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",20,[[["u32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",20,[[["mask",3],["avx2",3],["u32x8",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",20,[[["u64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",20,[[["u64x8",3],["avx2",3],["mask",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",20,[[["f64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",20,[[["f64x8",3],["avx2",3],["mask",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",20,[[["i64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",20,[[["i64x8",3],["mask",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",21,[[["f32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",21,[[["mask",3],["f32x8",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",21,[[["i32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",21,[[["mask",3],["i32x8",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",21,[[["u32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",21,[[["mask",3],["avx2",3],["u32x8",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",21,[[["u64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",21,[[["u64x8",3],["avx2",3],["mask",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",21,[[["f64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",21,[[["f64x8",3],["avx2",3],["mask",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",22,[[["i32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",22,[[["mask",3],["i32x8",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",22,[[["f32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",22,[[["mask",3],["f32x8",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",22,[[["f64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",22,[[["f64x8",3],["avx2",3],["mask",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",22,[[["u64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",22,[[["u64x8",3],["avx2",3],["mask",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",22,[[["i64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",22,[[["i64x8",3],["mask",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",23,[[["u32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",23,[[["mask",3],["avx2",3],["u32x8",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",23,[[["f32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",23,[[["mask",3],["f32x8",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",23,[[["i32x8",3],["avx2",3]]]],[11,"from_cast_mask","","",23,[[["mask",3],["i32x8",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",23,[[["f64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",23,[[["f64x8",3],["avx2",3],["mask",3]],[["mask",3],["avx2",3]]]],[11,"from_cast","","",23,[[["i64x8",3],["avx2",3]]]],[11,"from_cast_mask","","",23,[[["i64x8",3],["mask",3],["avx2",3]],[["mask",3],["avx2",3]]]],[11,"splat","","",17,[[]]],[11,"undefined","","",17,[[]]],[11,"load_aligned_unchecked","","",17,[[]]],[11,"load_unaligned_unchecked","","",17,[[]]],[11,"store_aligned_unchecked","","",17,[[]]],[11,"store_unaligned_unchecked","","",17,[[]]],[11,"extract_unchecked","","",17,[[]]],[11,"replace_unchecked","","",17,[[]]],[11,"gather","","",17,[[["i32x8",3],["avx2",3]]]],[11,"gather_masked","","",17,[[["mask",3],["i32x8",3],["avx2",3]]]],[11,"splat","","",18,[[]]],[11,"undefined","","",18,[[]]],[11,"load_aligned_unchecked","","",18,[[]]],[11,"store_aligned_unchecked","","",18,[[]]],[11,"extract_unchecked","","",18,[[]]],[11,"replace_unchecked","","",18,[[]]],[11,"gather","","",18,[[["i32x8",3],["avx2",3]]]],[11,"gather_masked","","",18,[[["mask",3],["i32x8",3],["avx2",3]]]],[11,"splat","","",19,[[]]],[11,"undefined","","",19,[[]]],[11,"load_aligned_unchecked","","",19,[[]]],[11,"load_unaligned_unchecked","","",19,[[]]],[11,"store_aligned_unchecked","","",19,[[]]],[11,"store_unaligned_unchecked","","",19,[[]]],[11,"extract_unchecked","","",19,[[]]],[11,"replace_unchecked","","",19,[[]]],[11,"splat","","",20,[[]]],[11,"undefined","","",20,[[]]],[11,"load_aligned_unchecked","","",20,[[]]],[11,"load_unaligned_unchecked","","",20,[[]]],[11,"store_aligned_unchecked","","",20,[[]]],[11,"store_unaligned_unchecked","","",20,[[]]],[11,"extract_unchecked","","",20,[[]]],[11,"replace_unchecked","","",20,[[]]],[11,"gather","","",20,[[["i32x8",3],["avx2",3]]]],[11,"gather_masked","","",20,[[["mask",3],["i32x8",3],["avx2",3]]]],[11,"splat","","",21,[[]]],[11,"undefined","","",21,[[]]],[11,"load_aligned_unchecked","","",21,[[]]],[11,"store_aligned_unchecked","","",21,[[]]],[11,"extract_unchecked","","",21,[[]]],[11,"replace_unchecked","","",21,[[]]],[11,"gather","","",21,[[["i32x8",3],["avx2",3]]]],[11,"gather_masked","","",21,[[["mask",3],["i32x8",3],["avx2",3]]]],[11,"splat","","",22,[[]]],[11,"undefined","","",22,[[]]],[11,"load_aligned_unchecked","","",22,[[]]],[11,"load_unaligned_unchecked","","",22,[[]]],[11,"store_aligned_unchecked","","",22,[[]]],[11,"store_unaligned_unchecked","","",22,[[]]],[11,"extract_unchecked","","",22,[[]]],[11,"replace_unchecked","","",22,[[]]],[11,"gather","","",22,[[["i32x8",3],["avx2",3]]]],[11,"gather_masked","","",22,[[["mask",3],["i32x8",3],["avx2",3]]]],[11,"splat","","",23,[[]]],[11,"undefined","","",23,[[]]],[11,"load_aligned_unchecked","","",23,[[]]],[11,"store_aligned_unchecked","","",23,[[]]],[11,"extract_unchecked","","",23,[[]]],[11,"replace_unchecked","","",23,[[]]],[11,"gather","","",23,[[["i32x8",3],["avx2",3]]]],[11,"gather_masked","","",23,[[["mask",3],["i32x8",3],["avx2",3]]]],[11,"splat","thermite","",2,[[]]],[11,"load_aligned_unchecked","","",2,[[]]],[11,"store_aligned_unchecked","","",2,[[]]],[11,"load_unaligned_unchecked","","",2,[[]]],[11,"store_unaligned_unchecked","","",2,[[]]],[11,"extract_unchecked","","",2,[[]]],[11,"replace_unchecked","","",2,[[]]],[11,"and_not","thermite::backends::avx2","",17,[[]]],[11,"bitmask","","",17,[[]]],[11,"_mm_not","","",17,[[]]],[11,"_mm_bitand","","",17,[[]]],[11,"_mm_bitor","","",17,[[]]],[11,"_mm_bitxor","","",17,[[]]],[11,"_mm_shr","","",17,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",17,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shli","","",17,[[]]],[11,"_mm_shri","","",17,[[]]],[11,"and_not","","",18,[[]]],[11,"bitmask","","",18,[[]]],[11,"_mm_not","","",18,[[]]],[11,"_mm_bitand","","",18,[[]]],[11,"_mm_bitor","","",18,[[]]],[11,"_mm_bitxor","","",18,[[]]],[11,"_mm_shr","","",18,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",18,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shli","","",18,[[]]],[11,"_mm_shri","","",18,[[]]],[11,"and_not","","",20,[[]]],[11,"bitmask","","",20,[[]]],[11,"_mm_not","","",20,[[]]],[11,"_mm_bitand","","",20,[[]]],[11,"_mm_bitor","","",20,[[]]],[11,"_mm_bitxor","","",20,[[]]],[11,"_mm_shr","","",20,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",20,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shli","","",20,[[]]],[11,"_mm_shri","","",20,[[]]],[11,"and_not","","",21,[[]]],[11,"bitmask","","",21,[[]]],[11,"_mm_not","","",21,[[]]],[11,"_mm_bitand","","",21,[[]]],[11,"_mm_bitor","","",21,[[]]],[11,"_mm_bitxor","","",21,[[]]],[11,"_mm_shr","","",21,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",21,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shli","","",21,[[]]],[11,"_mm_shri","","",21,[[]]],[11,"and_not","","",22,[[]]],[11,"bitmask","","",22,[[]]],[11,"_mm_not","","",22,[[]]],[11,"_mm_bitand","","",22,[[]]],[11,"_mm_bitor","","",22,[[]]],[11,"_mm_bitxor","","",22,[[]]],[11,"_mm_shr","","",22,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",22,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shli","","",22,[[]]],[11,"_mm_shri","","",22,[[]]],[11,"and_not","","",23,[[]]],[11,"bitmask","","",23,[[]]],[11,"_mm_not","","",23,[[]]],[11,"_mm_bitand","","",23,[[]]],[11,"_mm_bitor","","",23,[[]]],[11,"_mm_bitxor","","",23,[[]]],[11,"_mm_shr","","",23,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",23,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shli","","",23,[[]]],[11,"_mm_shri","","",23,[[]]],[11,"zero","","",17,[[]]],[11,"one","","",17,[[]]],[11,"min_value","","",17,[[]]],[11,"max_value","","",17,[[]]],[11,"min","","",17,[[]]],[11,"max","","",17,[[]]],[11,"min_element","","",17,[[]]],[11,"max_element","","",17,[[]]],[11,"eq","","",17,[[],[["mask",3],["avx2",3]]]],[11,"ne","","",17,[[],[["mask",3],["avx2",3]]]],[11,"lt","","",17,[[],[["mask",3],["avx2",3]]]],[11,"le","","",17,[[],[["mask",3],["avx2",3]]]],[11,"gt","","",17,[[],[["mask",3],["avx2",3]]]],[11,"ge","","",17,[[],[["mask",3],["avx2",3]]]],[11,"_mm_add","","",17,[[]]],[11,"_mm_sub","","",17,[[]]],[11,"_mm_mul","","",17,[[]]],[11,"_mm_div","","",17,[[]]],[11,"_mm_rem","","",17,[[]]],[11,"zero","","",18,[[]]],[11,"one","","",18,[[]]],[11,"min_value","","",18,[[]]],[11,"max_value","","",18,[[]]],[11,"min","","",18,[[]]],[11,"max","","",18,[[]]],[11,"min_element","","",18,[[]]],[11,"max_element","","",18,[[]]],[11,"eq","","",18,[[],[["mask",3],["avx2",3]]]],[11,"ne","","",18,[[],[["mask",3],["avx2",3]]]],[11,"lt","","",18,[[],[["mask",3],["avx2",3]]]],[11,"le","","",18,[[],[["mask",3],["avx2",3]]]],[11,"gt","","",18,[[],[["mask",3],["avx2",3]]]],[11,"ge","","",18,[[],[["mask",3],["avx2",3]]]],[11,"_mm_add","","",18,[[]]],[11,"_mm_sub","","",18,[[]]],[11,"_mm_mul","","",18,[[]]],[11,"_mm_div","","",18,[[]]],[11,"_mm_rem","","",18,[[]]],[11,"zero","","",20,[[]]],[11,"one","","",20,[[]]],[11,"min","","",20,[[]]],[11,"max","","",20,[[]]],[11,"min_value","","",20,[[]]],[11,"max_value","","",20,[[]]],[11,"min_element","","",20,[[]]],[11,"max_element","","",20,[[]]],[11,"eq","","",20,[[],[["mask",3],["avx2",3]]]],[11,"gt","","",20,[[],[["mask",3],["avx2",3]]]],[11,"ge","","",20,[[],[["mask",3],["avx2",3]]]],[11,"_mm_add","","",20,[[]]],[11,"_mm_sub","","",20,[[]]],[11,"_mm_mul","","",20,[[]]],[11,"_mm_div","","",20,[[]]],[11,"_mm_rem","","",20,[[]]],[11,"zero","","",21,[[]]],[11,"one","","",21,[[]]],[11,"min_value","","",21,[[]]],[11,"max_value","","",21,[[]]],[11,"min_element","","",21,[[]]],[11,"max_element","","",21,[[]]],[11,"eq","","",21,[[],[["mask",3],["avx2",3]]]],[11,"gt","","",21,[[],[["mask",3],["avx2",3]]]],[11,"ge","","",21,[[],[["mask",3],["avx2",3]]]],[11,"_mm_add","","",21,[[]]],[11,"_mm_sub","","",21,[[]]],[11,"_mm_mul","","",21,[[]]],[11,"_mm_div","","",21,[[]]],[11,"_mm_rem","","",21,[[]]],[11,"zero","","",22,[[]]],[11,"one","","",22,[[]]],[11,"min","","",22,[[]]],[11,"max","","",22,[[]]],[11,"min_value","","",22,[[]]],[11,"max_value","","",22,[[]]],[11,"min_element","","",22,[[]]],[11,"max_element","","",22,[[]]],[11,"eq","","",22,[[],[["mask",3],["avx2",3]]]],[11,"gt","","",22,[[],[["mask",3],["avx2",3]]]],[11,"ge","","",22,[[],[["mask",3],["avx2",3]]]],[11,"_mm_add","","",22,[[]]],[11,"_mm_sub","","",22,[[]]],[11,"_mm_mul","","",22,[[]]],[11,"_mm_div","","",22,[[]]],[11,"_mm_rem","","",22,[[]]],[11,"zero","","",23,[[]]],[11,"one","","",23,[[]]],[11,"min_value","","",23,[[]]],[11,"max_value","","",23,[[]]],[11,"min_element","","",23,[[]]],[11,"max_element","","",23,[[]]],[11,"eq","","",23,[[],[["mask",3],["avx2",3]]]],[11,"gt","","",23,[[],[["mask",3],["avx2",3]]]],[11,"ge","","",23,[[],[["mask",3],["avx2",3]]]],[11,"_mm_add","","",23,[[]]],[11,"_mm_sub","","",23,[[]]],[11,"_mm_mul","","",23,[[]]],[11,"_mm_div","","",23,[[]]],[11,"_mm_rem","","",23,[[]]],[11,"into_bits","","",17,[[],[["u32x8",3],["avx2",3]]]],[11,"into_bits","","",18,[[],[["u64x8",3],["avx2",3]]]],[11,"into_bits","","",20,[[],[["u32x8",3],["avx2",3]]]],[11,"into_bits","","",21,[[],[["u64x8",3],["avx2",3]]]],[11,"from_bits","","",17,[[["u32x8",3],["avx2",3]]]],[11,"from_bits","","",18,[[["u64x8",3],["avx2",3]]]],[11,"from_bits","","",20,[[["u32x8",3],["avx2",3]]]],[11,"from_bits","","",21,[[["u64x8",3],["avx2",3]]]],[11,"saturating_add","","",20,[[]]],[11,"saturating_sub","","",20,[[]]],[11,"wrapping_sum","","",20,[[]]],[11,"wrapping_product","","",20,[[]]],[11,"saturating_add","","",21,[[]]],[11,"saturating_sub","","",21,[[]]],[11,"wrapping_sum","","",21,[[]]],[11,"wrapping_product","","",21,[[]]],[11,"saturating_add","","",22,[[]]],[11,"saturating_sub","","",22,[[]]],[11,"wrapping_sum","","",22,[[]]],[11,"wrapping_product","","",22,[[]]],[11,"saturating_add","","",23,[[]]],[11,"saturating_sub","","",23,[[]]],[11,"wrapping_sum","","",23,[[]]],[11,"wrapping_product","","",23,[[]]],[11,"neg_one","","",17,[[]]],[11,"min_positive","","",17,[[]]],[11,"signum","","",17,[[]]],[11,"copysign","","",17,[[]]],[11,"abs","","",17,[[]]],[11,"_mm_neg","","",17,[[]]],[11,"neg_one","","",18,[[]]],[11,"min_positive","","",18,[[]]],[11,"signum","","",18,[[]]],[11,"copysign","","",18,[[]]],[11,"abs","","",18,[[]]],[11,"_mm_neg","","",18,[[]]],[11,"neg_one","","",20,[[]]],[11,"min_positive","","",20,[[]]],[11,"abs","","",20,[[]]],[11,"_mm_neg","","",20,[[]]],[11,"neg_one","","",21,[[]]],[11,"min_positive","","",21,[[]]],[11,"abs","","",21,[[]]],[11,"_mm_neg","","",21,[[]]],[11,"epsilon","","",17,[[]]],[11,"infinity","","",17,[[]]],[11,"neg_infinity","","",17,[[]]],[11,"neg_zero","","",17,[[]]],[11,"nan","","",17,[[]]],[11,"load_half_unaligned_unchecked","","",17,[[]]],[11,"store_half_unaligned_unchecked","","",17,[[]]],[11,"to_int_fast","","",17,[[]]],[11,"to_uint_fast","","",17,[[]]],[11,"sum","","",17,[[]]],[11,"product","","",17,[[]]],[11,"mul_add","","",17,[[]]],[11,"mul_sub","","",17,[[]]],[11,"nmul_add","","",17,[[]]],[11,"nmul_sub","","",17,[[]]],[11,"floor","","",17,[[]]],[11,"ceil","","",17,[[]]],[11,"round","","",17,[[]]],[11,"trunc","","",17,[[]]],[11,"sqrt","","",17,[[]]],[11,"rsqrt","","",17,[[]]],[11,"rsqrt_precise","","",17,[[]]],[11,"recepr","","",17,[[]]],[11,"is_infinite","","",17,[[],[["mask",3],["avx2",3]]]],[11,"is_finite","","",17,[[],[["mask",3],["avx2",3]]]],[11,"is_subnormal","","",17,[[],[["mask",3],["avx2",3]]]],[11,"is_zero_or_subnormal","","",17,[[],[["mask",3],["avx2",3]]]],[11,"epsilon","","",18,[[]]],[11,"infinity","","",18,[[]]],[11,"neg_infinity","","",18,[[]]],[11,"neg_zero","","",18,[[]]],[11,"nan","","",18,[[]]],[11,"load_half_unaligned_unchecked","","",18,[[]]],[11,"store_half_unaligned_unchecked","","",18,[[]]],[11,"to_int_fast","","",18,[[]]],[11,"to_uint_fast","","",18,[[]]],[11,"sum","","",18,[[]]],[11,"product","","",18,[[]]],[11,"mul_add","","",18,[[]]],[11,"mul_sub","","",18,[[]]],[11,"nmul_add","","",18,[[]]],[11,"nmul_sub","","",18,[[]]],[11,"floor","","",18,[[]]],[11,"ceil","","",18,[[]]],[11,"round","","",18,[[]]],[11,"trunc","","",18,[[]]],[11,"sqrt","","",18,[[]]],[11,"is_infinite","","",18,[[],[["mask",3],["avx2",3]]]],[11,"is_finite","","",18,[[],[["mask",3],["avx2",3]]]],[11,"is_subnormal","","",18,[[],[["mask",3],["avx2",3]]]],[11,"is_zero_or_subnormal","","",18,[[],[["mask",3],["avx2",3]]]],[11,"drop","thermite","",0,[[]]],[11,"clone","thermite::backends::avx2","",16,[[],["avx2",3]]],[11,"clone","","",17,[[],["f32x8",3]]],[11,"clone","","",18,[[],["f64x8",3]]],[11,"clone","","",19,[[],["i16x8",3]]],[11,"clone","","",20,[[],["i32x8",3]]],[11,"clone","","",21,[[],["i64x8",3]]],[11,"clone","","",22,[[],["u32x8",3]]],[11,"clone","","",23,[[],["u64x8",3]]],[11,"clone","thermite","",1,[[],["vptr",3]]],[11,"clone","","",2,[[],["mask",3]]],[11,"default","thermite::backends::avx2","",17,[[]]],[11,"default","","",18,[[]]],[11,"default","","",19,[[]]],[11,"default","","",20,[[]]],[11,"default","","",21,[[]]],[11,"default","","",22,[[]]],[11,"default","","",23,[[]]],[11,"default","thermite","",2,[[]]],[11,"eq","thermite::backends::avx2","",16,[[["avx2",3]]]],[11,"eq","","",17,[[]]],[11,"ne","","",17,[[]]],[11,"eq","","",18,[[]]],[11,"ne","","",18,[[]]],[11,"eq","","",20,[[]]],[11,"ne","","",20,[[]]],[11,"eq","","",21,[[]]],[11,"ne","","",21,[[]]],[11,"eq","","",22,[[]]],[11,"ne","","",22,[[]]],[11,"eq","","",23,[[]]],[11,"ne","","",23,[[]]],[11,"eq","thermite","",1,[[["vptr",3]]]],[11,"ne","","",1,[[["vptr",3]]]],[11,"deref","","",0,[[]]],[11,"deref_mut","","",0,[[]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","thermite::backends::avx2","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",19,[[["formatter",3]],["result",6]]],[11,"fmt","","",20,[[["formatter",3]],["result",6]]],[11,"fmt","","",21,[[["formatter",3]],["result",6]]],[11,"fmt","","",22,[[["formatter",3]],["result",6]]],[11,"fmt","","",23,[[["formatter",3]],["result",6]]],[11,"fmt","thermite","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"div","thermite::backends::avx2","",17,[[]]],[11,"div","","",18,[[]]],[11,"div","","",20,[[]]],[11,"div","","",21,[[]]],[11,"div","","",22,[[]]],[11,"div","","",23,[[]]],[11,"rem","","",17,[[]]],[11,"rem","","",18,[[]]],[11,"rem","","",20,[[]]],[11,"rem","","",21,[[]]],[11,"rem","","",22,[[]]],[11,"rem","","",23,[[]]],[11,"sub","","",17,[[]]],[11,"sub","","",18,[[]]],[11,"sub","","",20,[[]]],[11,"sub","","",21,[[]]],[11,"sub","","",22,[[]]],[11,"sub","","",23,[[]]],[11,"add","","",17,[[]]],[11,"add","","",18,[[]]],[11,"add","","",20,[[]]],[11,"add","","",21,[[]]],[11,"add","","",22,[[]]],[11,"add","","",23,[[]]],[11,"mul","","",17,[[]]],[11,"mul","","",18,[[]]],[11,"mul","","",20,[[]]],[11,"mul","","",21,[[]]],[11,"mul","","",22,[[]]],[11,"mul","","",23,[[]]],[11,"neg","","",17,[[]]],[11,"neg","","",18,[[]]],[11,"neg","","",20,[[]]],[11,"neg","","",21,[[]]],[11,"add_assign","","",17,[[]]],[11,"add_assign","","",18,[[]]],[11,"add_assign","","",20,[[]]],[11,"add_assign","","",21,[[]]],[11,"add_assign","","",22,[[]]],[11,"add_assign","","",23,[[]]],[11,"sub_assign","","",17,[[]]],[11,"sub_assign","","",18,[[]]],[11,"sub_assign","","",20,[[]]],[11,"sub_assign","","",21,[[]]],[11,"sub_assign","","",22,[[]]],[11,"sub_assign","","",23,[[]]],[11,"mul_assign","","",17,[[]]],[11,"mul_assign","","",18,[[]]],[11,"mul_assign","","",20,[[]]],[11,"mul_assign","","",21,[[]]],[11,"mul_assign","","",22,[[]]],[11,"mul_assign","","",23,[[]]],[11,"div_assign","","",17,[[]]],[11,"div_assign","","",18,[[]]],[11,"div_assign","","",20,[[]]],[11,"div_assign","","",21,[[]]],[11,"div_assign","","",22,[[]]],[11,"div_assign","","",23,[[]]],[11,"rem_assign","","",17,[[]]],[11,"rem_assign","","",18,[[]]],[11,"rem_assign","","",20,[[]]],[11,"rem_assign","","",21,[[]]],[11,"rem_assign","","",22,[[]]],[11,"rem_assign","","",23,[[]]],[11,"not","","",17,[[]]],[11,"not","","",18,[[]]],[11,"not","","",20,[[]]],[11,"not","","",21,[[]]],[11,"not","","",22,[[]]],[11,"not","","",23,[[]]],[11,"not","thermite","",2,[[]]],[11,"bitand","thermite::backends::avx2","",17,[[]]],[11,"bitand","","",18,[[]]],[11,"bitand","","",20,[[]]],[11,"bitand","","",21,[[]]],[11,"bitand","","",22,[[]]],[11,"bitand","","",23,[[]]],[11,"bitand","thermite","",2,[[]]],[11,"bitor","thermite::backends::avx2","",17,[[]]],[11,"bitor","","",18,[[]]],[11,"bitor","","",20,[[]]],[11,"bitor","","",21,[[]]],[11,"bitor","","",22,[[]]],[11,"bitor","","",23,[[]]],[11,"bitor","thermite","",2,[[]]],[11,"bitxor","thermite::backends::avx2","",17,[[]]],[11,"bitxor","","",18,[[]]],[11,"bitxor","","",20,[[]]],[11,"bitxor","","",21,[[]]],[11,"bitxor","","",22,[[]]],[11,"bitxor","","",23,[[]]],[11,"bitxor","thermite","",2,[[]]],[11,"shl","thermite::backends::avx2","",17,[[]]],[11,"shl","","",17,[[]]],[11,"shl","","",18,[[]]],[11,"shl","","",18,[[]]],[11,"shl","","",20,[[]]],[11,"shl","","",20,[[]]],[11,"shl","","",21,[[]]],[11,"shl","","",21,[[]]],[11,"shl","","",22,[[]]],[11,"shl","","",22,[[]]],[11,"shl","","",23,[[]]],[11,"shl","","",23,[[]]],[11,"shl","thermite","",2,[[]]],[11,"shr","thermite::backends::avx2","",17,[[]]],[11,"shr","","",17,[[]]],[11,"shr","","",18,[[]]],[11,"shr","","",18,[[]]],[11,"shr","","",20,[[]]],[11,"shr","","",20,[[]]],[11,"shr","","",21,[[]]],[11,"shr","","",21,[[]]],[11,"shr","","",22,[[]]],[11,"shr","","",22,[[]]],[11,"shr","","",23,[[]]],[11,"shr","","",23,[[]]],[11,"shr","thermite","",2,[[]]],[11,"bitand_assign","thermite::backends::avx2","",17,[[]]],[11,"bitand_assign","","",18,[[]]],[11,"bitand_assign","","",20,[[]]],[11,"bitand_assign","","",21,[[]]],[11,"bitand_assign","","",22,[[]]],[11,"bitand_assign","","",23,[[]]],[11,"bitand_assign","thermite","",2,[[]]],[11,"bitor_assign","thermite::backends::avx2","",17,[[]]],[11,"bitor_assign","","",18,[[]]],[11,"bitor_assign","","",20,[[]]],[11,"bitor_assign","","",21,[[]]],[11,"bitor_assign","","",22,[[]]],[11,"bitor_assign","","",23,[[]]],[11,"bitor_assign","thermite","",2,[[]]],[11,"bitxor_assign","thermite::backends::avx2","",17,[[]]],[11,"bitxor_assign","","",18,[[]]],[11,"bitxor_assign","","",20,[[]]],[11,"bitxor_assign","","",21,[[]]],[11,"bitxor_assign","","",22,[[]]],[11,"bitxor_assign","","",23,[[]]],[11,"bitxor_assign","thermite","",2,[[]]],[11,"shl_assign","thermite::backends::avx2","",17,[[]]],[11,"shl_assign","","",17,[[]]],[11,"shl_assign","","",18,[[]]],[11,"shl_assign","","",18,[[]]],[11,"shl_assign","","",20,[[]]],[11,"shl_assign","","",20,[[]]],[11,"shl_assign","","",21,[[]]],[11,"shl_assign","","",21,[[]]],[11,"shl_assign","","",22,[[]]],[11,"shl_assign","","",22,[[]]],[11,"shl_assign","","",23,[[]]],[11,"shl_assign","","",23,[[]]],[11,"shl_assign","thermite","",2,[[]]],[11,"shr_assign","thermite::backends::avx2","",17,[[]]],[11,"shr_assign","","",17,[[]]],[11,"shr_assign","","",18,[[]]],[11,"shr_assign","","",18,[[]]],[11,"shr_assign","","",20,[[]]],[11,"shr_assign","","",20,[[]]],[11,"shr_assign","","",21,[[]]],[11,"shr_assign","","",21,[[]]],[11,"shr_assign","","",22,[[]]],[11,"shr_assign","","",22,[[]]],[11,"shr_assign","","",23,[[]]],[11,"shr_assign","","",23,[[]]],[11,"shr_assign","thermite","",2,[[]]],[11,"hash","thermite::backends::avx2","",16,[[]]]],"p":[[3,"SimdBuffer"],[3,"VPtr"],[3,"Mask"],[8,"SimdVectorizedMath"],[8,"SimdCastFrom"],[8,"SimdCastTo"],[8,"SimdCasts"],[8,"SimdVectorBase"],[8,"SimdBitwise"],[8,"SimdVector"],[8,"SimdIntoBits"],[8,"SimdFromBits"],[8,"SimdIntVector"],[8,"SimdSignedVector"],[8,"SimdFloatVector"],[8,"Simd"],[3,"AVX2"],[3,"f32x8"],[3,"f64x8"],[3,"i16x8"],[3,"i32x8"],[3,"i64x8"],[3,"u32x8"],[3,"u64x8"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);