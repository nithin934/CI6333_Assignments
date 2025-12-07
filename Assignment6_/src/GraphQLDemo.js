import React,{useState,useEffect} from 'react';
import {ApolloClient,InMemoryCache,HttpLink,gql} from '@apollo/client';
import {ApolloProvider,useQuery,useMutation} from '@apollo/client/react';

const client=new ApolloClient({
  link:new HttpLink({uri:'https://graphqlzero.almansi.me/api'}),
  cache:new InMemoryCache()
});

const GET_USERS=gql`query{users(options:{paginate:{page:1,limit:5}}){data{id name email}}}`;
const UPDATE_USER=gql`mutation($id:ID!,$name:String!){updateUser(id:$id,input:{name:$name}){id name email}}`;
const DELETE_USER=gql`mutation($id:ID!){deleteUser(id:$id)}`;

function Users(){
  const{loading,error,data}=useQuery(GET_USERS);
  const[users,setUsers]=useState([]);
  const[updateUser]=useMutation(UPDATE_USER);
  const[deleteUser]=useMutation(DELETE_USER);

  useEffect(()=>{if(data?.users?.data) setUsers(data.users.data);},[data]);

  if(loading)return<p>Loading...</p>;
  if(error)return<p>Error</p>;

  return(<div>
    <ul>
      {users.map(u=>
        <li key={u.id}>
          {u.name} - {u.email}
          <button onClick={()=>{const n=prompt("Name"); if(!n)return;
            updateUser({variables:{id:u.id,name:n}}).then(()=>setUsers(prev=>prev.map(p=>p.id===u.id?{...p,name:n}:p)));
          }}>Update</button>
          <button onClick={()=>{
            deleteUser({variables:{id:u.id}}).then(()=>setUsers(prev=>prev.filter(p=>p.id!==u.id)));
          }}>Delete</button>
        </li>
      )}
    </ul>
  </div>);
}

export default function GraphQLDemo(){return(<ApolloProvider client={client}><Users/></ApolloProvider>);}
