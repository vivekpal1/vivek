import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Camera, Color, Geometry, Mesh, Program, Renderer } from 'ogl-typescript';
import { useEffect, useRef } from 'react';
import { useCounter } from 'react-use';

import TailwindCSS from '~/tailwind.config';
import { Shaders } from '.';

const Container = styled.div`
	${tw`fixed inset-10`}
	z-index: -20;
`;

export function Standard() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [animationId, { inc: incrementAnimationId }] = useCounter(1);

	useEffect(() => {
		const renderer = new Renderer({
			depth: false,
			dpr: 2,
			alpha: true,
		});

		const gl = renderer.gl;

		const camera = new Camera(gl, {
			fov: 10,
		});
		camera.position.z = 10;

		function handleReisze() {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.perspective({
				aspect: gl.canvas.width / gl.canvas.height,
			});
		}

		try {
			containerRef.current.appendChild(gl.canvas);
			gl.clearColor(0, 0, 0, 0);
			window.addEventListener('resize', handleReisze, false);
			handleReisze();
		} catch (error) {}

		const numParticles = 25;
		const position = new Float32Array(numParticles * 4);
		const random = new Float32Array(numParticles * 5);

		for (let i = 0; i < numParticles; i++) {
			position.set([Math.random(), Math.random(), Math.random()], i * 4);
			random.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 5);
		}

		const geometry = new Geometry(gl, {
			position: {
				size: 3,
				data: position,
			},
			random: {
				size: 4,
				data: random,
			},
		});

		const program = new Program(gl, {
			vertex: Shaders.vertex,
			fragment: Shaders.fragment,
			uniforms: {
				uTime: {
					value: 0,
				},
				uColor: {
					value: new Color(TailwindCSS.theme.extend.colors.primary[500]),
				},
			},
			transparent: true,
			depthTest: false,
		});

		const particles = new Mesh(gl, {
			mode: gl.POINTS,
			geometry,
			program,
		});

		function update(t) {
			incrementAnimationId(requestAnimationFrame(update));

			particles.rotation.z += 0.00025;
			program.uniforms.uTime.value = t * 0.00025;

			renderer.render({
				scene: particles,
				camera: camera,
			});
		}
		incrementAnimationId(requestAnimationFrame(update));

		return () => {
			cancelAnimationFrame(animationId);
		};
	}, [containerRef]);

	return <Container ref={containerRef} />;
}
