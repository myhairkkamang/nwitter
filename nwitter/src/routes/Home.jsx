import { dbService } from "fbase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
	HomeDiv,
    HomeFormSubmit,
	HomeInputText,
  	HomeButtonSubmit,
    HomeInputPhoto
} from 'styles/homeStyle'

const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const usersCollectionRef = collection(dbService, "nweets");

    const getNweets = async () => {
        const dbNweets = await getDocs(usersCollectionRef);
        dbNweets.forEach((document) => setNweets((prev) => [document.data(), ...prev]));
    };

    useEffect(() => {
        getNweets();
    }, []);

    console.log(nweets);

    const onSubmit = async (event) => {
        event.preventDefault();
        await addDoc(usersCollectionRef, {
            text: nweet,
            createdAt: Date.now(),
        });
        setNweet("");
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setNweet(value);
    };

    return (
        <HomeDiv>
            <HomeFormSubmit onSubmit={onSubmit}>
                <HomeInputText 
                    value={nweet} 
                    onChange={onChange} 
                    type="text" 
                    placeholder="What's on ypur mind" 
                    maxLength={120} 
                />
                <HomeButtonSubmit  type="submit" value="Nweet" />
            </HomeFormSubmit>
            <HomeInputPhoto />
        </HomeDiv>
    )
}

export default Home;