import { createContext, useEffect,useCallback,useState} from "react";
// import axios from "axios";
export const Usercontext=createContext();

const Usercontextprovider=({children})=>{

         const [currChat,setCurrChat]=useState();

         const [responsive,setResponsive]=useState(false);
         

      // useEffect(()=>{
      //       const fetchData=async ()=>{

      //             const response=await axios.get("https://devapi.beyondchats.com/api/get_all_chats?page=1");
      //             console.log(response);
      //             setUser(response.data.data.data);
      
      
      //       }

      //       fetchData();

      // },[]);

   const users=  [
            {
              "name": "Alice",
              "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
              "chat": [
                {"message": "Hey there!", "time": "10:00 AM", "date": "2023-07-01", "reply": "How's it going?", "replytime": "10:05 AM", "replydate": "2023-07-01"},
                {"message": "Just finished my morning run.", "time": "10:10 AM", "date": "2023-07-01", "reply": "That's great! I need to start running too.", "replytime": "10:12 AM", "replydate": "2023-07-01"},
                {"message": "Yeah, it's a great way to start the day.", "time": "10:15 AM", "date": "2023-07-01", "reply": "Any plans for the weekend?", "replytime": "10:20 AM", "replydate": "2023-07-01"},
                {"message": "Not sure yet. Maybe just relax and read.", "time": "10:22 AM", "date": "2023-07-01", "reply": "Sounds good. I'm planning to go hiking.", "replytime": "10:25 AM", "replydate": "2023-07-01"},
                {"message": "Nice! Which trail are you thinking of?", "time": "10:30 AM", "date": "2023-07-01", "reply": "Probably the one at Sunset Park.", "replytime": "10:35 AM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "Bob",
              "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
              "chat": [
                {"message": "Good morning!", "time": "9:00 AM", "date": "2023-07-01", "reply": "Morning! How did you sleep?", "replytime": "9:02 AM", "replydate": "2023-07-01"},
                {"message": "Pretty well, thanks. You?", "time": "9:05 AM", "date": "2023-07-01", "reply": "I slept like a log. Feeling refreshed.", "replytime": "9:10 AM", "replydate": "2023-07-01"},
                {"message": "That's great to hear.", "time": "9:15 AM", "date": "2023-07-01", "reply": "Any big plans today?", "replytime": "9:20 AM", "replydate": "2023-07-01"},
                {"message": "Just work. Got a few meetings lined up.", "time": "9:25 AM", "date": "2023-07-01", "reply": "Same here. Meetings all day.", "replytime": "9:30 AM", "replydate": "2023-07-01"},
                {"message": "Let's grab lunch if we get a break.", "time": "9:35 AM", "date": "2023-07-01", "reply": "Sounds good! See you later.", "replytime": "9:40 AM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "Charlie",
              "img": "https://randomuser.me/api/portraits/men/4.jpg",
              "chat": [
                {"message": "Hello!", "time": "8:00 AM", "date": "2023-07-01", "reply": "Hi, Charlie!", "replytime": "8:05 AM", "replydate": "2023-07-01"},
                {"message": "How's the project going?", "time": "8:10 AM", "date": "2023-07-01", "reply": "It's progressing well. How about yours?", "replytime": "8:15 AM", "replydate": "2023-07-01"},
                {"message": "A bit slow, but getting there.", "time": "8:20 AM", "date": "2023-07-01", "reply": "Let's catch up over coffee later.", "replytime": "8:25 AM", "replydate": "2023-07-01"},
                {"message": "Sure, sounds good.", "time": "8:30 AM", "date": "2023-07-01", "reply": "Great! See you then.", "replytime": "8:35 AM", "replydate": "2023-07-01"},
                {"message": "Looking forward to it.", "time": "8:40 AM", "date": "2023-07-01", "reply": "Me too. Bye!", "replytime": "8:45 AM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "David",
              "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              "chat": [
                {"message": "Hey!", "time": "11:00 AM", "date": "2023-07-01", "reply": "Hey David!", "replytime": "11:02 AM", "replydate": "2023-07-01"},
                {"message": "Are you free this afternoon?", "time": "11:05 AM", "date": "2023-07-01", "reply": "Yes, I am. What's up?", "replytime": "11:10 AM", "replydate": "2023-07-01"},
                {"message": "Want to grab a coffee?", "time": "11:15 AM", "date": "2023-07-01", "reply": "Sure, let's meet at the usual place.", "replytime": "11:20 AM", "replydate": "2023-07-01"},
                {"message": "Great! See you there.", "time": "11:25 AM", "date": "2023-07-01", "reply": "See you!", "replytime": "11:30 AM", "replydate": "2023-07-01"},
                {"message": "Take care!", "time": "11:35 AM", "date": "2023-07-01", "reply": "You too!", "replytime": "11:40 AM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "Eve",
              "img": "https://randomuser.me/api/portraits/men/10.jpg",
              "chat": [
                {"message": "Hello!", "time": "7:00 AM", "date": "2023-07-01", "reply": "Hi Eve!", "replytime": "7:05 AM", "replydate": "2023-07-01"},
                {"message": "How are you?", "time": "7:10 AM", "date": "2023-07-01", "reply": "I'm good, thanks. You?", "replytime": "7:15 AM", "replydate": "2023-07-01"},
                {"message": "Doing well.", "time": "7:20 AM", "date": "2023-07-01", "reply": "What's your plan for today?", "replytime": "7:25 AM", "replydate": "2023-07-01"},
                {"message": "Just work. How about you?", "time": "7:30 AM", "date": "2023-07-01", "reply": "Same here.", "replytime": "7:35 AM", "replydate": "2023-07-01"},
                {"message": "Good luck!", "time": "7:40 AM", "date": "2023-07-01", "reply": "Thanks! You too.", "replytime": "7:45 AM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "Frank",
              "img": "https://picsum.photos/400/400/?random=2",
              "chat": [
                {"message": "Hey Frank!", "time": "6:00 PM", "date": "2023-07-01", "reply": "Hey! How's it going?", "replytime": "6:05 PM", "replydate": "2023-07-01"},
                {"message": "Not bad. You?", "time": "6:10 PM", "date": "2023-07-01", "reply": "Pretty good.", "replytime": "6:15 PM", "replydate": "2023-07-01"},
                {"message": "Want to catch up?", "time": "6:20 PM", "date": "2023-07-01", "reply": "Sure, let's do that.", "replytime": "6:25 PM", "replydate": "2023-07-01"},
                {"message": "How about tomorrow?", "time": "6:30 PM", "date": "2023-07-01", "reply": "Works for me.", "replytime": "6:35 PM", "replydate": "2023-07-01"},
                {"message": "Great! See you then.", "time": "6:40 PM", "date": "2023-07-01", "reply": "See you!", "replytime": "6:45 PM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "Grace",
              "img": "https://picsum.photos/400/400/?random=1",
              "chat": [
                {"message": "Hi Grace!", "time": "5:00 PM", "date": "2023-07-01", "reply": "Hi! How are you?", "replytime": "5:05 PM", "replydate": "2023-07-01"},
                {"message": "I'm good, how about you?", "time": "5:10 PM", "date": "2023-07-01", "reply": "Doing well, thanks.", "replytime": "5:15 PM", "replydate": "2023-07-01"},
                {"message": "Any plans for the weekend?", "time": "5:20 PM", "date": "2023-07-01", "reply": "Not yet. You?", "replytime": "5:25 PM", "replydate": "2023-07-01"},
                {"message": "Maybe go hiking.", "time": "5:30 PM", "date": "2023-07-01", "reply": "Sounds fun!", "replytime": "5:35 PM", "replydate": "2023-07-01"},
                {"message": "Yeah, it should be great.", "time": "5:40 PM", "date": "2023-07-01", "reply": "Enjoy!", "replytime": "5:45 PM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "Hannah",
              "img": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
              "chat": [
                {"message": "Hey Hannah!", "time": "4:00 PM", "date": "2023-07-01", "reply": "Hey! What's up?", "replytime": "4:05 PM", "replydate": "2023-07-01"},
                {"message": "Not much. You?", "time": "4:10 PM", "date": "2023-07-01", "reply": "Same here.", "replytime": "4:15 PM", "replydate": "2023-07-01"},
                {"message": "Want to grab coffee later?", "time": "4:20 PM", "date": "2023-07-01", "reply": "Sure, sounds good.", "replytime": "4:25 PM", "replydate": "2023-07-01"},
                {"message": "How about 5 PM?", "time": "4:30 PM", "date": "2023-07-01", "reply": "Perfect.", "replytime": "4:35 PM", "replydate": "2023-07-01"},
                {"message": "See you then!", "time": "4:40 PM", "date": "2023-07-01", "reply": "See you!", "replytime": "4:45 PM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "Isaac",
              "img": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
              "chat": [
                {"message": "Hi Isaac!", "time": "3:00 PM", "date": "2023-07-01", "reply": "Hi! How are you?", "replytime": "3:05 PM", "replydate": "2023-07-01"},
                {"message": "I'm good, thanks. You?", "time": "3:10 PM", "date": "2023-07-01", "reply": "Doing well.", "replytime": "3:15 PM", "replydate": "2023-07-01"},
                {"message": "What's new?", "time": "3:20 PM", "date": "2023-07-01", "reply": "Not much. You?", "replytime": "3:25 PM", "replydate": "2023-07-01"},
                {"message": "Same here.", "time": "3:30 PM", "date": "2023-07-01", "reply": "Want to catch up later?", "replytime": "3:35 PM", "replydate": "2023-07-01"},
                {"message": "Sure, sounds good.", "time": "3:40 PM", "date": "2023-07-01", "reply": "Great! See you.", "replytime": "3:45 PM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "Jack",
              "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
              "chat": [
                {"message": "Hey Jack!", "time": "2:00 PM", "date": "2023-07-01", "reply": "Hey! How's it going?", "replytime": "2:05 PM", "replydate": "2023-07-01"},
                {"message": "Pretty good. You?", "time": "2:10 PM", "date": "2023-07-01", "reply": "Not bad.", "replytime": "2:15 PM", "replydate": "2023-07-01"},
                {"message": "Want to grab lunch?", "time": "2:20 PM", "date": "2023-07-01", "reply": "Sure.", "replytime": "2:25 PM", "replydate": "2023-07-01"},
                {"message": "How about 12 PM?", "time": "2:30 PM", "date": "2023-07-01", "reply": "Works for me.", "replytime": "2:35 PM", "replydate": "2023-07-01"},
                {"message": "See you then.", "time": "2:40 PM", "date": "2023-07-01", "reply": "See you!", "replytime": "2:45 PM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "Kathy",
              "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              "chat": [
                {"message": "Hi Kathy!", "time": "1:00 PM", "date": "2023-07-01", "reply": "Hi! How's it going?", "replytime": "1:05 PM", "replydate": "2023-07-01"},
                {"message": "Good, thanks. You?", "time": "1:10 PM", "date": "2023-07-01", "reply": "Doing well.", "replytime": "1:15 PM", "replydate": "2023-07-01"},
                {"message": "What's new?", "time": "1:20 PM", "date": "2023-07-01", "reply": "Not much. You?", "replytime": "1:25 PM", "replydate": "2023-07-01"},
                {"message": "Same here.", "time": "1:30 PM", "date": "2023-07-01", "reply": "Want to catch up later?", "replytime": "1:35 PM", "replydate": "2023-07-01"},
                {"message": "Sure, sounds good.", "time": "1:40 PM", "date": "2023-07-01", "reply": "Great! See you.", "replytime": "1:45 PM", "replydate": "2023-07-01"}
              ]
            },
            {
              "name": "Liam",
              "img": "https://picsum.photos/400/400/?random=4",
              "chat": [
                {"message": "Hey Liam!", "time": "12:00 PM", "date": "2023-07-01", "reply": "Hey! How's it going?", "replytime": "12:05 PM", "replydate": "2023-07-01"},
                {"message": "Pretty good. You?", "time": "12:10 PM", "date": "2023-07-01", "reply": "Not bad.", "replytime": "12:15 PM", "replydate": "2023-07-01"},
                {"message": "Want to grab lunch?", "time": "12:20 PM", "date": "2023-07-01", "reply": "Sure.", "replytime": "12:25 PM", "replydate": "2023-07-01"},]
              }
            ]

  const value={
            users,
            currChat,
            setCurrChat,
            responsive,
            setResponsive
      }
          
      return <Usercontext.Provider value={value}> {children}</Usercontext.Provider>

}


export default Usercontextprovider;