import gql from 'graphql-tag';

export default gql`
mutation EditBehavior($name: String, $definition: String, $frequency: String, $id: ID ){
  editBehavior(name : $name, definition: $definition, frequency: $frequency, id: $id){
    id
  }
}
`
