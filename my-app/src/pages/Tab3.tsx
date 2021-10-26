import {
  IonLabel,
  IonInput,
  IonButton,
  IonModal,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
} from "@ionic/react";
import { useState } from "react";
import "./Tab3.css";
import bicho from "../img/bicho.jpg";

const Tab3: React.FC = () => {
  const [myModal, setMyModal] = useState({ isOpen: false });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonModal isOpen={myModal.isOpen}>
          <IonContent>
            <IonItem>
              <IonLabel>Field One</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <img src={bicho} alt="logo" />
            <h1> SIIIUUUUU </h1>
            <IonButton onClick={() => setMyModal({ isOpen: false })}>
              Close modal
            </IonButton>
          </IonContent>
        </IonModal>
        <IonButton
          className="btn btn-danger"
          onClick={() => setMyModal({ isOpen: true })}
        >
          Show modal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
