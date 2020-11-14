#![allow(unused)]

use criterion::{black_box, criterion_group, criterion_main, Criterion, ParameterizedBenchmark};

use thermite::*;

type Vf32 = <thermite::backends::AVX2 as Simd>::Vf32;
type Vf64 = <thermite::backends::AVX2 as Simd>::Vf64;
type Vi32 = <thermite::backends::AVX2 as Simd>::Vi32;
type Vu64 = <thermite::backends::AVX2 as Simd>::Vu64;
type Vu32 = <thermite::backends::AVX2 as Simd>::Vu32;
type Vi64 = <thermite::backends::AVX2 as Simd>::Vi64;

fn criterion_benchmark(c: &mut Criterion) {
    c.bench(
        "large_poly_eval",
        ParameterizedBenchmark::new(
            "thermite",
            |b, (x, poly)| {
                let x = Vf32::splat(*x);

                b.iter(|| x.poly(poly));
            },
            vec![(
                0.5,
                (0..10000)
                    .into_iter()
                    .map(|x| (x as f32).sqrt().sin())
                    .collect::<Vec<f32>>(),
            )],
        )
        .with_function("horners", |b, (x, poly)| {
            let x = Vf32::splat(*x);

            b.iter(move || {
                let mut res = Vf32::one();
                for coeff in poly.iter().rev() {
                    res = res.mul_add(x, Vf32::splat(*coeff));
                }
                res
            })
        }),
    );
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
