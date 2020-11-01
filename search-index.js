var searchIndex = JSON.parse('{\
"thermite":{"doc":"","i":[[3,"SimdBuffer","thermite","Aligned SIMD vector storage",null,null],[3,"Vptr","","",null,null],[3,"Mask","","",null,null],[11,"alloc","","",0,[[]]],[11,"fill","","",0,[[]]],[11,"len","","",0,[[]]],[11,"len_vectors","","",0,[[]]],[11,"as_slice","","",0,[[]]],[11,"as_vector_slice","","",0,[[]]],[11,"as_mut_slice","","",0,[[]]],[11,"as_mut_vector_slice","","",0,[[]]],[11,"load_vector","","",0,[[]]],[11,"store_vector","","",0,[[]]],[0,"backends","","",null,null],[0,"avx2","thermite::backends","",null,null],[3,"AVX2","thermite::backends::avx2","",null,null],[3,"f32x8","","",null,null],[3,"f64x8","","",null,null],[3,"i32x8","","",null,null],[3,"u32x8","","",null,null],[3,"u64x8","","",null,null],[11,"splat","thermite","",1,[[]]],[11,"add","","",1,[[]]],[11,"value","","",2,[[]]],[11,"from_value","","",2,[[]]],[11,"truthy","","Mask vector containing all true/non-zero lanes.",2,[[]]],[11,"falsey","","Mask vector containing all zero/false lanes.",2,[[]]],[11,"all","","Returns `true` if all lanes are truthy",2,[[]]],[11,"any","","Returns `true` if any lanes are truthy",2,[[]]],[11,"none","","Returns `true` if all lanes are falsey",2,[[]]],[11,"count","","Counts the number of truthy lanes",2,[[]]],[11,"select","","For each lane, selects from `t` if the mask lane is…",2,[[]]],[8,"SimdCastFrom","","Describes casting from one SIMD vector type to another",null,null],[10,"from_cast","","",3,[[]]],[10,"from_cast_mask","","",3,[[["mask",3]],["mask",3]]],[8,"SimdCastTo","","Describes casting to one SIMD vector type from another",null,null],[10,"cast","","",4,[[]]],[10,"cast_mask","","",4,[[["mask",3]],["mask",3]]],[8,"SimdCasts","","List of valid casts between SIMD types in an instruction set",null,null],[11,"cast_to","","",5,[[],["simdcastfrom",8]]],[8,"SimdVectorBase","","Basic shared vector interface",null,null],[16,"Element","","",6,null],[18,"ELEMENT_SIZE","","Size of element type in bytes",6,null],[18,"NUM_ELEMENTS","","",6,null],[18,"ALIGNMENT","","",6,null],[10,"splat","","",6,[[]]],[11,"splat_any","","",6,[[]]],[11,"extract","","",6,[[]]],[11,"replace","","",6,[[]]],[10,"extract_unchecked","","",6,[[]]],[10,"replace_unchecked","","",6,[[]]],[11,"load_aligned","","",6,[[]]],[11,"load_unaligned","","",6,[[]]],[11,"store_aligned","","",6,[[]]],[11,"store_unaligned","","",6,[[]]],[10,"load_aligned_unchecked","","",6,[[]]],[10,"store_aligned_unchecked","","",6,[[]]],[11,"load_unaligned_unchecked","","",6,[[]]],[11,"store_unaligned_unchecked","","",6,[[]]],[11,"alloc","","",6,[[],["simdbuffer",3]]],[8,"SimdBitwise","","Defines bitwise operations on vectors",null,null],[11,"and_not","","Computes `!self & other`, may be more performant than the…",7,[[]]],[18,"FULL_BITMASK","","",7,null],[10,"bitmask","","",7,[[]]],[8,"SimdVector","","Alias for vector mask type Defines common operations on…",null,null],[10,"zero","","",8,[[]]],[10,"one","","",8,[[]]],[10,"min_value","","Maximum representable valid value",8,[[]]],[10,"max_value","","Minimum representable valid value (may be negative)",8,[[]]],[11,"min","","Per-lane, select the minimum value",8,[[]]],[11,"max","","Per-lane, select the maximum value",8,[[]]],[10,"min_element","","Find the minimum value across all lanes",8,[[]]],[10,"max_element","","Find the maximum value across all lanes",8,[[]]],[10,"eq","","",8,[[],["mask",3]]],[11,"ne","","",8,[[],["mask",3]]],[11,"lt","","",8,[[],["mask",3]]],[11,"le","","",8,[[],["mask",3]]],[11,"gt","","",8,[[],["mask",3]]],[11,"ge","","",8,[[],["mask",3]]],[8,"SimdIntoBits","","Transmutations into raw bits",null,null],[11,"into_bits","","",9,[[]]],[8,"SimdFromBits","","Transmutations from raw bits",null,null],[11,"from_bits","","",10,[[]]],[8,"SimdIntVector","","Integer SIMD vectors",null,null],[11,"saturating_add","","Saturating addition, will not wrap",11,[[]]],[11,"saturating_sub","","Saturating subtraction, will not wrap",11,[[]]],[11,"wrapping_sum","","Sum all lanes together, wrapping the result if it can\'t…",11,[[]]],[11,"wrapping_product","","Multiple all lanes together, wrapping the result if it…",11,[[]]],[8,"SimdSignedVector","","Signed SIMD vector, with negative numbers",null,null],[10,"neg_one","","",12,[[]]],[10,"min_positive","","Minimum positive number",12,[[]]],[11,"abs","","Absolute value",12,[[]]],[11,"copysign","","Copies the sign from `sign` to `self`",12,[[]]],[11,"signum","","Returns `-1` is less than zero, `+1` otherwise.",12,[[]]],[11,"is_positive","","Test if positive, greater or equal to zero",12,[[],["mask",3]]],[11,"is_negative","","Test if negative, less than zero",12,[[],["mask",3]]],[8,"SimdFloatVector","","Floating point SIMD vectors",null,null],[10,"epsilon","","",13,[[]]],[10,"infinity","","",13,[[]]],[10,"neg_infinity","","",13,[[]]],[10,"neg_zero","","",13,[[]]],[10,"nan","","",13,[[]]],[11,"load_half_unaligned","","Load half-precision floats and up-convert them into `Self`",13,[[]]],[11,"store_half_unaligned","","Down-convert `self` into half-precision and store",13,[[]]],[10,"load_half_unaligned_unchecked","","",13,[[]]],[10,"store_half_unaligned_unchecked","","",13,[[]]],[10,"sum","","Compute the horizontal sum of all elements",13,[[]]],[10,"product","","Compute the horizontal product of all elements",13,[[]]],[10,"mul_add","","Fused multiply-add",13,[[]]],[11,"mul_sub","","Fused multiply-subtract",13,[[]]],[11,"neg_mul_add","","Fused negated multiple-add",13,[[]]],[11,"neg_mul_sub","","Fused negated multiple-subtract",13,[[]]],[10,"round","","",13,[[]]],[10,"ceil","","",13,[[]]],[10,"floor","","",13,[[]]],[10,"trunc","","",13,[[]]],[11,"fract","","",13,[[]]],[10,"sqrt","","",13,[[]]],[11,"rsqrt","","Compute the reciprocal of the square root `(1 / sqrt(x))`",13,[[]]],[11,"rsqrt_precise","","A more precise `1 / sqrt(x)` variation, which may use…",13,[[]]],[11,"recepr","","Computes the approximate reciprocal/inverse of each value",13,[[]]],[11,"approx_eq","","",13,[[],["mask",3]]],[11,"clamp","","",13,[[]]],[11,"saturate","","Clamps self to between 0 and 1",13,[[]]],[11,"scale","","Scales values between `in_min` and `in_max`, to between…",13,[[]]],[11,"lerp","","Linearly interpolates between `a` and `b` using `self`",13,[[]]],[11,"is_finite","","",13,[[],["mask",3]]],[11,"is_infinite","","",13,[[],["mask",3]]],[11,"is_normal","","",13,[[],["mask",3]]],[11,"is_nan","","",13,[[],["mask",3]]],[8,"Simd","","SIMD Instruction set",null,null],[16,"Vi32","","",14,null],[16,"Vu32","","",14,null],[16,"Vu64","","",14,null],[16,"Vf32","","",14,null],[16,"Vf64","","",14,null],[16,"Vusize","","",14,null],[11,"from_cast","","",0,[[]]],[11,"from_cast_mask","","",0,[[["mask",3]],["mask",3]]],[11,"cast","","",0,[[]]],[11,"cast_mask","","",0,[[["mask",3]],["mask",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from_cast","","",1,[[]]],[11,"from_cast_mask","","",1,[[["mask",3]],["mask",3]]],[11,"cast","","",1,[[]]],[11,"cast_mask","","",1,[[["mask",3]],["mask",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from_cast","","",2,[[]]],[11,"from_cast_mask","","",2,[[["mask",3]],["mask",3]]],[11,"cast","","",2,[[]]],[11,"cast_mask","","",2,[[["mask",3]],["mask",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from_cast","thermite::backends::avx2","",15,[[]]],[11,"from_cast_mask","","",15,[[["mask",3]],["mask",3]]],[11,"cast","","",15,[[]]],[11,"cast_mask","","",15,[[["mask",3]],["mask",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from_cast","","",16,[[]]],[11,"from_cast_mask","","",16,[[["mask",3]],["mask",3]]],[11,"cast","","",16,[[]]],[11,"cast_mask","","",16,[[["mask",3]],["mask",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from_cast","","",17,[[]]],[11,"from_cast_mask","","",17,[[["mask",3]],["mask",3]]],[11,"cast","","",17,[[]]],[11,"cast_mask","","",17,[[["mask",3]],["mask",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from_cast","","",18,[[]]],[11,"from_cast_mask","","",18,[[["mask",3]],["mask",3]]],[11,"cast","","",18,[[]]],[11,"cast_mask","","",18,[[["mask",3]],["mask",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from_cast","","",19,[[]]],[11,"from_cast_mask","","",19,[[["mask",3]],["mask",3]]],[11,"cast","","",19,[[]]],[11,"cast_mask","","",19,[[["mask",3]],["mask",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from_cast","","",20,[[]]],[11,"from_cast_mask","","",20,[[["mask",3]],["mask",3]]],[11,"cast","","",20,[[]]],[11,"cast_mask","","",20,[[["mask",3]],["mask",3]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"from_cast","","",16,[[["avx2",3],["i32x8",3]]]],[11,"from_cast_mask","","",16,[[["mask",3],["avx2",3],["i32x8",3]],[["avx2",3],["mask",3]]]],[11,"from_cast","","",16,[[["avx2",3],["u64x8",3]]]],[11,"from_cast_mask","","",16,[[["avx2",3],["u64x8",3],["mask",3]],[["avx2",3],["mask",3]]]],[11,"from_cast","","",18,[[["avx2",3],["f32x8",3]]]],[11,"from_cast_mask","","",18,[[["avx2",3],["mask",3],["f32x8",3]],[["avx2",3],["mask",3]]]],[11,"from_cast","","",18,[[["avx2",3],["u64x8",3]]]],[11,"from_cast_mask","","",18,[[["avx2",3],["u64x8",3],["mask",3]],[["avx2",3],["mask",3]]]],[11,"splat","","",16,[[]]],[11,"load_aligned_unchecked","","",16,[[]]],[11,"load_unaligned_unchecked","","",16,[[]]],[11,"store_aligned_unchecked","","",16,[[]]],[11,"store_unaligned_unchecked","","",16,[[]]],[11,"extract_unchecked","","",16,[[]]],[11,"replace_unchecked","","",16,[[]]],[11,"splat","","",17,[[]]],[11,"load_aligned_unchecked","","",17,[[]]],[11,"store_aligned_unchecked","","",17,[[]]],[11,"extract_unchecked","","",17,[[]]],[11,"replace_unchecked","","",17,[[]]],[11,"splat","","",18,[[]]],[11,"load_aligned_unchecked","","",18,[[]]],[11,"load_unaligned_unchecked","","",18,[[]]],[11,"store_aligned_unchecked","","",18,[[]]],[11,"store_unaligned_unchecked","","",18,[[]]],[11,"extract_unchecked","","",18,[[]]],[11,"replace_unchecked","","",18,[[]]],[11,"splat","","",19,[[]]],[11,"load_aligned_unchecked","","",19,[[]]],[11,"load_unaligned_unchecked","","",19,[[]]],[11,"store_aligned_unchecked","","",19,[[]]],[11,"store_unaligned_unchecked","","",19,[[]]],[11,"extract_unchecked","","",19,[[]]],[11,"replace_unchecked","","",19,[[]]],[11,"splat","","",20,[[]]],[11,"load_aligned_unchecked","","",20,[[]]],[11,"store_aligned_unchecked","","",20,[[]]],[11,"extract_unchecked","","",20,[[]]],[11,"replace_unchecked","","",20,[[]]],[11,"splat","thermite","",2,[[]]],[11,"load_aligned_unchecked","","",2,[[]]],[11,"store_aligned_unchecked","","",2,[[]]],[11,"extract_unchecked","","",2,[[]]],[11,"replace_unchecked","","",2,[[]]],[11,"and_not","thermite::backends::avx2","",16,[[]]],[11,"bitmask","","",16,[[]]],[11,"_mm_not","","",16,[[]]],[11,"_mm_bitand","","",16,[[]]],[11,"_mm_bitor","","",16,[[]]],[11,"_mm_bitxor","","",16,[[]]],[11,"_mm_shr","","",16,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",16,[[["u32x8",3],["avx2",3]]]],[11,"and_not","","",17,[[]]],[11,"bitmask","","",17,[[]]],[11,"_mm_not","","",17,[[]]],[11,"_mm_bitand","","",17,[[]]],[11,"_mm_bitor","","",17,[[]]],[11,"_mm_bitxor","","",17,[[]]],[11,"_mm_shr","","",17,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",17,[[["u32x8",3],["avx2",3]]]],[11,"and_not","","",18,[[]]],[11,"bitmask","","",18,[[]]],[11,"_mm_not","","",18,[[]]],[11,"_mm_bitand","","",18,[[]]],[11,"_mm_bitor","","",18,[[]]],[11,"_mm_bitxor","","",18,[[]]],[11,"_mm_shr","","",18,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",18,[[["u32x8",3],["avx2",3]]]],[11,"and_not","","",19,[[]]],[11,"bitmask","","",19,[[]]],[11,"_mm_not","","",19,[[]]],[11,"_mm_bitand","","",19,[[]]],[11,"_mm_bitor","","",19,[[]]],[11,"_mm_bitxor","","",19,[[]]],[11,"_mm_shr","","",19,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",19,[[["u32x8",3],["avx2",3]]]],[11,"and_not","","",20,[[]]],[11,"bitmask","","",20,[[]]],[11,"_mm_not","","",20,[[]]],[11,"_mm_bitand","","",20,[[]]],[11,"_mm_bitor","","",20,[[]]],[11,"_mm_bitxor","","",20,[[]]],[11,"_mm_shr","","",20,[[["u32x8",3],["avx2",3]]]],[11,"_mm_shl","","",20,[[["u32x8",3],["avx2",3]]]],[11,"and_not","thermite","",2,[[]]],[11,"bitmask","","",2,[[]]],[11,"_mm_not","","",2,[[]]],[11,"_mm_bitand","","",2,[[]]],[11,"_mm_bitor","","",2,[[]]],[11,"_mm_bitxor","","",2,[[]]],[11,"_mm_shr","","",2,[[]]],[11,"_mm_shl","","",2,[[]]],[11,"zero","thermite::backends::avx2","",16,[[]]],[11,"one","","",16,[[]]],[11,"min_value","","",16,[[]]],[11,"max_value","","",16,[[]]],[11,"min","","",16,[[]]],[11,"max","","",16,[[]]],[11,"min_element","","",16,[[]]],[11,"max_element","","",16,[[]]],[11,"eq","","",16,[[],[["avx2",3],["mask",3]]]],[11,"ne","","",16,[[],[["avx2",3],["mask",3]]]],[11,"lt","","",16,[[],[["avx2",3],["mask",3]]]],[11,"le","","",16,[[],[["avx2",3],["mask",3]]]],[11,"gt","","",16,[[],[["avx2",3],["mask",3]]]],[11,"ge","","",16,[[],[["avx2",3],["mask",3]]]],[11,"_mm_add","","",16,[[]]],[11,"_mm_sub","","",16,[[]]],[11,"_mm_mul","","",16,[[]]],[11,"_mm_div","","",16,[[]]],[11,"_mm_rem","","",16,[[]]],[11,"zero","","",17,[[]]],[11,"one","","",17,[[]]],[11,"min_value","","",17,[[]]],[11,"max_value","","",17,[[]]],[11,"min","","",17,[[]]],[11,"max","","",17,[[]]],[11,"min_element","","",17,[[]]],[11,"max_element","","",17,[[]]],[11,"eq","","",17,[[],[["avx2",3],["mask",3]]]],[11,"ne","","",17,[[],[["avx2",3],["mask",3]]]],[11,"lt","","",17,[[],[["avx2",3],["mask",3]]]],[11,"le","","",17,[[],[["avx2",3],["mask",3]]]],[11,"gt","","",17,[[],[["avx2",3],["mask",3]]]],[11,"ge","","",17,[[],[["avx2",3],["mask",3]]]],[11,"_mm_add","","",17,[[]]],[11,"_mm_sub","","",17,[[]]],[11,"_mm_mul","","",17,[[]]],[11,"_mm_div","","",17,[[]]],[11,"_mm_rem","","",17,[[]]],[11,"zero","","",18,[[]]],[11,"one","","",18,[[]]],[11,"min_value","","",18,[[]]],[11,"max_value","","",18,[[]]],[11,"min_element","","",18,[[]]],[11,"max_element","","",18,[[]]],[11,"eq","","",18,[[],[["avx2",3],["mask",3]]]],[11,"gt","","",18,[[],[["avx2",3],["mask",3]]]],[11,"ge","","",18,[[],[["avx2",3],["mask",3]]]],[11,"_mm_add","","",18,[[]]],[11,"_mm_sub","","",18,[[]]],[11,"_mm_mul","","",18,[[]]],[11,"_mm_div","","",18,[[]]],[11,"_mm_rem","","",18,[[]]],[11,"zero","","",19,[[]]],[11,"one","","",19,[[]]],[11,"min_value","","",19,[[]]],[11,"max_value","","",19,[[]]],[11,"min_element","","",19,[[]]],[11,"max_element","","",19,[[]]],[11,"eq","","",19,[[],[["avx2",3],["mask",3]]]],[11,"gt","","",19,[[],[["avx2",3],["mask",3]]]],[11,"ge","","",19,[[],[["avx2",3],["mask",3]]]],[11,"_mm_add","","",19,[[]]],[11,"_mm_sub","","",19,[[]]],[11,"_mm_mul","","",19,[[]]],[11,"_mm_div","","",19,[[]]],[11,"_mm_rem","","",19,[[]]],[11,"zero","","",20,[[]]],[11,"one","","",20,[[]]],[11,"min_value","","",20,[[]]],[11,"max_value","","",20,[[]]],[11,"min_element","","",20,[[]]],[11,"max_element","","",20,[[]]],[11,"eq","","",20,[[],[["avx2",3],["mask",3]]]],[11,"gt","","",20,[[],[["avx2",3],["mask",3]]]],[11,"ge","","",20,[[],[["avx2",3],["mask",3]]]],[11,"_mm_add","","",20,[[]]],[11,"_mm_sub","","",20,[[]]],[11,"_mm_mul","","",20,[[]]],[11,"_mm_div","","",20,[[]]],[11,"_mm_rem","","",20,[[]]],[11,"into_bits","","",16,[[],[["u32x8",3],["avx2",3]]]],[11,"into_bits","","",17,[[],[["avx2",3],["u64x8",3]]]],[11,"from_bits","","",16,[[["u32x8",3],["avx2",3]]]],[11,"from_bits","","",17,[[["avx2",3],["u64x8",3]]]],[11,"neg_one","","",16,[[]]],[11,"min_positive","","",16,[[]]],[11,"signum","","",16,[[]]],[11,"copysign","","",16,[[]]],[11,"abs","","",16,[[]]],[11,"_mm_neg","","",16,[[]]],[11,"neg_one","","",17,[[]]],[11,"min_positive","","",17,[[]]],[11,"signum","","",17,[[]]],[11,"copysign","","",17,[[]]],[11,"abs","","",17,[[]]],[11,"_mm_neg","","",17,[[]]],[11,"neg_one","","",18,[[]]],[11,"min_positive","","",18,[[]]],[11,"abs","","",18,[[]]],[11,"_mm_neg","","",18,[[]]],[11,"epsilon","","",16,[[]]],[11,"infinity","","",16,[[]]],[11,"neg_infinity","","",16,[[]]],[11,"neg_zero","","",16,[[]]],[11,"nan","","",16,[[]]],[11,"load_half_unaligned_unchecked","","",16,[[]]],[11,"store_half_unaligned_unchecked","","",16,[[]]],[11,"sum","","",16,[[]]],[11,"product","","",16,[[]]],[11,"mul_add","","",16,[[]]],[11,"mul_sub","","",16,[[]]],[11,"neg_mul_add","","",16,[[]]],[11,"neg_mul_sub","","",16,[[]]],[11,"floor","","",16,[[]]],[11,"ceil","","",16,[[]]],[11,"round","","",16,[[]]],[11,"trunc","","",16,[[]]],[11,"sqrt","","",16,[[]]],[11,"rsqrt","","",16,[[]]],[11,"rsqrt_precise","","",16,[[]]],[11,"recepr","","",16,[[]]],[11,"epsilon","","",17,[[]]],[11,"infinity","","",17,[[]]],[11,"neg_infinity","","",17,[[]]],[11,"neg_zero","","",17,[[]]],[11,"nan","","",17,[[]]],[11,"load_half_unaligned_unchecked","","",17,[[]]],[11,"store_half_unaligned_unchecked","","",17,[[]]],[11,"sum","","",17,[[]]],[11,"product","","",17,[[]]],[11,"mul_add","","",17,[[]]],[11,"mul_sub","","",17,[[]]],[11,"neg_mul_add","","",17,[[]]],[11,"neg_mul_sub","","",17,[[]]],[11,"floor","","",17,[[]]],[11,"ceil","","",17,[[]]],[11,"round","","",17,[[]]],[11,"trunc","","",17,[[]]],[11,"sqrt","","",17,[[]]],[11,"drop","thermite","",0,[[]]],[11,"clone","thermite::backends::avx2","",15,[[],["avx2",3]]],[11,"clone","","",16,[[],["f32x8",3]]],[11,"clone","","",17,[[],["f64x8",3]]],[11,"clone","","",18,[[],["i32x8",3]]],[11,"clone","","",19,[[],["u32x8",3]]],[11,"clone","","",20,[[],["u64x8",3]]],[11,"clone","thermite","",1,[[],["vptr",3]]],[11,"clone","","",2,[[],["mask",3]]],[11,"default","thermite::backends::avx2","",16,[[]]],[11,"default","","",17,[[]]],[11,"default","","",18,[[]]],[11,"default","","",19,[[]]],[11,"default","","",20,[[]]],[11,"default","thermite","",2,[[]]],[11,"eq","thermite::backends::avx2","",15,[[["avx2",3]]]],[11,"eq","","",16,[[]]],[11,"ne","","",16,[[]]],[11,"eq","","",17,[[]]],[11,"ne","","",17,[[]]],[11,"eq","","",18,[[]]],[11,"ne","","",18,[[]]],[11,"eq","","",19,[[]]],[11,"ne","","",19,[[]]],[11,"eq","","",20,[[]]],[11,"ne","","",20,[[]]],[11,"eq","thermite","",1,[[["vptr",3]]]],[11,"ne","","",1,[[["vptr",3]]]],[11,"deref","","",0,[[]]],[11,"deref_mut","","",0,[[]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","thermite::backends::avx2","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",19,[[["formatter",3]],["result",6]]],[11,"fmt","","",20,[[["formatter",3]],["result",6]]],[11,"fmt","thermite","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"div","thermite::backends::avx2","",16,[[]]],[11,"div","","",17,[[]]],[11,"div","","",18,[[]]],[11,"div","","",19,[[]]],[11,"div","","",20,[[]]],[11,"rem","","",16,[[]]],[11,"rem","","",17,[[]]],[11,"rem","","",18,[[]]],[11,"rem","","",19,[[]]],[11,"rem","","",20,[[]]],[11,"sub","","",16,[[]]],[11,"sub","","",17,[[]]],[11,"sub","","",18,[[]]],[11,"sub","","",19,[[]]],[11,"sub","","",20,[[]]],[11,"add","","",16,[[]]],[11,"add","","",17,[[]]],[11,"add","","",18,[[]]],[11,"add","","",19,[[]]],[11,"add","","",20,[[]]],[11,"mul","","",16,[[]]],[11,"mul","","",17,[[]]],[11,"mul","","",18,[[]]],[11,"mul","","",19,[[]]],[11,"mul","","",20,[[]]],[11,"neg","","",16,[[]]],[11,"neg","","",17,[[]]],[11,"neg","","",18,[[]]],[11,"add_assign","","",16,[[]]],[11,"add_assign","","",17,[[]]],[11,"add_assign","","",18,[[]]],[11,"add_assign","","",19,[[]]],[11,"add_assign","","",20,[[]]],[11,"sub_assign","","",16,[[]]],[11,"sub_assign","","",17,[[]]],[11,"sub_assign","","",18,[[]]],[11,"sub_assign","","",19,[[]]],[11,"sub_assign","","",20,[[]]],[11,"mul_assign","","",16,[[]]],[11,"mul_assign","","",17,[[]]],[11,"mul_assign","","",18,[[]]],[11,"mul_assign","","",19,[[]]],[11,"mul_assign","","",20,[[]]],[11,"div_assign","","",16,[[]]],[11,"div_assign","","",17,[[]]],[11,"div_assign","","",18,[[]]],[11,"div_assign","","",19,[[]]],[11,"div_assign","","",20,[[]]],[11,"rem_assign","","",16,[[]]],[11,"rem_assign","","",17,[[]]],[11,"rem_assign","","",18,[[]]],[11,"rem_assign","","",19,[[]]],[11,"rem_assign","","",20,[[]]],[11,"not","","",16,[[]]],[11,"not","","",17,[[]]],[11,"not","","",18,[[]]],[11,"not","","",19,[[]]],[11,"not","","",20,[[]]],[11,"not","thermite","",2,[[]]],[11,"bitand","thermite::backends::avx2","",16,[[]]],[11,"bitand","","",17,[[]]],[11,"bitand","","",18,[[]]],[11,"bitand","","",19,[[]]],[11,"bitand","","",20,[[]]],[11,"bitand","thermite","",2,[[]]],[11,"bitor","thermite::backends::avx2","",16,[[]]],[11,"bitor","","",17,[[]]],[11,"bitor","","",18,[[]]],[11,"bitor","","",19,[[]]],[11,"bitor","","",20,[[]]],[11,"bitor","thermite","",2,[[]]],[11,"bitxor","thermite::backends::avx2","",16,[[]]],[11,"bitxor","","",17,[[]]],[11,"bitxor","","",18,[[]]],[11,"bitxor","","",19,[[]]],[11,"bitxor","","",20,[[]]],[11,"bitxor","thermite","",2,[[]]],[11,"shl","thermite::backends::avx2","",16,[[]]],[11,"shl","","",17,[[]]],[11,"shl","","",18,[[]]],[11,"shl","","",19,[[]]],[11,"shl","","",20,[[]]],[11,"shl","thermite","",2,[[]]],[11,"shr","thermite::backends::avx2","",16,[[]]],[11,"shr","","",17,[[]]],[11,"shr","","",18,[[]]],[11,"shr","","",19,[[]]],[11,"shr","","",20,[[]]],[11,"shr","thermite","",2,[[]]],[11,"bitand_assign","thermite::backends::avx2","",16,[[]]],[11,"bitand_assign","","",17,[[]]],[11,"bitand_assign","","",18,[[]]],[11,"bitand_assign","","",19,[[]]],[11,"bitand_assign","","",20,[[]]],[11,"bitand_assign","thermite","",2,[[]]],[11,"bitor_assign","thermite::backends::avx2","",16,[[]]],[11,"bitor_assign","","",17,[[]]],[11,"bitor_assign","","",18,[[]]],[11,"bitor_assign","","",19,[[]]],[11,"bitor_assign","","",20,[[]]],[11,"bitor_assign","thermite","",2,[[]]],[11,"bitxor_assign","thermite::backends::avx2","",16,[[]]],[11,"bitxor_assign","","",17,[[]]],[11,"bitxor_assign","","",18,[[]]],[11,"bitxor_assign","","",19,[[]]],[11,"bitxor_assign","","",20,[[]]],[11,"bitxor_assign","thermite","",2,[[]]],[11,"shl_assign","thermite::backends::avx2","",16,[[]]],[11,"shl_assign","","",17,[[]]],[11,"shl_assign","","",18,[[]]],[11,"shl_assign","","",19,[[]]],[11,"shl_assign","","",20,[[]]],[11,"shl_assign","thermite","",2,[[]]],[11,"shr_assign","thermite::backends::avx2","",16,[[]]],[11,"shr_assign","","",17,[[]]],[11,"shr_assign","","",18,[[]]],[11,"shr_assign","","",19,[[]]],[11,"shr_assign","","",20,[[]]],[11,"shr_assign","thermite","",2,[[]]],[11,"hash","thermite::backends::avx2","",15,[[]]]],"p":[[3,"SimdBuffer"],[3,"Vptr"],[3,"Mask"],[8,"SimdCastFrom"],[8,"SimdCastTo"],[8,"SimdCasts"],[8,"SimdVectorBase"],[8,"SimdBitwise"],[8,"SimdVector"],[8,"SimdIntoBits"],[8,"SimdFromBits"],[8,"SimdIntVector"],[8,"SimdSignedVector"],[8,"SimdFloatVector"],[8,"Simd"],[3,"AVX2"],[3,"f32x8"],[3,"f64x8"],[3,"i32x8"],[3,"u32x8"],[3,"u64x8"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);