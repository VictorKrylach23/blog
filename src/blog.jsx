import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
	height: 2000px;
`;

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Footer = () => <div>Footer</div>;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<H2>Page Content</H2>
				<Routes>
					<Route path="/" element={<div>Main page</div>} />
					<Route path="/login" element={<div>Sign in</div>} />
					<Route path="/register" element={<div>Sign up</div>} />
					<Route path="/users" element={<div>Users</div>} />
					<Route path="/post" element={<div>New post</div>} />
					<Route path="/post/:postId" element={<div>Post</div>} />
					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
