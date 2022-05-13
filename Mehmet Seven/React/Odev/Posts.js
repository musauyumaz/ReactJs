import axios from "axios";

async function getData ()
{
    //const {data :user} = await axios("https://jsonplaceholder.typicode.com/users/"+userId);
    const {data :post} = await axios("https://jsonplaceholder.typicode.com/posts/"+userId);
    const {data : user1} = await axios("api.zteknoloji.net/api/users")
}
export default getData;