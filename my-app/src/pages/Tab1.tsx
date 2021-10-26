import {
  IonSelect,
  IonRouterOutlet,
  IonDatetime,
  IonSelectOption,
  IonContent,
  IonHeader,
  IonButton,
  IonItem,
  IonLabel,
  IonText,
  IonCheckbox,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import "./Tab1.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Tab3 from './Tab3';

const Tab1: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const [name, setName] = useState()

  const formFields = () => [
    {
      name: "email",
      component: <IonInput type="email" />,
      label: "Email",
    },
    {
      name: "fullName",
      label: "Full Name",
    },
    {
      name: "password",
      component: <IonInput type="password" clearOnEdit={false} />,
      label: "Password",
    },
  ];

  const registerUser = () => {
    console.log("creating a new user account with: ");
  };

  const mensaje = () =>{
    alert("Registrado")
  }

  const [selectedDate, setSelectedDate] = useState<string>(
    "2012-12-15T13:47:20.789"
  );


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="ion-padding">
          <IonText color="muted">
            <h2>Create Account</h2>
          </IonText>
          <form onSubmit={handleSubmit(registerUser)}>
            <IonItem>
              <IonLabel>I agree to the terms of service--</IonLabel>
              <IonCheckbox slot="start"   />
            </IonItem>
            <IonItem>
              <IonLabel>Gender</IonLabel>
              <IonSelect placeholder="Select One" name="gender">
                <IonSelectOption value="FEMALE">Female</IonSelectOption>
                <IonSelectOption value="MALE">Male</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Name</IonLabel>
              <IonInput name="name"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Password</IonLabel>
              <IonInput type="password" clearOnEdit={false}></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Fecha de naciemiento</IonLabel>
              <IonDatetime
                displayFormat="MM/DD/YYYY"
                min="1989-06-04"
                max="2021-10-25"
                value={selectedDate}
                onIonChange={(e) => setSelectedDate(e.detail.value!)}
              ></IonDatetime>
            </IonItem>

            <IonButton onClick={mensaje} expand="block" type="submit" className="ion-margin-top">
              Register
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
