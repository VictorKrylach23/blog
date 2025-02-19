import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Icon = styled.i`
	font-size: 42px;
	margin-right: 20px;
	margin-top: 12px;
`;

const BoldLogo = styled.div`
	font-size: 32px;
	font-weight: bold;
`;

const RegularLogo = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const LogoConatainer = forwardRef(({ className }, ref) => (
	<div ref={ref} className={className}>
		<Icon>
			<FontAwesomeIcon icon={faCode} />
		</Icon>
		<div>
			<BoldLogo>BLOG</BoldLogo>
			<RegularLogo>Web developer</RegularLogo>
		</div>
	</div>
));

LogoConatainer.displayName = 'Logo';

LogoConatainer.propTypes = {
	className: PropTypes.string,
};

export const Logo = styled(LogoConatainer)`
	display: flex;
`;
