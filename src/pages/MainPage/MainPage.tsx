import React, { useEffect, useState } from "react";
import axios from "axios";
import { QuestionsResponse } from "types";
import { CustomSpinner, Quiz } from "components";

const URL = "questions.json";

export const MainPage = () => {
  const [appState, setAppState] = useState<QuestionsResponse>({
    isLoading: true,
    questions: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(URL).then((response) => {
        setAppState({
          isLoading: false,
          questions: response.data,
        });
      });
    };
    fetchData();
  }, [setAppState]);

  return appState.isLoading ? (
    <CustomSpinner />
  ) : (
    <div id="content-wrapper">
      <Quiz questions={appState.questions} />
    </div>
  );
};
