import gql from 'graphql-tag';

export default gql`
mutation deleteBehavior($id: ID){
  deleteBehavior(id : $id){
    name
  }
}
`;
