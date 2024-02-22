import styled from "styled-components";

export const ContainerServices = styled.section`
	min-height: 100vh;
	width: 100%;
`;

export const ContentBannerServices = styled.div`
	background: url("banner-services2.jpg") no-repeat center;
	background-size: cover !important;
	width: 100%;
	min-height: 50vh;
`;

export const ContentServices = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 4rem 1rem;

	h1 {
		text-align: center;
	}
`;

export const ContentTable = styled.div`
	display: flex;
	flex-direction: column;
	//gap: 2rem;

	padding: 3.5rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const NavigationTable = styled.nav`
	width: 100%;
	background-color: var(--primary-color);
	padding: 2rem 2.5rem;
	ul > li:first-child {
		border-bottom: solid 3px var(--third-color);
	}

	ul {
		display: flex;
		align-items: center;
		justify-content: start;
		gap: 2rem;
		overflow-x: scroll;
		padding: 0.7rem 0.5rem 0.3rem;
		width: 100%;
		@media (max-width: 600px) {
			justify-content: start;
			gap: 1rem;
		}
	}
	ul::-webkit-scrollbar {
		display: none;
	}
	li {
		//list-style-type: none;
		padding-bottom: 0.5rem;
	}
	a {
		color: var(--third-color);
		text-decoration: none;
		font-family: "Ubuntu", sans-serif;
		font-weight: 500;
		font-size: 1.3rem;
		padding: 0 0.6rem 0.3rem;
	}
`;
export const ServicesOptions = styled.div`
	width: 100%;
	//min-height: 60vh;
`;

export const ContentScheduling = styled.div`
	max-width: 1400px;
	margin: 0 auto;
`;

export const ContainerScheduling = styled.div`
	min-height: 700px;
	width: 100%;
	background-color: var(--primary-color);
	display: flex;
	flex-direction: column;
	align-items: start;
  
	gap: 1rem;
	padding: 1rem 2rem;
  button {
    background-color: var(--third-color);
    color: var(--primary-color);
  }
`;
export const ContentDescriptionScheduling = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	border-bottom: 1px solid rgba(235, 235, 235, 0.5);
	padding: 1rem;
	width: 100%;

	h3 {
		font-size: 2.2rem;
	}
	span {
		font-family: "Poppins", sans-serif;
		font-weight: 700;
		color: var(--third-color);
		font-size: 1.5rem;
		line-height: 130%;
	}
`;
export const ContentSelectBarber = styled.div`
	width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.5rem;

	fieldset {
		padding: 0.5rem 1rem 1rem;
	}
	legend {
		font-family: "Poppins", sans-serif;
		font-weight: 700;
		color: var(--third-color);
		font-size: 1.5rem;
		line-height: 130%;
		padding: 0 1rem;
	}
	select {
		padding: 0.5rem;
		font-size: 1.2rem;
		background-color: var(--second-color);
		color: var(--third-color);
		border: 1px solid var(--third-color);
		border-radius: 5px;
	}
`;
