"use client";
import { useState, useEffect, useCallback } from "react";
const encryptionChars = ['$', '%', '*', '#', '@', '!', '&', '^', '~', '`', '+', '=', '|', '<', '>', '?'];
const TitleBar = () => {
  const [title, setTitle] = useState("");
  const fullText = "AkumaDev";
  const getRandomEncryptionChar = useCallback(() => encryptionChars[Math.floor(Math.random() * encryptionChars.length)], []);
  const updateTitle = useCallback(() => {
    let currentIndex = 0;
    let direction = 1; 
    let encryptionStage = 0;
    return () => {
      if (currentIndex === fullText.length && direction === 1) {
        direction = -1;
        encryptionStage = 3; 
      } else if (currentIndex === 0 && direction === -1) {
        direction = 1;
        encryptionStage = 0; 
      }
      let newTitle = "";
      for (let i = 0; i < fullText.length; i++) {
        if (i < currentIndex) {
          if (encryptionStage > 0 && Math.random() < 0.3) {
            newTitle += getRandomEncryptionChar();
          } else {
            newTitle += fullText[i];
          }
        } else if (i === currentIndex) {
          if (direction === 1) {
            newTitle += getRandomEncryptionChar();
          } else if (encryptionStage > 0) {
            newTitle += getRandomEncryptionChar();
          }
        } else {
          if (encryptionStage > 1 && Math.random() < 0.5) {
            newTitle += getRandomEncryptionChar();
          } else if (encryptionStage > 2) {
            newTitle += getRandomEncryptionChar();
          }
        }
      }
      setTitle(newTitle);
      if (direction === 1) {
        currentIndex += 1;
        if (currentIndex % 3 === 0) encryptionStage = Math.min(encryptionStage + 1, 3);
      } else {
        currentIndex -= 1;
        if (currentIndex % 3 === 0) encryptionStage = Math.max(encryptionStage - 1, 0);
      }
    };
  }, [fullText, getRandomEncryptionChar]);
  useEffect(() => {
    const intervalId = setInterval(updateTitle(), 200);
    return () => clearInterval(intervalId);
  }, [updateTitle]);
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};
export default TitleBar;

