import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Deep Karmakar",
      url:
        "https://scontent.fgau2-1.fna.fbcdn.net/v/t1.0-9/90522055_2616860391915995_1001318869979103232_o.jpg?_nc_cat=100&ccb=2&_nc_sid=84a396&_nc_ohc=M5lUXus4DyUAX9eW_4u&_nc_ht=scontent.fgau2-1.fna&oh=92b0baa1d9c6b5ad71064f66507af7e5&oe=5FE30FAB",
    },
    {
      name: "Arnav Saha",
      url:
        "https://scontent.fgau2-1.fna.fbcdn.net/v/t1.0-9/124948700_2784853185061705_7123757079072530201_o.jpg?_nc_cat=101&ccb=2&_nc_sid=19026a&_nc_ohc=kgir4vy33fYAX-8G4_S&_nc_ht=scontent.fgau2-1.fna&oh=d6f7bc174603544e9160f5e7695bfbf4&oe=5FE0A391",
    },
    {
      name: "Priyanka Roy",
      url:
        "https://scontent.fgau2-1.fna.fbcdn.net/v/t1.0-9/122472486_373057900413366_9130039102029746380_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=aVx09I1Dw2IAX9jtLQU&_nc_ht=scontent.fgau2-1.fna&oh=2abdef06565b6536e7d2efbc4c7b1193&oe=5FE2C47F",
    },
    {
      name: "Prishita Sarkar",
      url:
        "https://scontent.fgau2-1.fna.fbcdn.net/v/t1.0-9/123105987_776709713179728_3391367744759685652_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=EEviD8tc4jwAX9VI1Et&_nc_ht=scontent.fgau2-1.fna&oh=2a76e142b49b7430833aa8c3f25e3f68&oe=5FE18767",
    },
    {
      name: "Rahul Choudhary",
      url:
        "https://scontent.fgau2-1.fna.fbcdn.net/v/t31.0-8/18121106_1022129874584992_4115030888537137321_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=QnhSE-5zRQUAX9Q1Tob&_nc_ht=scontent.fgau2-1.fna&oh=f06128a1e2992caebde03dffa192d010&oe=5FE1BE1E",
    },
    {
      name: "Rakulpreet Kaur",
      url: "https://static.toiimg.com/photo/msid-76817714/76817714.jpg?452473",
    },
    {
      name: "Depika Padukon",
      url:
        "https://starsunfolded.com/wp-content/uploads/2014/04/Deepika-Padukone-2.jpg",
    },
    {
      name: "Alia Bhatt",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/Alia_Bhatt_promoting_Kalank.jpg",
    },
    {
      name: "Rajesh Roy",
      url:
        "https://scontent.fgau2-1.fna.fbcdn.net/v/t1.0-9/124051732_2819616874950640_978981491773491903_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=xWTaTLdzDsEAX-VGOcF&_nc_ht=scontent.fgau2-1.fna&oh=a5f4f6c25d82766eafc997b5dc542cad&oe=5FE1ECB8",
    },
    {
      name: "Arush Dn",
      url:
        "https://scontent.fgau2-1.fna.fbcdn.net/v/t1.0-9/122439694_2757635477888407_637084933069920341_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=qYM57O4wzhIAX9eTJxP&_nc_ht=scontent.fgau2-1.fna&oh=a39e857a012f7368280f08a398f44e22&oe=5FE0E2D1",
    },
    {
      name: "Bakar Pula",
      url:
        "https://scontent.fgau2-1.fna.fbcdn.net/v/t31.0-8/25487244_2045325499071783_3303128550446518348_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=KK1E9KZs6q8AX9fBxSc&_nc_ht=scontent.fgau2-1.fna&oh=122f4eeae6d223f29e425cd6a2340610&oe=5FE2FC6F",
    },
    {
      name: "Durjoy Hoor",
      url:
        "https://scontent.fgau2-1.fna.fbcdn.net/v/t31.0-8/16992161_1868811966727227_7753776292843665228_o.jpg?_nc_cat=110&ccb=2&_nc_sid=19026a&_nc_ohc=VynRLHB94jYAX_NAMiA&_nc_ht=scontent.fgau2-1.fna&oh=c314403b67b5260c7b0fab459330a789&oe=5FE2FF16",
    },
  ]);

  const swiped = (direction, nameToDelet) => {
    console.log("removing" + nameToDelet);
  };

  const outOfFrame = (name) => {
    console.log(name + "leftTheScreen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["Up", "Down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
