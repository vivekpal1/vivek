import styled from '@emotion/styled';
import tw from 'twin.macro';
import { create as createConfetti } from 'canvas-confetti';
import { useEffect, useRef } from 'react';

import { EventType } from '~/types';

interface EventProps {
	event: EventType;
}

const EventCanvas = styled.canvas(tw`fixed inset-0 z-20`);

export function Event({ event }: EventProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const confetti = createConfetti(canvasRef.current, {
		resize: true,
	});

	useEffect(() => {
		switch (event) {
			
			}, [confetti, event]);

	return <EventCanvas ref={canvasRef} />;
}
