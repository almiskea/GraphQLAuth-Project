import gql from 'graphql-tag';

export default gql`
mutation AddBehavior($name: String, $definition: String, $frequency: String ){
  addBehavior(name : $name, definition: $definition, frequency: $frequency){
    id
  }
}
`
