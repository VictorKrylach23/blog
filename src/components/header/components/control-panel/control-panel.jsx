import styled from 'styled-components';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBackward,
	faFileLines,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';

const ButtonSignIn = styled.button`
	width: 100px;
	height: 35px;
`;

const ButtonIcon = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin-left: 19px;
	font-size: 20px;
	margin-top: 10px;
`;

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-right: 40px;
`;

const ControlPanelContainer = forwardRef(({ className }, ref) => (
	<div ref={ref} className={className}>
		<RightAligned>
			<ButtonSignIn>Sign in</ButtonSignIn>
		</RightAligned>
		<RightAligned>
			<ButtonIcon>
				<FontAwesomeIcon icon={faBackward} />
			</ButtonIcon>
			<ButtonIcon>
				<FontAwesomeIcon icon={faFileLines} />
			</ButtonIcon>
			<ButtonIcon>
				<FontAwesomeIcon icon={faUsers} />
			</ButtonIcon>
		</RightAligned>
	</div>
));

ControlPanelContainer.displayName = 'ControlPanel';

ControlPanelContainer.propTypes = {
	className: PropTypes.string,
};

export const ControlPanel = styled(ControlPanelContainer)``;
