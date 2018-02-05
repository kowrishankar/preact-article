import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: ${props => props.imgWidth}px;
	max-height: ${props => props.imgHeight}px;
	padding: 10px 0 0 0;
`;


export default Image;
