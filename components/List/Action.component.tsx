import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/react';

const ButtonStyles = css`
	${tw`
		relative inline-flex justify-center w-full sm:w-10 h-10 \
		px-3 py-2 \
		bg-gray-400 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-700 \
		text-gray-700 hover:text-gray-800 dark:hover:text-white \
		border border-gray-100 dark:border-gray-500 \
		rounded-lg \
		text-sm font-medium \
		transition ease-in-out duration-75
		focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-500
	`}

	svg {
		${tw`
			mt-1
		`}
	}
`;

export const Button = styled.button(ButtonStyles);

export const Link = styled.a(ButtonStyles);
