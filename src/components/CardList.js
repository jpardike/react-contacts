import React from "react";
import Card from "./Card";

const CardList = (props) => {
  const contactsArr = props.contactsList.map((contactObj) => (
    <Card key={contactObj.id} contact={contactObj} />
  ));

  return <>{contactsArr}</>;
};

export default CardList;
