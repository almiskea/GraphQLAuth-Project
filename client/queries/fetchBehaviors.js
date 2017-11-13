import gql from 'graphql-tag';

export default gql `
{
	behaviors {
    id
    name
    definition
    frequency
  }
}
`;
