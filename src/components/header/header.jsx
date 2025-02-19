import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { ControlPanel, Logo } from './components/logo/index';

const Discription = styled.div`
	font-style: italic;
`;

const HeaderContainer = forwardRef(({ className }, ref) => (
	<header ref={ref} className={className}>
		<Logo />
		<Discription>
			Web-technologes
			<br />
			Code writing
			<br />
			Fixing errors
		</Discription>
		<ControlPanel />
	</header>
));
HeaderContainer.displayName = 'Header';

HeaderContainer.propTypes = {
	className: PropTypes.string,
};

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 25px 0 40px 40px;
	box-shadow: 0px -2px 10px #000;
	background-color: #fff;
`;
