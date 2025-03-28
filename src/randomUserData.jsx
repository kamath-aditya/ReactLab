import { useEffect,useState } from "react";

function RandomUserData () {
    const [userData,setUserData] = useState(null);

    useEffect(()=>{
        fetch("https://random-data-api.com/api/users/random_user")
            .then((response) => response.json())
            .then((data) => setUserData(data));
    },[]);

    return(
        <div>
            {userData? (
                <div>
                    <h1>User Information</h1>
                    <p>
                        Name: {userData.first_name} {} {userData.last_name}
                    </p>
                    <p>
                        Email: {userData.email}
                    </p>
                </div>
            ):(
                <div>Loading...</div>
            )}
        </div>
    );
}

export default RandomUserData;