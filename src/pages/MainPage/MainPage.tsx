import { Quiz } from "components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { QuestionsResponse } from "types";

const URL = "questions.json";

export const MainPage = () => {
  const [appState, setAppState] = useState<QuestionsResponse>({
    isLoading: true,
    questions: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(URL).then((response) => {
        console.log("данные загружены");
        setAppState({
          isLoading: false,
          questions: response.data,
        });
      });
    };
    fetchData();
    console.log("загружает данные");
  }, [setAppState]);

  return appState.isLoading ? (
    <span>Загрузка</span>
  ) : (
    <div id="content-wrapper">
      <Quiz questions={appState.questions} />
    </div>
  );
};
