(function() {var implementors = {};
implementors["thermite"] = [{"text":"impl&lt;S, T&gt; Send for VPtr&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as Simd&gt;::Vusize: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, V&gt; Send for BitMask&lt;S, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, V&gt; Send for Mask&lt;S, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for SimdInstructionSet","synthetic":true,"types":[]},{"text":"impl Send for AVX1","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for f32x8&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for f64x8&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for i32x8&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for i64x8&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for u32x8&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for u64x8&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for i32x8&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for i64x8&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for u32x8&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for u64x8&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl Send for AVX2","synthetic":true,"types":[]},{"text":"impl&lt;S, V&gt; Send for Complex&lt;S, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for PCG32&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as Simd&gt;::Vu64: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S:&nbsp;Simd, V:&nbsp;SimdVectorBase&lt;S&gt;&gt; Send for SimdBuffer&lt;S, V&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()